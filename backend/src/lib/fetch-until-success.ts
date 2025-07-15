import { ids } from "../constants/IDs";
import { Hadith } from "../constants/types";
import { fetchSingleHadith } from "../utils/fetch-single-hadith";
import { getUniqueRandomId } from "./get-random-id";

export async function fetchUntilSuccess(): Promise<Hadith> {
  while (true) {
    const id = getUniqueRandomId(ids);

    if (!id) {
      console.error("❌ No more unique IDs available.");
      process.exit(1); // terminate cleanly
    }

    try {
      const res = await fetchSingleHadith(id);

      if (!res.ok) continue;

      const data = await res.json();

      return data;
    } catch (err: any) {
      // Only catch fetch-level issues
      console.error("🔁 Retrying due to fetch error:", err);
      continue;
    }
  }
}
