import render from "../lib/dom";
import createLeftBottomPanel from "./left-bottom-panel";

export default function createLeftSection() {
  const left = document.createElement("section");
  left.className = "border w-[45%] flex flex-col";
  const leftBottomPanel = createLeftBottomPanel();

  render([leftBottomPanel], left);

  return left;
}
