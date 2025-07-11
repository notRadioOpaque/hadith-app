import { Hadith } from "../constants/types";
import hadithDB from "../store/hadith-db";

export async function saveHadith(hadith: Hadith) {
  hadithDB
    .prepare(
      `
    INSERT OR REPLACE INTO daily_hadith (id, data, served_at)
    VALUES (?, ?, DATE('now'))
  `,
    )
    .run(hadith.id, JSON.stringify(hadith));
}

// Get today’s hadith
export function getTodayHadith(): Hadith | null {
  const row: any = hadithDB
    .prepare(
      `
    SELECT data FROM daily_hadith WHERE served_at = DATE('now')
  `,
    )
    .get();

  return row ? JSON.parse(row.data) : null;
}
