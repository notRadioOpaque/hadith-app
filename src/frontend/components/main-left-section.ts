import render from "../../shared/lib/dom";
import createHadithContent from "./hadith-content";

export default function createLeftSection() {
  const left = document.createElement("section");
  left.className = "w-[40%] flex flex-col px-10 ml-20";

  const hadithContent = createHadithContent();

  render([hadithContent], left);

  return left;
}
