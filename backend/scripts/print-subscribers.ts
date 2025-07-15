import subscribersDB from "../src/store/subscribers-db";

const rows = subscribersDB.prepare("SELECT * FROM subscribers").all();
console.table(rows);
