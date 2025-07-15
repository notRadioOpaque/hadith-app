import { readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

import { hadithCategoriesDir, hadithIDsoutputFile } from "../constants";

export async function extractHadithIds() {
  try {
    const files = await readdir(hadithCategoriesDir);
    const hadithIDs: string[] = [];

    for (const file of files) {
      if (!file.endsWith(".txt")) {
        continue;
      }

      const filePath = path.join(hadithCategoriesDir, file);
      const content = await readFile(filePath, "utf8");

      let data: any;

      try {
        data = JSON.parse(content);
      } catch (err) {
        console.log("skipping file", err);
        continue;
      }

      if (!Array.isArray(data.data)) {
        console.warn(`No hadith list found in ${file}`);
        continue;
      }

      const hadithList = data.data;

      for (const hadith of hadithList) {
        if (hadith.id) {
          hadithIDs.push(hadith.id.toString());
        }
      }
    }

    // Write all IDs to hadithIDs.txt
    const uniqueSortedIDs = Array.from(new Set(hadithIDs)).sort(
      // total unique hadith === 2251
      (a, b) => Number(a) - Number(b),
    );
    await writeFile(hadithIDsoutputFile, uniqueSortedIDs.join("\n"), "utf8");

    console.log(
      `✅ Extracted ${uniqueSortedIDs.length} hadith IDs to ${hadithIDsoutputFile}`,
    );
  } catch (err) {
    console.error("❌ Error:", err);
  }
}
