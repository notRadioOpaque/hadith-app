import render from "../lib/dom";

export default function createBottomSlider() {
  const bottomSlider = document.createElement("div");
  bottomSlider.className = "";

  render([], bottomSlider);

  return bottomSlider;
}
