// news-image-20261124 — entry program.
//
// Copies the pre-built front-page image (entry.png) into the output
// directory. The image itself was rendered from verified news of
// Tuesday 24 November 2026 (see README.md for the story list and
// sources). The program does no network access and reads nothing
// outside this repository.
//
// Run:  mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
import { createHash } from "node:crypto";
import {
  copyFileSync,
  existsSync,
  mkdirSync,
  readFileSync,
  readdirSync,
  rmSync,
  statSync,
} from "node:fs";
import { join } from "node:path";

const MAX_BYTES = 1048576; // 1 MiB, the competition limit
const PNG_MAGIC = Buffer.from([0x89, 0x50, 0x4e, 0x47]);
const JPG_MAGIC = Buffer.from([0xff, 0xd8, 0xff]);

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
const src = new URL("./entry.png", import.meta.url).pathname;

const bytes = readFileSync(src);
if (bytes.length > MAX_BYTES) {
  throw new Error(`entry.png is ${bytes.length} bytes, over the 1 MiB limit`);
}
const isPng = bytes.subarray(0, 4).equals(PNG_MAGIC);
const isJpg = bytes.subarray(0, 3).equals(JPG_MAGIC);
if (!isPng && !isJpg) {
  throw new Error("entry.png is neither PNG nor JPEG (bad magic bytes)");
}
if (isPng) {
  // PNG header: width and height are big-endian uint32 at bytes 16 and 20.
  const width = bytes.readUInt32BE(16);
  const height = bytes.readUInt32BE(20);
  if (width > 1024 || height > 1024) {
    throw new Error(`entry.png is ${width}x${height}, over the 1024x1024 limit`);
  }
  console.log(`entry.png is ${width}x${height}`);
}

mkdirSync(outDir, { recursive: true });
// Clear only the contents of the output dir, never the dir itself:
// the grader mounts it, so removing it would break the run.
for (const name of readdirSync(outDir)) {
  rmSync(join(outDir, name), { recursive: true, force: true });
}

const dest = join(outDir, "entry.png");
copyFileSync(src, dest);

const written = readFileSync(dest);
if (!written.equals(bytes)) {
  throw new Error("output entry.png differs from the source image");
}
const hash = createHash("sha256").update(bytes).digest("hex");
console.log(`wrote ${dest} (${bytes.length} bytes, sha256 ${hash})`);
