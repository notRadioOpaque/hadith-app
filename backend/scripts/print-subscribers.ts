import db from "../src/store/db";

const rows = db.prepare("SELECT * FROM subscribers").all();
console.table(rows);
