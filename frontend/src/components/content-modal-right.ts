import { hadithSample } from "../lib/constants";
import render from "../lib/dom";
import createHadithContentFooter from "./hadith-content-footer";

export default function createContentModalRight(hints: string[] | undefined) {
  const right = document.createElement("div");

  if (hints && hints.length) {
    const hintDiv = createHint(hints);

    right.appendChild(hintDiv);
  }

  const btnDiv = displayCtaBtns();

  right.className = "w-[44%] min-h-full gap-8 flex justify-between flex-col";

  render([btnDiv], right);

  return right;
}

function createHint(hints: any) {
  const div = document.createElement("div");

  div.className =
    "w-full rounded-lg p-15 text-lg font-bold flex flex-col justify-center ";

  const hintList = generateHintList(hints);

  div.appendChild(hintList);

  return div;
}

const generateHintList = (hints: string[]) => {
  const list = document.createElement("ol");

  list.className = "flex flex-col gap-3";

  for (let i = 0; i < hints.length; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = hints[i];
    listItem.className = "list-decimal";

    list.appendChild(listItem);
  }

  return list;
};

function displayCtaBtns() {
  const btnDiv = document.createElement("div");
  const btn1 = createBtn1();

  const footer = createHadithContentFooter(hadithSample);

  btnDiv.className =
    "w-full flex flex-col items-center justify-center gap-8 px-10 rounded-lg";

  render([footer, btn1], btnDiv);

  return btnDiv;
}

function createBtn1() {
  const btn = document.createElement("button");

  btn.textContent = "Get daily Hadith";
  btn.className =
    "!p-3 w-full max-w-[200px] !rounded-full hover:ring-[#F0FFF0] hover:ring-2 hover:ring-offset-3 hover:ring-offset-[#242124]  w-full !text-[#242124] !bg-[#F0FFF0] !font-bold !text-lg cursor-pointer";

  btn.addEventListener("click", () => {});

  return btn;
}
