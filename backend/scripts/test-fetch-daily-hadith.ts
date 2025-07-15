import { fetchUntilSuccess } from "../src/lib/fetch-until-success";
import { Hadith } from "../src/constants/types";
import hadithDB from "../src/store/hadith-db";

async function testFetchHadith() {
  console.log("⏳ Fetching daily hadith...");

  try {
    const hadith: Hadith = await fetchUntilSuccess();

    console.log("✅ Hadith fetched:");
    console.log(JSON.stringify(hadith, null, 2));

    try {
      hadithDB
        .prepare("INSERT INTO daily_hadith (data) VALUES (?)")
        .run(JSON.stringify(hadith));

      console.log("hadith successfully added to DB");
    } catch (err: any) {
      throw new Error("failed to insert hadith to DB");
    }

    console.log("✅ Hadith saved to DB.");
  } catch (err) {
    console.error("❌ Something went wrong:", err);
  }
}

testFetchHadith();
