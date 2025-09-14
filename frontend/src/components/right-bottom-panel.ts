import { github_icon } from "../assets/icons";
import render from "../lib/dom";
import createFooter from "./footer";

export default function createRightBottomPanel() {
  const panel = document.createElement("div");
  panel.className = "w-full h-[7%] flex items-center justify-between pr-6";

  const contributors = createFooter();
  const supportpanel = createSupportPanel();

  render([supportpanel, contributors], panel);

  return panel;
}

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
