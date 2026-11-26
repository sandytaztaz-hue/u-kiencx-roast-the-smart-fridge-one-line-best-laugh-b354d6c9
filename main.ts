// Roast the Smart Fridge: One Line, Best Laugh Wins.
// Writes exactly one line (max 160 chars) to /output/entry.txt:
// UTF-8, a single line, no trailing newline. Deterministic: the line is
// a fixed string; no clock, no network, no randomness. The joke's angle is
// the fridge's door screen running ads for food that is already inside it.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My smart fridge's touchscreen now plays ads for the cheese already " +
  "sitting inside it — it charged me $4.99 to skip the ad for my own leftovers.";

function main() {
  let outDir = "/output";
  try {
    mkdirSync(outDir, { recursive: true });
  } catch {
    outDir = "output";
    mkdirSync(outDir, { recursive: true });
  }
  writeFileSync(outDir + "/entry.txt", LINE, "utf8");
  console.log("wrote " + outDir + "/entry.txt (" + LINE.length + " chars)");
}

main();
