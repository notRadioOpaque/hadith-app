import { arrow_right, up_arrow } from "../assets/icons";
import render from "../lib/dom";

export default function createRightBottomPanel() {
  const panel = document.createElement("div");
  panel.className = "w-full h-[7%] flex items-center justify-between pr-6";

  const nextButton = createNextButton();
  const drawerButton = createDrawerButton();
  const supportpanel = createSupportPanel();

  render([supportpanel, drawerButton, nextButton], panel);

  return panel;
}

function createNextButton() {
  const nextButton = document.createElement("button");
  const buttonText = document.createElement("p");
  const buttonIcon = document.createElement("img");

  buttonIcon.src = arrow_right;
  buttonText.textContent = "Next Hadith";

  nextButton.className =
    "flex items-center justify-center gap-3 !bg-transparent !border-none";
  buttonIcon.className = "";
  buttonText.className = "";

  render([buttonText, buttonIcon], nextButton);

  return nextButton;
}

function createDrawerButton() {
  const drawerButton = document.createElement("button");
  const btnIcon = document.createElement("img");

  btnIcon.src = up_arrow;
  btnIcon.className = "w-[24px] h-[24px] block";
  drawerButton.className =
    "flex items-center justify-center !px-2.5 gap-3 !bg-transparent !border-none";

  drawerButton.appendChild(btnIcon);

  return drawerButton;
}

function createSupportPanel() {
  const panelWrapper = document.createElement("div");
  const supportLink = document.createElement("a");
  supportLink.textContent = "Support the cause 🤲🏼";
  supportLink.href = "/";

  supportLink.className =
    "border-b hover:border-transparent border-[#F0FFF0] !text-[#F0FFF0]";
  panelWrapper.className = "flex items-center";

  render([supportLink], panelWrapper);

  return panelWrapper;
}
