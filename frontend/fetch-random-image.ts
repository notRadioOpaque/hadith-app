import "dotenv/config";

const accessKey = "BLq7mIX4woI5jEfUTl0dATesW3yJ0HIYJag7P3v4YbM";

if (!accessKey) {
  throw new Error("UNSPLASH_API_KEY is not set");
}

async function fetchRandomMosqueImage() {
  const url = `https://api.unsplash.com/photos/random?query=mosque&orientation=landscape&client_id=${accessKey}`;

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error("Failed to fetch image");
    const image = await res.json();

    const baseImageUrl = image.urls.raw || image.urls.full;
    const highQualityImage = getHighQualityImageUrl(baseImageUrl);

    console.log("🖼️ High-Quality Image URL:", highQualityImage);
    console.log("🔗 View on Unsplash:", image.links.html);
  } catch (err: any) {
    console.error("❌ Error:", err.message);
  }
}

fetchRandomMosqueImage();

function getHighQualityImageUrl(baseUrl: string): string {
  const params = new URLSearchParams({
    w: "1920",
    dpr: "2",
    q: "100",
    fm: "jpg",
    fit: "max",
  });

  return `${baseUrl}&${params.toString()}`;
}
