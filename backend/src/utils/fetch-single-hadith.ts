import { BASE_URL } from "../constants";

export async function fetchSingleHadith(id: string) {
  const normalizedId = parseInt(id);
  const res = await fetch(
    `${BASE_URL}/hadeeths/one/?language=en&id=${normalizedId}`,
  );

  if (!res.ok) {
    throw new Error(`Failed to fetch hadith: ${res.statusText}`);
  }

  return res;
}
