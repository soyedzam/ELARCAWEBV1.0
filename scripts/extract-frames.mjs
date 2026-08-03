// Extract a scroll-scrub frame sequence from a source video using the
// static ffmpeg binary shipped by `ffmpeg-static` (no system ffmpeg needed).
//
// Usage:
//   node scripts/extract-frames.mjs <inputVideo> <outDir> <frameCount> [width]
//
// Produces frame_0001.jpg ... frame_NNNN.jpg, evenly sampled across the clip,
// scaled to <width> (default 1280) and JPEG-compressed for a light payload.
// Also writes <outDir>/manifest.json with { count, width, pattern }.

import { spawnSync } from 'node:child_process';
import { mkdirSync, rmSync, writeFileSync, readdirSync, renameSync } from 'node:fs';
import { resolve, basename, join } from 'node:path';
import ffmpegPath from 'ffmpeg-static';

const [, , input, outDir, frameCountArg, widthArg, reverseArg] = process.argv;

if (!input || !outDir || !frameCountArg) {
  console.error('Usage: node scripts/extract-frames.mjs <input> <outDir> <count> [width] [reverse]');
  process.exit(1);
}

const frameCount = parseInt(frameCountArg, 10);
const width = parseInt(widthArg ?? '1280', 10);
const reverse = reverseArg === 'reverse';
const absOut = resolve(outDir);

// Probe duration via ffmpeg (parse stderr) so we can evenly distribute frames.
function probeDuration(file) {
  const res = spawnSync(ffmpegPath, ['-i', file], { encoding: 'utf8' });
  const out = `${res.stdout}\n${res.stderr}`;
  const m = out.match(/Duration:\s*(\d+):(\d+):(\d+\.\d+)/);
  if (!m) return null;
  return (+m[1]) * 3600 + (+m[2]) * 60 + parseFloat(m[3]);
}

const duration = probeDuration(input);
if (!duration) {
  console.error(`Could not read duration for ${input}`);
  process.exit(1);
}

// Target fps that yields ~frameCount frames across the whole clip.
const fps = (frameCount / duration).toFixed(6);

rmSync(absOut, { recursive: true, force: true });
mkdirSync(absOut, { recursive: true });

console.log(`[frames] ${basename(input)} dur=${duration.toFixed(2)}s -> ${frameCount} frames @ ${width}px (fps=${fps})`);

const args = [
  '-y',
  '-i', input,
  '-vf', `fps=${fps},scale=${width}:-2:flags=lanczos`,
  '-q:v', '3',
  '-frames:v', String(frameCount),
  `${absOut}/frame_%04d.jpg`,
];

const run = spawnSync(ffmpegPath, args, { stdio: 'inherit' });
if (run.status !== 0) {
  console.error('ffmpeg extraction failed');
  process.exit(run.status ?? 1);
}

let files = readdirSync(absOut).filter((f) => /^frame_\d+\.jpg$/.test(f)).sort();

// Reverse temporal order so scroll runs the clip backwards (e.g. disassembly
// footage becomes an assembly-on-scroll animation).
if (reverse) {
  const n = files.length;
  files.forEach((f) => renameSync(join(absOut, f), join(absOut, `tmp_${f}`)));
  files.forEach((f, idx) => {
    const target = `frame_${String(n - idx).padStart(4, '0')}.jpg`;
    renameSync(join(absOut, `tmp_${f}`), join(absOut, target));
  });
  files = readdirSync(absOut).filter((f) => /^frame_\d+\.jpg$/.test(f)).sort();
  console.log(`[frames] reversed ${n} frames`);
}

const manifest = {
  count: files.length,
  width,
  pattern: 'frame_%04d.jpg',
  source: basename(input),
  reversed: reverse,
};
writeFileSync(`${absOut}/manifest.json`, JSON.stringify(manifest, null, 2));
console.log(`[frames] wrote ${files.length} frames + manifest.json to ${absOut}`);
