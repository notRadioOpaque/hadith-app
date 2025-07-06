import { image3 } from "../assets/images";
import render from "../../shared/lib/dom";
import createRightBottomPanel from "./right-bottom-panel";

export default function createRightSection() {
  const right = document.createElement("section");
  right.className = "w-[60%] flex flex-col";

  const imageRenderer = createImageRender();
  const bottomPanel = createRightBottomPanel();

  render([imageRenderer, bottomPanel], right);

  return right;
}

function createImageRender() {
  const imageWrapper = document.createElement("div");
  const image = document.createElement("img");
  image.src = image3;

  imageWrapper.className = "w-full h-[93%] rounded-bl-[25px] overflow-hidden";
  image.className = "block w-full h-full object-cover";

  render([image], imageWrapper);

  return imageWrapper;
}
