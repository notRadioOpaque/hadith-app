import render from "../lib/dom";

export default function createLeftSlider() {
  const header = document.createElement("header");
  header.className = "";

  render([], header);

  return header;
}
