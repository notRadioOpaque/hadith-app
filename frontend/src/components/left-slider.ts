import { slider_right_arrow } from "../assets/icons";
import render from "../lib/dom";

export default function createLeftSlider() {
  const header = document.createElement("header");
  header.className =
    "w-[52.9%] translate-x-[-88%] h-full transition ease-in-out absolute";

  const sliderContainer = document.createElement("div");
  const slideBtn = createSliderBtn(header);

  header.appendChild(sliderContainer);

  sliderContainer.className =
    "w-full bg-[#242124] h-full  shadow shadow-[#F0FFF0]/10 shadow-l-sm absolute z-20";

  render([slideBtn], sliderContainer);

  return header;
}

function createSliderBtn(header: HTMLElement) {
  const slideBtn = document.createElement("button");
  const slideBtnIcon = document.createElement("img");

  slideBtnIcon.src = slider_right_arrow;

  slideBtn.className =
    "absolute right-0 top-[50%] !border-none !bg-transparent translate-y-[-50%]";
  slideBtnIcon.className = "";

  slideBtn.appendChild(slideBtnIcon);

  let isOpen = false;

  slideBtn.addEventListener("click", () => {
    if (isOpen) {
      // Slide out (hide)
      header.classList.remove("translate-x-0");
      header.classList.add("translate-x-[-88%]");
    } else {
      // Slide in (show)
      header.classList.remove("translate-x-[-88%]");
      header.classList.add("translate-x-0");
    }

    isOpen = !isOpen;
  });

  return slideBtn;
}
