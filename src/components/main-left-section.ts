import render from "../lib/dom";
import createLeftBottomPanel from "./left-bottom-panel";
import createHadithContent from "./hadith-content";

export default function createLeftSection() {
  const left = document.createElement("section");
  left.className = "w-[45%] flex flex-col border border-red-500 bg-white px-14 ml-20 text-gray-500";

  const hadithContent = createHadithContent();
  const leftBottomPanel = createLeftBottomPanel();

  render([hadithContent, leftBottomPanel], left);

  return left;
}
