#!/usr/bin/env node
'use strict';

const fs = require('node:fs');
const path = require('node:path');

const HOST = process.env.SONAR_HOST_URL || 'https://sonarcloud.io';
const PROJECT_KEY = process.env.SONAR_PROJECT_KEY || 'd2v6_Ghost';
const ORG = process.env.SONAR_ORGANIZATION || 'd2v6';
const BRANCH = process.env.SONAR_BRANCH || 'main';
const OUT_DIR = process.env.SONAR_FINDINGS_DIR || 'sonar-findings';
const TOKEN = process.env.SONAR_TOKEN || '453ad72ea7ef2714b9c4b686bb62e9858fe813a4 ';
const PAGE_SIZE = Number.parseInt(process.env.SONAR_PAGE_SIZE || '500', 10);
const ISSUE_STATUSES = process.env.SONAR_ISSUE_STATUSES || 'OPEN,CONFIRMED';
const HOTSPOT_STATUS = process.env.SONAR_HOTSPOT_STATUS || '';

if (!TOKEN) {
    console.error('Set SONAR_TOKEN before running this script.');
    process.exit(1);
}

if (HOST.includes('sonarcloud.io') && !ORG) {
    console.error('Set SONAR_ORGANIZATION before running this script.');
    process.exit(1);
}

if (!Number.isInteger(PAGE_SIZE) || PAGE_SIZE < 1 || PAGE_SIZE > 500) {
    console.error('SONAR_PAGE_SIZE must be an integer from 1 to 500.');
    process.exit(1);
}

function apiUrl(endpoint, params = {}) {
    const url = new URL(`/api${endpoint}`, HOST);

    for (const [key, value] of Object.entries(params)) {
        if (value !== undefined && value !== null && value !== '') {
            url.searchParams.set(key, String(value));
        }
    }

    return url;
}

async function fetchJson(url) {
    const response = await fetch(url, {
        headers: {
            accept: 'application/json',
            authorization: `Bearer ${TOKEN}`
        }
    });
    const text = await response.text();
    let body;

    try {
        body = text ? JSON.parse(text) : {};
    } catch {
        body = {};
    }

    if (!response.ok) {
        const sonarError = body.errors?.map(error => error.msg).join('; ');
        throw new Error(`${response.status} ${response.statusText}: ${sonarError || text}`);
    }

    return body;
}

async function fetchAll(endpoint, itemKey, params) {
    const items = [];
    let page = 1;
    let total = 0;

    do {
        const body = await fetchJson(apiUrl(endpoint, {
            ...params,
            p: page,
            ps: PAGE_SIZE
        }));
        const pageItems = body[itemKey] || [];

        total = body.paging?.total ?? body.total ?? pageItems.length;
        items.push(...pageItems);
        page += 1;

        if (pageItems.length === 0) {
            break;
        }
    } while (items.length < total);

    return {
        total,
        fetched: items.length,
        [itemKey]: items
    };
}

function issueParams() {
    return {
        organization: ORG,
        componentKeys: PROJECT_KEY,
        branch: BRANCH,
        issueStatuses: ISSUE_STATUSES,
        impactSoftwareQualities: 'SECURITY'
    };
}

function hotspotParams() {
    return {
        organization: ORG,
        projectKey: PROJECT_KEY,
        branch: BRANCH,
        status: HOTSPOT_STATUS
    };
}

function cleanComponent(component) {
    const prefix = `${PROJECT_KEY}:`;
    return component?.startsWith(prefix) ? component.slice(prefix.length) : component;
}

function issueSeverity(issue) {
    if (issue.severity) {
        return issue.severity;
    }

    const securityImpact = issue.impacts?.find(impact => impact.softwareQuality === 'SECURITY');
    return securityImpact?.severity || '';
}

function issueStatus(issue) {
    return issue.issueStatus || issue.status || '';
}

function lineForFinding(finding) {
    const file = cleanComponent(finding.component) || finding.component || 'unknown';
    return finding.line ? `${file}:${finding.line}` : file;
}

function markdownIssue(issue) {
    const lines = [
        `### ${issue.message}`,
        '',
        `- Key: \`${issue.key}\``,
        `- Rule: \`${issue.rule}\``,
        `- Severity: \`${issueSeverity(issue)}\``,
        `- Status: \`${issueStatus(issue)}\``,
        `- Location: \`${lineForFinding(issue)}\``
    ];

    if (issue.type) {
        lines.push(`- Type: \`${issue.type}\``);
    }

    if (issue.cleanCodeAttribute) {
        lines.push(`- Code attribute: \`${issue.cleanCodeAttribute}\``);
    }

    if (issue.tags?.length) {
        lines.push(`- Tags: ${issue.tags.map(tag => `\`${tag}\``).join(', ')}`);
    }

    if (issue.effort) {
        lines.push(`- Effort: \`${issue.effort}\``);
    }

    return lines;
}

function markdownHotspot(hotspot) {
    const lines = [
        `### ${hotspot.message}`,
        '',
        `- Key: \`${hotspot.key}\``,
        `- Rule: \`${hotspot.ruleKey || hotspot.rule || ''}\``,
        `- Status: \`${hotspot.status || ''}\``,
        `- Vulnerability probability: \`${hotspot.vulnerabilityProbability || ''}\``,
        `- Location: \`${lineForFinding(hotspot)}\``
    ];

    if (hotspot.securityCategory) {
        lines.push(`- Security category: \`${hotspot.securityCategory}\``);
    }

    return lines;
}

function writeMarkdownSummary(issues, hotspots, outPath) {
    const lines = [
        '# SonarCloud Security Findings',
        '',
        `Project: \`${PROJECT_KEY}\``,
        `Branch: \`${BRANCH}\``,
        '',
        '## Security Issues',
        '',
        `Total security issues fetched: ${issues.fetched} of ${issues.total}`,
        ''
    ];

    for (const issue of issues.issues) {
        lines.push(...markdownIssue(issue), '');
    }

    lines.push(
        '## Security Hotspots',
        '',
        `Total security hotspots fetched: ${hotspots.fetched} of ${hotspots.total}`,
        ''
    );

    for (const hotspot of hotspots.hotspots) {
        lines.push(...markdownHotspot(hotspot), '');
    }

    fs.writeFileSync(outPath, `${lines.join('\n').trim()}\n`);
}

async function main() {
    fs.mkdirSync(OUT_DIR, {recursive: true});

    console.log(`Fetching Sonar security issues for ${PROJECT_KEY} on branch ${BRANCH}...`);
    const issues = await fetchAll('/issues/search', 'issues', issueParams());
    const issuesPath = path.join(OUT_DIR, 'issues.json');
    fs.writeFileSync(issuesPath, `${JSON.stringify(issues, null, 2)}\n`);

    console.log(`Fetching Sonar security hotspots for ${PROJECT_KEY} on branch ${BRANCH}...`);
    const hotspots = await fetchAll('/hotspots/search', 'hotspots', hotspotParams());
    const hotspotsPath = path.join(OUT_DIR, 'hotspots.json');
    fs.writeFileSync(hotspotsPath, `${JSON.stringify(hotspots, null, 2)}\n`);

    const summaryPath = path.join(OUT_DIR, 'findings-summary.md');
    writeMarkdownSummary(issues, hotspots, summaryPath);

    console.log('Saved:');
    console.log(`  ${issuesPath}`);
    console.log(`  ${hotspotsPath}`);
    console.log(`  ${summaryPath}`);
}

main().catch((error) => {
    console.error(`Error: ${error.message}`);
    process.exit(1);
});
