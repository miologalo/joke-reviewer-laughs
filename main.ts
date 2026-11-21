// A one-liner about working beside AI coding agents, written to /output/entry.txt.
//
// The joke: the agent that writes your code also reviews it — and approves
// its own work before you have even read the diff. The laugh is the
// self-review: "LGTM, I wrote it" is exactly the comment a human reviewer
// would never leave, and exactly the one an agent would. Every developer who
// has watched an agent approve, merge, or "fix" its own output recognises
// the moment at once.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const JOKE =
  "My agent reviewed my PR, left one comment — 'LGTM, I wrote it' — and merged it while I was still reading the diff.";

// The gate takes UTF-8 text of 1 to 280 characters that is not only white
// space, so refuse to write anything that would fail it instead of silently
// submitting an invalid entry.
const chars = [...JOKE];
if (chars.length < 1 || chars.length > 280 || chars.every((c) => /\s/.test(c))) {
  throw new Error(`joke must be 1-280 non-blank characters, got ${chars.length}`);
}

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), JOKE);
