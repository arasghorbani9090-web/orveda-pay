// Captures screenshots of the live Orveda Pay deployment for the README gallery.
// Usage: node scripts/capture-screenshots.mjs
import { chromium } from "playwright";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = join(root, "docs", "screenshots");
const base = process.env.SITE_URL || "https://www.orvedapay.com";

const pages = [
  ["home", "/"],
  ["solutions", "/solutions"],
  ["multi-currency-accounts", "/multi-currency-accounts"],
  ["international-payments", "/international-payments"],
  ["compliance-security", "/compliance-security"],
  ["pricing", "/pricing"],
  ["about", "/about"],
  ["contact", "/contact"],
  ["dashboard", "/dashboard"],
  ["signin", "/signin"],
  ["register", "/register"],
];

const browser = await chromium.launch();
const context = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  deviceScaleFactor: 2,
});
const page = await context.newPage();

for (const [name, path] of pages) {
  const url = `${base}${path}`;
  try {
    await page.goto(url, { waitUntil: "networkidle", timeout: 45000 });
    // Trigger in-view animations by scrolling through the page, then return to top.
    await page.evaluate(async () => {
      await new Promise((resolve) => {
        let y = 0;
        const step = () => {
          window.scrollTo(0, y);
          y += window.innerHeight;
          if (y < document.body.scrollHeight) setTimeout(step, 120);
          else { window.scrollTo(0, 0); setTimeout(resolve, 400); }
        };
        step();
      });
    });
    await page.waitForTimeout(900);
    await page.screenshot({ path: join(outDir, `${name}.png`) });
    console.log(`captured ${name}.png  <-  ${url}`);
  } catch (err) {
    console.error(`FAILED ${name} (${url}): ${err.message}`);
  }
}

await browser.close();
console.log("done");
