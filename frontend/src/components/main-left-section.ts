import render from "../lib/dom";
import createHadithContent from "./hadith-content";

export default function createLeftSection() {
  const left = document.createElement("section");
  left.className = "w-[50%] flex flex-col px-12";

  const hadithContent = createHadithContent();

  render([hadithContent], left);

  return left;
}
