import render from "../lib/dom";
import createContentModalLeft from "./content-modal-left";
import createContentModalRight from "./content-modal-right";
// import type { Hadith } from "../types";
// import { hadithSample } from "./hadith-content";




export default function createContentModalBody (hadith: any) {
  const body = document.createElement("div");
  const hadeeth = hadith.hadeeth;
  const explanation = hadith.explanation;
  const hints = hadith.hints;
  const left = createContentModalLeft(hadeeth, explanation);
  const right = createContentModalRight(hints);


  body.className = "w-full flex flex-1 gap-4";

  render([left,right], body);

  return body
}