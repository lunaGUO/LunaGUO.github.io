#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'node:fs';
import { parse } from 'smol-toml';

const FILE = 'content/publications.toml';
const raw = readFileSync(FILE, 'utf-8');
const config = parse(raw);

if (!config.scholar_url) {
    console.log('No scholar_url configured in content/publications.toml; skipping.');
    process.exit(0);
}

const res = await fetch(config.scholar_url, {
    headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36',
    },
});

if (!res.ok) {
    console.log(`Google Scholar returned HTTP ${res.status}; skipping update.`);
    process.exit(0);
}

const html = await res.text();
// Scholar's stats table renders as three rows (citations, h-index, i10-index),
// each with an "all time" and "since <year>" column, in that fixed order.
const values = [...html.matchAll(/<td class="gsc_rsb_std">(\d+)<\/td>/g)].map((m) => Number(m[1]));

if (values.length < 4) {
    console.log('Could not find citation stats in the response (Scholar may be rate-limiting or blocking this request); skipping.');
    process.exit(0);
}

const [citations, , hIndex] = values;

if (!Number.isFinite(citations) || !Number.isFinite(hIndex)) {
    console.log('Parsed values look invalid; skipping.');
    process.exit(0);
}

const today = new Date().toISOString().slice(0, 10);

let updated = raw
    .replace(/^citations = .*$/m, `citations = ${citations}`)
    .replace(/^h_index = .*$/m, `h_index = ${hIndex}`);

updated = updated.includes('citations_updated')
    ? updated.replace(/^citations_updated = .*$/m, `citations_updated = "${today}"`)
    : `${updated.trimEnd()}\ncitations_updated = "${today}"\n`;

if (updated === raw) {
    console.log('No changes.');
    process.exit(0);
}

writeFileSync(FILE, updated);
console.log(`Updated citations=${citations}, h_index=${hIndex}, as of ${today}`);
