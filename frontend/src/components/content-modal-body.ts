import render from "../lib/dom";
import createContentModalLeft from "./content-modal-left";
import createContentModalRight from "./content-modal-right";

export default function createContentModalBody () {
  const body = document.createElement("body");
  const left = createContentModalLeft();
  const right = createContentModalRight();

  body.className = "border w-full h-[93%] border-blue-500";

  render([left,right], body);

  return body
}