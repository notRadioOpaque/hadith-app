import Database from "better-sqlite3";
import path from "path";

const hadithDB = new Database(path.join(__dirname, "hadith.db"));

hadithDB
  .prepare(
    `
  CREATE TABLE IF NOT EXISTS daily_hadith (
    id TEXT PRIMARY KEY,
    data TEXT NOT NULL,
    served_at TEXT DEFAULT CURRENT_DATE
  )
`,
  )
  .run();

export default hadithDB;
