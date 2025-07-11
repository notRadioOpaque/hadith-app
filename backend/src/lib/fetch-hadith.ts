import { fetchSingleHadith } from "../utils/fetch-single-hadith";

export async function fetchHadithList() {
  fetchSingleHadith(1751);
}
