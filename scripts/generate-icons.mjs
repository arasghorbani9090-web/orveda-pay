// One-off icon generator. Rasterizes public/favicon.svg into the PNG sizes
// and a multi-resolution favicon.ico used by the site.
//
// To run again:  npm i -D sharp png-to-ico  &&  node scripts/generate-icons.mjs
import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import sharp from "sharp";
import pngToIco from "png-to-ico";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const pub = join(root, "public");
const svg = await readFile(join(pub, "favicon.svg"));

const png = (size) =>
  sharp(svg, { density: 384 }).resize(size, size).png().toBuffer();

const targets = [
  ["favicon-16x16.png", 16],
  ["favicon-32x32.png", 32],
  ["favicon-96x96.png", 96],
  ["apple-touch-icon.png", 180],
  ["icon-192.png", 192],
  ["icon-512.png", 512],
];

for (const [name, size] of targets) {
  const buf = await png(size);
  await writeFile(join(pub, name), buf);
  console.log(`wrote public/${name} (${size}x${size})`);
}

// favicon.ico bundles 16 / 32 / 48 for classic browser + Google support.
const icoSizes = await Promise.all([16, 32, 48].map((s) => png(s)));
const ico = await pngToIco(icoSizes);
await writeFile(join(pub, "favicon.ico"), ico);
console.log("wrote public/favicon.ico (16/32/48)");
