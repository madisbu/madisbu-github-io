// Generates transparent responsive hero images from main_hero.webp
// Run once: node scripts/gen-hero.mjs
import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const inputPath = path.join(root, 'public', 'main_hero.webp');
const outputDir = path.join(root, 'public', 'images');
const outputPrefix = 'hero';

async function removeBg(inputPath) {
  const { data, info } = await sharp(inputPath)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;
  const tolerance = 30;

  // Sample background from three corners and average
  const corners = [
    [0, 0],
    [width - 1, 0],
    [0, height - 1],
  ];
  let sumR = 0, sumG = 0, sumB = 0;
  for (const [x, y] of corners) {
    const pi = (y * width + x) * channels;
    sumR += data[pi]; sumG += data[pi + 1]; sumB += data[pi + 2];
  }
  const bgR = Math.round(sumR / corners.length);
  const bgG = Math.round(sumG / corners.length);
  const bgB = Math.round(sumB / corners.length);

  console.log(`Background colour sampled: rgb(${bgR}, ${bgG}, ${bgB})`);

  const colorDist = (pi) =>
    Math.sqrt((data[pi] - bgR) ** 2 + (data[pi + 1] - bgG) ** 2 + (data[pi + 2] - bgB) ** 2);

  // 0 = unvisited, 1 = background, 2 = foreground, 3 = queued
  const state = new Uint8Array(width * height);
  const queue = [];

  function enqueue(x, y) {
    if (x < 0 || x >= width || y < 0 || y >= height) return;
    const idx = y * width + x;
    if (state[idx] !== 0) return;
    state[idx] = 3;
    queue.push(idx);
  }

  // Seed from all four edges
  for (let x = 0; x < width; x++) {
    enqueue(x, 0);
    enqueue(x, height - 1);
  }
  for (let y = 1; y < height - 1; y++) {
    enqueue(0, y);
    enqueue(width - 1, y);
  }

  let qi = 0;
  while (qi < queue.length) {
    const idx = queue[qi++];
    const x = idx % width;
    const y = Math.floor(idx / width);
    const pi = idx * channels;

    if (colorDist(pi) < tolerance) {
      state[idx] = 1; // background
      enqueue(x + 1, y); enqueue(x - 1, y);
      enqueue(x, y + 1); enqueue(x, y - 1);
    } else {
      state[idx] = 2; // foreground – stop flood fill here
    }
  }

  // Apply alpha: background pixels fade from transparent (dist=0) to opaque (dist=tolerance)
  for (let idx = 0; idx < width * height; idx++) {
    if (state[idx] === 1) {
      const pi = idx * channels;
      const dist = colorDist(pi);
      data[pi + 3] = Math.round((dist / tolerance) * 255);
    }
  }

  return { data: Buffer.from(data), width, height, channels };
}

async function main() {
  fs.mkdirSync(outputDir, { recursive: true });

  console.log('Removing background…');
  const { data, width, height, channels } = await removeBg(inputPath);

  const widths = [480, 768, 1200];

  for (const w of widths) {
    const base = sharp(data, { raw: { width, height, channels } })
      .resize({ width: w, withoutEnlargement: true });

    await base.clone().avif({ quality: 55, effort: 6 }).toFile(path.join(outputDir, `${outputPrefix}-${w}.avif`));
    await base.clone().webp({ quality: 85 }).toFile(path.join(outputDir, `${outputPrefix}-${w}.webp`));
    console.log(`  done ${w}px (avif + webp)`);
  }

  console.log('Done.');
}

main().catch((err) => { console.error(err); process.exit(1); });
