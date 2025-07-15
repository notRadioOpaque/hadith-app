import { getTodayHadith } from "../lib/prepare-daily-hadith";

const express = require("express");
const router = express.Router();

router.get("/get-daily-hadith", (req: any, res: any) => {
  const hadith = getTodayHadith();

  if (!hadith) return res.status(404).json({ error: "No hadith found" });

  return res.json(hadith);
});

module.exports = router;
