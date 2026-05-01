import fs from 'node:fs';
import path from 'node:path';
import {createRequire} from 'node:module';
import {fileURLToPath, pathToFileURL} from 'node:url';

const require = createRequire(import.meta.url);

export function repoRootFrom(importMetaUrl) {
    let dir = path.dirname(fileURLToPath(importMetaUrl));

    while (dir !== path.dirname(dir)) {
        const lockfile = path.join(dir, 'pnpm-lock.yaml');
        const pnpmStore = path.join(dir, 'node_modules', '.pnpm');

        if (fs.existsSync(lockfile) && fs.existsSync(pnpmStore)) {
            return dir;
        }

        dir = path.dirname(dir);
    }

    throw new Error('Could not find the Ghost repo root with node_modules/.pnpm installed.');
}

export function localPackagePath(repoRoot, pnpmFolder, packageName) {
    const packagePath = path.join(repoRoot, 'node_modules', '.pnpm', pnpmFolder, 'node_modules', packageName);

    if (!fs.existsSync(packagePath)) {
        throw new Error(`Missing ${packageName} package at ${packagePath}`);
    }

    return packagePath;
}

function pnpmFolderPrefix(packageName, version) {
    return `${packageName.replace('/', '+')}@${version}`;
}

export function localPackageVersionPath(repoRoot, packageName, version) {
    const pnpmStore = path.join(repoRoot, 'node_modules', '.pnpm');
    const prefix = pnpmFolderPrefix(packageName, version);

    if (!fs.existsSync(pnpmStore)) {
        throw new Error(`Missing pnpm store at ${pnpmStore}. Run pnpm install from the repo root first.`);
    }

    const candidates = fs.readdirSync(pnpmStore)
        .filter(folder => folder === prefix || folder.startsWith(`${prefix}_`))
        .sort()
        .map(folder => path.join(pnpmStore, folder, 'node_modules', packageName))
        .filter(packagePath => fs.existsSync(packagePath));

    if (!candidates.length) {
        throw new Error(`Missing ${packageName}@${version} in ${pnpmStore}. Run pnpm install from the repo root first.`);
    }

    return candidates[0];
}

export function requireLocalPackage(repoRoot, pnpmFolder, packageName) {
    return require(localPackagePath(repoRoot, pnpmFolder, packageName));
}

export function requireLocalPackageVersion(repoRoot, packageName, version) {
    return require(localPackageVersionPath(repoRoot, packageName, version));
}

export async function importLocalPackage(repoRoot, pnpmFolder, packageName, entrypoint = '') {
    const packagePath = localPackagePath(repoRoot, pnpmFolder, packageName);
    const resolvedPath = entrypoint ? path.join(packagePath, entrypoint) : packagePath;

    return import(pathToFileURL(resolvedPath).href);
}

export async function importLocalPackageVersion(repoRoot, packageName, version, entrypoint = '') {
    const packagePath = localPackageVersionPath(repoRoot, packageName, version);
    const resolvedPath = entrypoint ? path.join(packagePath, entrypoint) : packagePath;

    return import(pathToFileURL(resolvedPath).href);
}
