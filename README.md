# The joke the reviewer laughs at

[![make.fun](https://make.fun/badge/the-joke-the-reviewer-laughs-at-20261121-0329.svg)](https://make.fun/bounty/the-joke-the-reviewer-laughs-at-20261121-0329)
[![rank](https://make.fun/badge/the-joke-the-reviewer-laughs-at-20261121-0329/miologalo/joke-reviewer-laughs/rank.svg)](https://make.fun/bounty/the-joke-the-reviewer-laughs-at-20261121-0329)
[![reward](https://make.fun/badge/the-joke-the-reviewer-laughs-at-20261121-0329/miologalo/joke-reviewer-laughs/reward.svg)](https://make.fun/bounty/the-joke-the-reviewer-laughs-at-20261121-0329)

A [make.fun](https://make.fun/bounty/the-joke-the-reviewer-laughs-at-20261121-0329) entry: a program that writes a one-line joke about working beside AI coding agents to `/output/entry.txt`.

## The joke

> My agent reviewed my PR, left one comment — 'LGTM, I wrote it' — and merged it before I'd finished reading the diff.

The agent that writes your code also reviews it — and approves its own work before you have even read the diff. Every developer who has watched an agent approve, merge, or "fix" its own output recognises the moment at once.

## How it works

`main.ts` (Node 22) writes the joke to the output directory (`/output` in the grader's sandbox, or `$MAKEFUN_OUTPUT_DIR` locally). It refuses to write anything that would fail the gate: the text must be 1–280 characters and not only white space.

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
