import { writeFileSync } from "node:fs";
import { BASE_URL } from "../constants";

export async function fetchCategoryList() {
  const res = await fetch(`${BASE_URL}/categories/list/?language=en`);

  if (!res.ok) {
    throw new Error(`Failed to fetch hadith: ${res.statusText}`);
  }

  const data = await res.json();

  const totalCategories = data.length;

  const totalHadiths = data
    .map((hadith: any) => parseInt(hadith.hadeeths_count))
    .reduce((acc: number, cur: number) => acc + cur, 0);

  try {
    const summary = `Total Categories: ${totalCategories}\nTotal Hadiths: ${totalHadiths}\n\n`;

    const categoryLines = data
      .map((cat: any) => `${cat.id} - ${cat.hadeeths_count}`)
      .join("\n");

    const output = summary + categoryLines;

    writeFileSync("categoryHadithsCount.txt", output, "utf8");

    console.log("✅ data written to categoryHadithsCount.txt");
  } catch (error) {
    console.log("❌ error: ", error);
  }
}
