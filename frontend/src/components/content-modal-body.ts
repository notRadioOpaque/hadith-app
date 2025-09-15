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

  body.className = "w-full border p-4 flex-1 flex gap-4 min-h-full";

  render([left, right], body);

  return body;
}
