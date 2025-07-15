import hadithDB from "../src/store/hadith-db";

function viewAllHadiths() {
  const rows = hadithDB
    .prepare("SELECT * FROM daily_hadith ORDER BY id ASC")
    .all();

  if (rows.length === 0) {
    console.log("📭 No hadiths stored yet.");
    return;
  }

  rows.forEach((row: any) => {
    const hadith = JSON.parse(row.data);
    console.log(`\n🧾 Hadith #${row.id} (served_at: ${row.served_at}):`);
    console.log(`🆔 Hadith ID: ${hadith.id}`);
    console.log(`📌 Title: ${hadith.title}`);
    // console.log(`📖 Hadeeth: ${hadith.hadeeth}`);
    // console.log(`🗂️ Categories: ${hadith.categories.join(", ")}`);
    // console.log(`📚 Narrator: ${hadith.attribution}`);
    console.log("—".repeat(50));
  });
}

viewAllHadiths();
