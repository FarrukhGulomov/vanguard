import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join, extname, basename } from 'path';

const IMG_DIR = './public/assets/img';

const targets = [
  // Hero bg — WebP, aggressively compressed, 1920px max width
  { file: 'hero-bg.webp', width: 1920, quality: 72, format: 'webp' },
  // Other large images
  { file: 'uzb-cis.jpg',  width: 800,  quality: 75, format: 'webp', out: 'uzb-cis.webp' },
  { file: 'whr1.jpg',     width: 800,  quality: 78, format: 'webp', out: 'whr1.webp' },
  { file: 'whr2.jpg',     width: 800,  quality: 78, format: 'webp', out: 'whr2.webp' },
  { file: 'whr3.jpg',     width: 800,  quality: 78, format: 'webp', out: 'whr3.webp' },
  { file: 'whr4.jpg',     width: 800,  quality: 78, format: 'webp', out: 'whr4.webp' },
  { file: 'truck.jpg',    width: 600,  quality: 78, format: 'webp', out: 'truck.webp' },
  { file: 'sea.jpg',      width: 600,  quality: 78, format: 'webp', out: 'sea.webp' },
  { file: 'train.jpg',    width: 600,  quality: 78, format: 'webp', out: 'train.webp' },
  { file: 'avia.jpg',     width: 600,  quality: 78, format: 'webp', out: 'avia.webp' },
  { file: 'huge.jpg',     width: 1200, quality: 75, format: 'webp', out: 'huge.webp' },
  { file: 'euro.png',     width: 800,  quality: 80, format: 'webp', out: 'euro.webp' },
  { file: 'china.jpg',    width: 800,  quality: 80, format: 'webp', out: 'china.webp' },
];

for (const t of targets) {
  const inPath  = join(IMG_DIR, t.file);
  const outFile = t.out || t.file.replace(/\.[^.]+$/, '.webp');
  const outPath = join(IMG_DIR, outFile);

  try {
    const before = (await stat(inPath)).size;
    await sharp(inPath)
      .resize({ width: t.width, withoutEnlargement: true })
      .webp({ quality: t.quality })
      .toFile(outPath);
    const after = (await stat(outPath)).size;
    const saved = ((1 - after / before) * 100).toFixed(0);
    console.log(`✅ ${t.file.padEnd(20)} ${(before/1024).toFixed(0).padStart(6)} KB → ${(after/1024).toFixed(0).padStart(5)} KB  (-${saved}%)`);
  } catch (e) {
    console.error(`❌ ${t.file}: ${e.message}`);
  }
}
