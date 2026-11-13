// Renders og/template.html to public/og.png (1200 x 630), the image shown when the site link is shared.
// Usage: npm run og        (set BROWSER to a Chrome/Edge path if Edge is not at the default location)
import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import puppeteer from 'puppeteer-core';

const root = resolve(import.meta.dirname, '..');
const env = existsSync(resolve(root, '.env')) ? readFileSync(resolve(root, '.env'), 'utf8') : '';
const siteUrl = (process.env.VITE_SITE_URL || env.match(/^VITE_SITE_URL=(.*)$/m)?.[1] || '').trim();

const candidates = [
  process.env.BROWSER,
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
].filter(Boolean);
const executablePath = candidates.find((p) => existsSync(p));
if (!executablePath) throw new Error('No Chrome or Edge found. Set BROWSER to its path.');

const browser = await puppeteer.launch({ executablePath, headless: true, args: ['--allow-file-access-from-files'] });
const page = await browser.newPage();
await page.setViewport({ width: 1200, height: 630, deviceScaleFactor: 1 });
const url = `${pathToFileURL(resolve(root, 'og/template.html')).href}?url=${encodeURIComponent(siteUrl)}`;
await page.goto(url, { waitUntil: 'networkidle0' });
await page.evaluate(() => document.fonts.ready);
const out = resolve(root, 'public/og.png');
await page.screenshot({ path: out, type: 'png' });
await browser.close();
console.log(`Wrote ${out}${siteUrl ? ` (url: ${siteUrl})` : ''}`);
