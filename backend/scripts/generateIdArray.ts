import { readFileSync, writeFileSync } from "fs";
import { join } from "path";

const inputPath = join(__dirname, "../src/resources/hadithIDs.txt");
const outputPath = join(__dirname, "../src/constants/IDs.ts");

try {
  const raw = readFileSync(inputPath, "utf8");
  const ids = raw
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  const tsContent = `export const ids = [\n${ids.map((id) => `  "${id}"`).join(",\n")}\n];\n`;
  writeFileSync(outputPath, tsContent, "utf8");

  console.log(`✅ ids.ts generated with ${ids.length} IDs`);
} catch (err) {
  console.error("❌ Error:", err);
}
