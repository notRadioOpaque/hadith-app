import { arrow_right, up_arrow } from "../assets/icons";
import render from "../lib/dom";

export default function createRightBottomPanel() {
  const panel = document.createElement("div");
  panel.className = "w-full h-[10%] bg-white flex items-center justify-between px-6";

  const nextButton = createNextButton();
  const drawerButton = createDrawerButton();

  render([drawerButton, nextButton], panel);

  return panel;
}

function createNextButton() {
  const nextButton = document.createElement("button");
  const buttonText = document.createElement("p");
  const buttonIcon = document.createElement("img");

  buttonIcon.src = arrow_right;
  buttonText.textContent = "Next Hadith";

  nextButton.className = "flex items-center justify-center gap-3 !bg-transparent !border-none";
  buttonIcon.className = "";
  buttonText.className = "text-black";

  render([buttonText, buttonIcon], nextButton);

  return nextButton;
}

function createDrawerButton() {
  const drawerButton = document.createElement("button");
  const btnIcon = document.createElement("img");

  btnIcon.src = up_arrow;
  btnIcon.className = "w-[18px] h-[18px] block";
  drawerButton.className = "flex items-center justify-center !px-2.5 gap-3 !bg-transparent border-transparent";

  drawerButton.appendChild(btnIcon);

  return drawerButton;
}
