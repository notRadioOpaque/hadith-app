import { github_icon } from "../assets/icons";
import render from "../lib/dom";
import createFooter from "./footer";

export default function createRightBottomPanel() {
  const panel = document.createElement("div");
  panel.className = "w-full h-[7%] flex items-center justify-between pr-6";

  // const nextButton = createNextButton();
  const contributors = createFooter();
  // const drawerButton = createDrawerButton();
  const supportpanel = createSupportPanel();

  render([supportpanel, contributors], panel);

  return panel;
}

// function createNextButton() {
//   const nextButton = document.createElement("button");
//   const buttonText = document.createElement("p");
//   const buttonIcon = document.createElement("img");
//
//   buttonIcon.src = arrow_right;
//   buttonText.textContent = "Next Hadith";
//
//   nextButton.className =
//     "flex items-center justify-center gap-3 !bg-transparent !border-none";
//   buttonIcon.className = "";
//   buttonText.className = "";
//
//   render([buttonText, buttonIcon], nextButton);
//
//   return nextButton;
// }

// function createDrawerButton() {
//   const drawerButton = document.createElement("button");
//   const btnIcon = document.createElement("img");
//
//   btnIcon.src = up_arrow;
//   btnIcon.className = "w-[24px] h-[24px] block";
//   drawerButton.className =
//     "flex items-center justify-center !px-2.5 gap-3 !bg-transparent !border-none";
//
//   drawerButton.appendChild(btnIcon);
//
//   return drawerButton;
// }

function createSupportPanel() {
  const panelWrapper = document.createElement("div");
  const sourceCode = document.createElement("a");
  const githubIcon = document.createElement("img");

  sourceCode.textContent = "Source Code";

  githubIcon.src = github_icon;

  sourceCode.appendChild(githubIcon);
  sourceCode.href = "https://github.com/notRadioOpaque/hadith-app";
  sourceCode.target = "_blank";

  sourceCode.className =
    "hover:text-[#29a5d4] text-sm transition-all ease-in-out text-[#F0FFF0] flex items-center gap-2";
  panelWrapper.className = "flex items-center";

  render([sourceCode], panelWrapper);

  return panelWrapper;
}
