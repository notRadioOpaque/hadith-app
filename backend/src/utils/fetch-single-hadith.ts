import { BASE_URL } from "../constants";

export async function fetchSingleHadith(id: number) {
  const res = await fetch(`${BASE_URL}/hadeeths/one/?language=en&id=${id}`);

  if (!res.ok) {
    throw new Error(`Failed to fetch hadith: ${res.statusText}`);
  }

  const data = await res.json();
  console.log(data, "data");
}
