import { fetchHadithList } from "../lib/fetch-hadith";

const express = require("express");
const router = express.Router();

router.get("/hadith", async (req: any, res: any) => {
  try {
    const hadith = await fetchHadithList();
    res.status(200).json({ hadith });
  } catch (error) {
    console.error("Failed to fetch hadith:", error);
    res.status(500).json({ error: "Unable to fetch Hadith" });
  }
});

module.exports = router;
