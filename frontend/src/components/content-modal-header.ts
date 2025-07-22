import { arrow_left } from "../assets/icons";
import render from "../lib/dom";
import createLogo from "./logo";

export default function createContentModalHeader() {
  const header = document.createElement("header");
  const backBtn = createCloseButton();
  const logo = createLogo();

  header.className = "w-full h-[7%] border flex items-center"

  render([backBtn,logo], header);

  return header;
}




function createCloseButton() {
  const closeButton = document.createElement("button");
  const btnIcon = document.createElement("img");

  btnIcon.src = arrow_left;
  btnIcon.className = "w-[35px] h-[35px] block";

  closeButton.className =
    "flex !bg-transparent !border-none hover:!border-none mt-0 relative cursor-pointer";

  closeButton.addEventListener("click", () => {
    closeButton.closest(".show")?.classList.remove("show");
  });

  closeButton.appendChild(btnIcon);

  return closeButton;
}