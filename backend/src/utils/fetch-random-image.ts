const accessKey = "";

async function fetchRandomMosqueImage() {
  const url = `https://api.unsplash.com/photos/random?query=mosque&orientation=landscape&client_id=${accessKey}`;

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error("Failed to fetch image");
    const image = await res.json();

    console.log("📸 Description:", image.alt_description);
    console.log("🖼️ Image URL:", image.urls.full);
    console.log("👤 Photographer:", image.user.name);
    console.log("🔗 View on Unsplash:", image.links.html);
  } catch (err: any) {
    console.error("❌ Error:", err.message);
  }
}

fetchRandomMosqueImage();
