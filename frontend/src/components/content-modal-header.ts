import { arrow_left } from "../assets/icons";
import render from "../lib/dom";
import createLogo from "./logo";

export default function createContentModalHeader() {
  const header = document.createElement("div");
  const backBtn = createCloseButton();
  const logoWrapper = document.createElement("div");

  const logo = createLogo();
  logoWrapper.appendChild(logo);

  header.className = "w-full h-[60px] flex items-center mb-2 relatve";
  logoWrapper.className = "absolute left-[50%] translate-x-[-50%]";

  render([backBtn, logoWrapper], header);

  return header;
}

function createCloseButton() {
  const closeButton = document.createElement("button");
  const btnIcon = document.createElement("img");

  btnIcon.src = arrow_left;
  btnIcon.className = "w-[35px] h-[35px] block";

  closeButton.className =
    "flex !bg-transparent !border-none hover:!border-none mt-0 relative cursor-pointer transform  transition hover:-translate-x-2 absolute right-1";

  closeButton.addEventListener("click", () => {
    closeButton.closest(".show")?.classList.remove("show");
  });

  closeButton.appendChild(btnIcon);

  return closeButton;
}
