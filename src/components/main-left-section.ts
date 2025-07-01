import render from "../lib/dom";

export default function createLeftSection() {
  const left = document.createElement("section");
  left.className = "border w-[45%]";

  render([], left);

  return left;
}
