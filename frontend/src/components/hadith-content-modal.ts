import { close_icon } from "../assets/icons";
import render from "../lib/dom";
import type { Hadith } from "../types";
import { hadithSample } from "./hadith-content";


export default function createHadithContentModal() {
  const modalContainer = document.createElement("div");
  const content = createContent(hadithSample);

  modalContainer.className =
    "fixed w-full z-10 h-full hidden flex items-center justify-center";
  modalContainer.id = "contentModal";

  render([content], modalContainer);

  return modalContainer;
}



function createContent(hadith: Hadith) {
  const content = document.createElement("div");
  const closeBtnDiv = document.createElement("div");
  const hadeeth = hadith.hadeeth;
  const explanation = hadith.explanation;
  const hints = hadith.hints;
  const closeBtn = createCloseButton();
  
  const left = leftSide(hadeeth);
  const right = rightSide(explanation, hints);


  content.className =
    "w-full h-full rounded-lg grid grid-cols-2 grid-rows-1 gap-3 bg-[#242124] px-14 pt-14 pb-5 absolute";
  closeBtnDiv.className =
    "flex justify-end items-center absolute top-4 right-4";
 

  closeBtnDiv.appendChild(closeBtn);

  render([closeBtnDiv, left, right], content);

  return content;
}



function leftSide(hadith: string) {
  const left = document.createElement("div");
  const hadithDiv = createHadith(hadith);

  left.className = "row-span-1 col-span-1 border border-green-500 rounded-2xl h-full overflow-hidden"

  left.appendChild(hadithDiv);

  return left;
}

function rightSide(explanation: string, hints: any) {
  const right = document.createElement("div");
  const explanationDiv = createExplanation(explanation);
  const hintDiv = createHint(hints);


  right.className = "grid grid-rows-[1fr_1fr] gap-3 h-full  rounded-2xl overflow-hidden";

  render([explanationDiv, hintDiv], right)

    return right;
}




function createHadith(hadeeth: string) {
  const div = document.createElement("div");
  const text = document.createElement("p");
  
  div.className = " p-6 border-l-6 border-green-500 h-full";
  text.innerHTML = hadeeth;

  div.appendChild(text);

  return div;
}


function createExplanation(explanation: string) {
  const div = document.createElement("div");
  const text = document.createElement("p");
 
  div.className = "rounded-2xl p-6 border-l-6 border-yellow-400 h-full overflow-y-scroll border";
  text.innerHTML = explanation;

  div.appendChild(text);

  return div;
}


function createHint(hints: any) {
  const div = document.createElement("div");
  const text = document.createElement("p");


  div.className = "rounded-2xl p-6 border-l-6 border-blue-400 h-full overflow-y-scroll border";
  text.innerHTML = hints;

  div.appendChild(text);

  return div;
}





function createCloseButton() {
  const closeButton = document.createElement("button");
  const btnIcon = document.createElement("img");

  btnIcon.src = close_icon;
  btnIcon.className = "w-[40px] h-[40px] block";

  closeButton.className =
    "flex !bg-transparent !border-none hover:!border-none mt-0 relative cursor-pointer";

  closeButton.addEventListener("click", () => {
    closeButton.closest(".show")?.classList.remove("show");
  });

  closeButton.appendChild(btnIcon);

  return closeButton;
}