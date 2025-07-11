const Database = require("better-sqlite3");
const path = require("path");

const dbPath = path.join(__dirname, "subscribers.db");

const subscribersDB = new Database(dbPath);

subscribersDB.exec(`
  CREATE TABLE IF NOT EXISTS subscribers (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT UNIQUE NOT NULL,
    subscribed_at TEXT DEFAULT CURRENT_TIMESTAMP
  )
`);

export default subscribersDB;
