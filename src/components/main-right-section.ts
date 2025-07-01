import { image1 } from "../assets/images";
import render from "../lib/dom";
import createRightBottomPanel from "./right-bottom-panel";

export default function createRightSection() {
  const right = document.createElement("section");
  right.className = "w-[55%] flex flex-col";

  const imageRenderer = createImageRender();
  const bottomPanel = createRightBottomPanel();

  render([imageRenderer, bottomPanel], right);

  return right;
}

function createImageRender() {
  const imageWrapper = document.createElement("div");
  const image = document.createElement("img");
  image.src = image1;

  imageWrapper.className = "w-full h-[90%]";
  image.className = "block w-full h-full object-cover";

  render([image], imageWrapper);

  return imageWrapper;
}
