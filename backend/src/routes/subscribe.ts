import subscribersDB from "../store/subscribers-db";

const express = require("express");
const router = express.Router();

router.post("/subscribe", (req: any, res: any) => {
  const { email } = req.body;

  if (typeof email !== "string" || !email.includes("@")) {
    return res.status(400).json({ error: "Invalid Email format" });
  }

  try {
    subscribersDB
      .prepare("INSERT INTO subscribers (email) VALUES (?)")
      .run(email);
    return res.status(200).json({ success: true });
  } catch (err: any) {
    if (err.code === "SQLITE_CONSTRAINT_UNIQUE") {
      return res.status(409).json({ error: "Email already subscribed" });
    } else {
      return res.status(500).json({ error: `Internal server error: ${err}` });
    }
  }
});

module.exports = router;
