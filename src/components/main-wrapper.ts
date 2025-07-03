import render from "../lib/dom";
import createLeftSlider from "./left-slider";
import createLeftSection from "./main-left-section";
import createRightSection from "./main-right-section";
import createSubscribeModal from "./subscribe-modal";

export default function createMain() {
  const main = document.createElement("main");
  const mainLeftDiv = createLeftSection();
  const mainRightDiv = createRightSection();
  const leftSlider = createLeftSlider();
  const subscribeModal = createSubscribeModal();

  main.className = "flex flex-1 bg-[#242124] text-[#F0FFF0]";

  render([leftSlider, mainLeftDiv, mainRightDiv, subscribeModal], main);

  return main;
}
