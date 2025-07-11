import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { BASE_URL, hadithCategoriesDir } from "../constants";

export async function fetchAndStorehadith() {
  try {
    const content = await readFile("categories.txt", "utf8");
    const categoryIds = content
      .split(/\r?\n/)
      .map((id: string) => id.trim())
      .filter(Boolean);

    console.log(`found ${categoryIds.length} category IDs`);

    for (const id of categoryIds) {
      const url = `${BASE_URL}/hadeeths/list/?language=en&category_id=${id}&page=1&per_page=1200`;
      console.log(`fetching hadith for category ${id}...`);

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(
          `failed to fetch category ${id}: ${response.statusText}`,
        );
      }

      const data = await response.json();

      const formatted = JSON.stringify(data, null, 2);

      const fileName = path.join(hadithCategoriesDir, `${id}.txt`);
      await writeFile(fileName, formatted, "utf8");

      console.log(`Saved hadiths for category ${id} to ${fileName}`);
    }
  } catch (error) {
    console.error("Error:", error);
  }
}
