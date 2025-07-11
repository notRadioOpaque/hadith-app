import { Hadith } from "../constants/types";
import { fetchSingleHadith } from "../utils/fetch-single-hadith";
import { getRandomId } from "./get-random-id";

export async function fetchUntilSuccess(): Promise<Hadith> {
  const tried = new Set<string>(); // unique value

  while (true) {
    const id = getRandomId([]);

    if (tried.has(id)) continue;
    tried.add(id);

    try {
      const res = await fetchSingleHadith(id);

      if (!res.ok) continue;

      const data = await res.json();

      return data;
    } catch (err: any) {
      continue;
    }
  }
}
