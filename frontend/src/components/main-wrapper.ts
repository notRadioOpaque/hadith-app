import render from "../lib/dom";
import createLeftSlider from "./left-slider";
import createLeftSection from "./main-left-section";
import createRightSection from "./main-right-section";
import createSubscribeModal from "./subscribe-modal";
import createHadithContentModal from "./hadith-content-modal";

export default function createMain() {
  const main = document.createElement("main");
  const mainLeftDiv = createLeftSection();
  const mainRightDiv = createRightSection();
  const leftSlider = createLeftSlider();
  const subscribeModal = createSubscribeModal();
  const contentModal = createHadithContentModal();

  main.className = "flex flex-1 bg-[#242124] text-[#F0FFF0] relative z-10";

  render(
    [leftSlider, mainLeftDiv, mainRightDiv, subscribeModal, contentModal],
    main,
  );

  return main;
}
