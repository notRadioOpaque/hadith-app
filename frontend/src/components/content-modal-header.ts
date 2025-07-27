import { up_arrow } from "../assets/icons";
import render from "../lib/dom";

export default function createContentModalHeader() {
  const header = document.createElement("div");
  const closeBtn = createCloseButton();
  header.className = "w-full flex items-center justify-center";

  render([closeBtn], header);

  return header;
}

function createCloseButton() {
  const closeButton = document.createElement("button");
  const btnIcon = document.createElement("img");
  btnIcon.src = up_arrow;

  closeButton.className = "px-8 rounded-full bg-white/10";

  btnIcon.className =
    "w-[30px] h-[30px] block rotate-180 hover:scale-105 transition-all ease-in-out ";

  closeButton.addEventListener("click", () => {
    closeButton.closest(".show-slider")?.classList.remove("show-slider");
  });

  closeButton.appendChild(btnIcon);

  return closeButton;
}
