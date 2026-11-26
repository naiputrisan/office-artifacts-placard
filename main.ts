import { mkdirSync, writeFileSync } from "node:fs";

// One-line museum placard: the office microwave, recast as the communal
// hearth of a lost break-room civilisation. Written verbatim to
// /output/entry.txt (125 characters, one line, no trailing newline).
const PLACARD =
  "Microwave, c. 2004. Communal hearth of the break room; offerings of fish were burned here nightly, and no one ever confessed.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", PLACARD, "utf8");
