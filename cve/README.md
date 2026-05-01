# Dependency CVE Reproduction Labs

This directory contains local, dependency-only checks for the CVEs listed here.
They do not require Ghost CMS, Docker, a running Ghost server, Ghost Admin, or a
theme install. Each script creates its own small test input and exits after the
check finishes.

The lab uses normal `.js` files. `cve/package.json` sets `"type": "module"`, so
these files can still use modern `import` and `export` syntax without the `.mjs`
extension.

Run these from the repository root after dependencies are installed:

```bash
pnpm exec node cve/CVE-2024-47068/reproduce-rollup-dom-clobbering.js
pnpm exec node cve/CVE-2026-33937/reproduce-handlebars-ast-confusion.js
pnpm exec node cve/CVE-2026-39364/reproduce-vite-fs-deny-bypass.js
```

Or use the script shortcuts:

```bash
pnpm --dir cve run cve:rollup
pnpm --dir cve run cve:handlebars
pnpm --dir cve run cve:vite
```

To run all three:

```bash
pnpm --dir cve test
```

If a script says a package version is missing, run:

```bash
pnpm install
```

## Labs

| CVE | Package | Local check |
| --- | --- | --- |
| [CVE-2024-47068](./CVE-2024-47068/README.md) | Rollup | Builds vulnerable and patched Rollup bundles, then tests which one trusts a clobbered `document.currentScript.src`. |
| [CVE-2026-33937](./CVE-2026-33937/README.md) | Handlebars | Compiles a crafted AST with `handlebars@4.7.8` and verifies `handlebars@4.7.9` rejects it. |
| [CVE-2026-39364](./CVE-2026-39364/README.md) | Vite | Starts a temporary loopback Vite dev server and shows `server.fs.deny` can be bypassed with query parameters. |

## Safety Notes

- The Handlebars lab uses a harmless marker string instead of running shell
  commands.
- The Vite lab binds to `127.0.0.1`, writes a temporary `.env` file under
  `/tmp`, and deletes the lab directory when finished.
- The Rollup lab runs bundled code in a Node VM with a fake `document`; it does
  not open a browser or load remote scripts.
- The old Ghost theme-based lab has been removed so these checks stay separate
  from Ghost CMS runtime behavior.
