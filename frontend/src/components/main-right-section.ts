import { image3 } from "../assets/images";
import render from "../lib/dom";
import createRightBottomPanel from "./right-bottom-panel";

export default async function createRightSection() {
  const right = document.createElement("section");
  right.className = "w-[50%] flex flex-col";

  const imageRenderer = await createImageRender(); 
  const bottomPanel = createRightBottomPanel();

  render([imageRenderer, bottomPanel], right);

  return right;
}

async function createImageRender() {
  const imageWrapper = document.createElement("div");
  const image = document.createElement("img");

  let fetchedImageUrl: string | undefined;

  try {
    const result = await fetchRandomMosqueImage();
    fetchedImageUrl = result?.url;
  } catch (err) {
    console.error("⚠️ Falling back to local image", err);
  }

  image.src = fetchedImageUrl || image3;
  imageWrapper.className = "w-full h-[93%] rounded-bl-[25px] overflow-hidden";
  image.className = "block w-full h-full object-cover";

  render([image], imageWrapper);

  return imageWrapper;
}

async function fetchRandomMosqueImage(): Promise<{ url: string } | undefined> {
  const accessKey = process.env.UNSPLASH_API_KEY || "";

  if (!accessKey) {
    throw new Error("UNSPLASH_API_KEY is not set");
  }

  const url = `https://api.unsplash.com/photos/random?query=mosque&orientation=landscape&client_id=${accessKey}`;

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error("Failed to fetch image");

    const image = await res.json();
    const baseImageUrl = image.urls.raw || image.urls.full;
    const highQualityImage = getHighQualityImageUrl(baseImageUrl);

    return { url: highQualityImage };
  } catch (err: any) {
    console.error("❌ Error fetching image:", err.message);
    return undefined;
  }
}

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