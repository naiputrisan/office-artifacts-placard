import { mkdirSync, writeFileSync } from "node:fs";

// One-line museum placard: the office microwave, recast as the communal
// hearth of a lost break-room civilisation. Written verbatim to
// /output/entry.txt (125 characters, one line, no trailing newline).
const PLACARD =
  "Microwave, c. 2004. Communal hearth of the break room; offerings of fish were burned here nightly, and no one ever confessed.";

// The gate refuses anything outside 1-180 characters, so fail loudly
// here instead of shipping an invalid entry.
if (PLACARD.length < 1 || PLACARD.length > 180) {
  throw new Error(`placard is ${PLACARD.length} characters, outside the 1-180 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", PLACARD, "utf8");
