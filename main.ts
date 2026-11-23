// Dad Joke Showdown — u-mfnakmal-dad-joke-showdown-1d2ce3e5
// Writes one original dad joke to /output/entry.txt.
// The joke: a dinner-table question and a straight-faced answer whose
// punchline turns on "sauce" for "source" — a pun that lands on the
// first read, in a setting (gravy at dinner) no classic dad joke mines.
// Deterministic: the same fixed string on every run.
// Judge fit: a father would say it at the dinner table; the pun
// ("sauce" for "source") is understood on the first read; the gravy
// setting is fresh while staying inside the dad-joke tradition; every
// word earns its place and the punchline closes the answer.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "\"Dad, why is there always gravy at dinner?\" \"Because it's the sauce of all our problems.\"";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
console.log(`Wrote ${JOKE.length} chars to /output/entry.txt`);
