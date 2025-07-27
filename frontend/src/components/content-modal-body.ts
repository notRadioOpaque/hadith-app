import render from "../lib/dom";
import createContentModalLeft from "./content-modal-left";
import createContentModalRight from "./content-modal-right";
import type { Hadith } from "../types";


export default function createContentModalBody(hadith: Hadith) {
  const body = document.createElement("div");
  const hadeeth = hadith.hadeeth;
  const explanation = hadith.explanation;
  const hints = hadith.hints;
  const left = createContentModalLeft(hadeeth, explanation);
  const right = createContentModalRight(hints);

  body.className = "w-full flex flex-1 relative gap-4 h-full";

  render([left, right], body);

  return body;
}
