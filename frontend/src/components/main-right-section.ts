import { image4 } from "../assets/images";
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
  imageWrapper.className =
    "relative w-full h-[93%] rounded-bl-[25px] overflow-hidden";

  const image = document.createElement("img");
  image.className = "block w-full h-full object-cover";

  let fetchedImageUrl: string | undefined;
  let attributionEl: HTMLElement | undefined;

  try {
    const result = await fetchRandomMosqueImage();
    if (result) {
      fetchedImageUrl = result.url;

      // ✅ Overlay attribution
      attributionEl = document.createElement("small");
      attributionEl.className =
        "absolute bottom-2 right-2 bg-black/50 text-white/60 text-xs px-2 py-1 rounded";
      attributionEl.innerHTML = `
        Photo by 
        <a href="${result.user.links.html}" target="_blank" rel="noopener noreferrer" class="underline">
          ${result.user.name}
        </a> 
        on 
        <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer" class="underline">
          Unsplash
        </a>
      `;
    }
  } catch (err) {
    console.error("⚠️ Falling back to local image", err);
  }

  image.src = fetchedImageUrl || image4;

  if (attributionEl) {
    render([image, attributionEl], imageWrapper);
  } else {
    render([image], imageWrapper);
  }

  return imageWrapper;
}

async function fetchRandomMosqueImage(): Promise<
  { url: string; user: any; links: any } | undefined
> {
  const accessKey = import.meta.env.VITE_UNSPLASH_API_KEY || "";

  if (!accessKey) {
    throw new Error("VITE_UNSPLASH_API_KEY is not set");
  }

  const url = `https://api.unsplash.com/photos/random?query=mosque&orientation=landscape&client_id=${accessKey}`;

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error("Failed to fetch image");

    const image = await res.json();

    // ✅ Trigger download (Unsplash requirement)
    await fetch(image.links.download_location, {
      headers: {
        Authorization: `Client-ID ${accessKey}`,
      },
    });

    const baseImageUrl = image.urls.raw || image.urls.full;
    const highQualityImage = getHighQualityImageUrl(baseImageUrl);

    return { url: highQualityImage, user: image.user, links: image.links };
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