import render from "../lib/dom";
import createContentModalLeft from "./content-modal-left";
import createContentModalRight from "./content-modal-right";

export default function createContentModalBody () {
  const body = document.createElement("div");
  const left = createContentModalLeft();
  const right = createContentModalRight();

  body.className = "w-full flex flex-1 gap-4";

  render([left,right], body);

  return body
}