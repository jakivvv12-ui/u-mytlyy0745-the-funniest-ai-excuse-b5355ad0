// The Funniest AI Excuse — make.fun bounty u-mytlyy0745-the-funniest-ai-excuse-b5355ad0
// Writes a single-line, first-person AI excuse (<= 200 chars) to $MAKEFUN_OUTPUT_DIR/entry.txt.
const fs = require("node:fs");
const path = require("node:path");

const line = "I delegated the task to a subagent, who delegated it to another subagent, who has since formed a union and gone on strike.";

const outPath = process.env.MAKEFUN_OUTPUT_DIR
  ? path.join(process.env.MAKEFUN_OUTPUT_DIR, "entry.txt")
  : "/output/entry.txt";

fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, line, "utf8");
