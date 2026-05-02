#!/usr/bin/env node

const args = new Set(process.argv.slice(2));

if (args.has('--lr-02') || args.has('--billing')) {
    await import('./lr-02-billing-postmessage-harness.mjs');
} else if (args.has('--lr-03') || args.has('--explore')) {
    await import('./lr-03-explore-postmessage-harness.mjs');
} else {
    console.log('LR2/LR3 have been split into dedicated Ghost-like harness files.');
    console.log('');
    console.log('LR-02 browser harness:');
    console.log('  pnpm exec node sonar-findings/lr-02-billing-postmessage-harness.mjs');
    console.log('');
    console.log('LR-02 terminal evidence:');
    console.log('  pnpm exec node sonar-findings/lr-02-billing-postmessage-harness.mjs --cli');
    console.log('');
    console.log('LR-03 browser harness:');
    console.log('  pnpm exec node sonar-findings/lr-03-explore-postmessage-harness.mjs');
    console.log('');
    console.log('LR-03 terminal evidence:');
    console.log('  pnpm exec node sonar-findings/lr-03-explore-postmessage-harness.mjs --cli');
    console.log('');
    console.log('Compatibility shortcuts:');
    console.log('  pnpm exec node sonar-findings/lr2-lr3-minimal-harness.mjs --lr-02');
    console.log('  pnpm exec node sonar-findings/lr2-lr3-minimal-harness.mjs --lr-03');
}
