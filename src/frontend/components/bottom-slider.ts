import render from "../../shared/lib/dom";

export default function createBottomSlider() {
  const bottomSlider = document.createElement("div");
  bottomSlider.className = "";

  render([], bottomSlider);

  return bottomSlider;
}
