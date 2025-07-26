import render from "../lib/dom";

export default function createContentModalRight(hints: string[] | undefined) {
  const right = document.createElement("div");

  const hintDiv = createHint(hints);
  const btnDiv = displayCtaBtns();

  right.className = "w-[44%] h-full gap-8 flex flex-col";

  render([hintDiv, btnDiv], right);

  return right;
}

function createHint(hints: any) {
  const div = document.createElement("div");
  const text = document.createElement("p");

  div.className = "border w-full h-[65%] rounded-lg overflow-auto";
  text.innerHTML = hints;

  div.appendChild(text);

  return div;
}

function displayCtaBtns() {
  const btnDiv = document.createElement("div");
  const btn1 = createBtn1();
  const btn2 = createBtn2();
  const btn3 = createBtn3();

  btnDiv.className = "border w-full h-[35%] flex flex-col items-center justify-center gap-8 p-10 rounded-lg";

  render([btn1, btn2, btn3], btnDiv);

  return btnDiv;
}







function createBtn1() {
  const btn = document.createElement("button");

  btn.textContent = "test1";
  btn.className =
    "!p-3 w-full !rounded-full hover:ring-[#F0FFF0] hover:ring-2 hover:ring-offset-3 hover:ring-offset-[#242124]  w-full !text-[#242124] !bg-[#F0FFF0] !font-bold !text-lg cursor-pointer";

  btn.addEventListener("click", () => {});

  return btn;
}

function createBtn2() {
  const btn = document.createElement("button");

  btn.textContent = "test2";
  btn.className =
    "!p-3 w-full !rounded-full hover:ring-[#F0FFF0] hover:ring-2 hover:ring-offset-3 hover:ring-offset-[#242124]  w-full !text-[#242124] !bg-[#F0FFF0] !font-bold !text-lg cursor-pointer";

  btn.addEventListener("click", () => {});

  return btn;
}

function createBtn3() {
  const btn = document.createElement("button");

  btn.textContent = "test3";
  btn.className =
    "!p-3 w-full !rounded-full hover:ring-[#F0FFF0] hover:ring-2 hover:ring-offset-3 hover:ring-offset-[#242124]  w-full !text-[#242124] !bg-[#F0FFF0] !font-bold !text-lg cursor-pointer";

  btn.addEventListener("click", () => {});

  return btn;
}
