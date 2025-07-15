import cron from "node-cron";
import { fetchUntilSuccess } from "./fetch-until-success";
import { saveHadith } from "./prepare-daily-hadith";

// fetch hadith at 11:00 PM
cron.schedule("0 23 * * *", async () => {
  console.log("Starting hadith polling...");

  try {
    const hadith = await fetchUntilSuccess();
    await saveHadith(hadith);
    console.log("Hadith saved");
  } catch (err: any) {
    console.error(`failed to fetch Hadith`, err);
  }
});

// send Hadith email at ???
