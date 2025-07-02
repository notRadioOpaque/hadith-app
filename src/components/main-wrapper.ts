import render from "../lib/dom";
import createLeftSlider from "./left-slider";
import createLeftSection from "./main-left-section";
import createRightSection from "./main-right-section";

export default function createMain() {
  const main = document.createElement("main");
  const mainLeftDiv = createLeftSection();
  const mainRightDiv = createRightSection();
  const leftSlider = createLeftSlider();

  main.className = "flex flex-1 bg-white";

  render([leftSlider, mainLeftDiv, mainRightDiv], main);

  return main;
}
