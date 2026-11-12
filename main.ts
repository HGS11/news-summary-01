import { mkdir, copyFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
await mkdir(outputDir, { recursive: true });
await copyFile(join(here, "summary.txt"), join(outputDir, "entry.txt"));
