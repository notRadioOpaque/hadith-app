import render from "../lib/dom";

export default function createContentModalLeft(hadeeth: string, explanation: string) {
  const left = document.createElement("div");

  const hadithDiv = createHadith(hadeeth);
  const toggleBtn = createToggleBtn();
  // const explanationDiv = createExplanation(explanation);

  left.className = "flex flex-col w-[56%] h-full gap-6 items-center";

  render([hadithDiv,toggleBtn], left);

  return left;
}

function createHadith(hadeeth: any) {
  const div = document.createElement("div");
  const text = document.createElement("p");

  div.className = "border w-full h-full rounded-lg overflow-auto p-15 text-lg font-bold flex flex-col items-center justify-center";
  text.innerHTML = hadeeth;

  div.appendChild(text);

  return div;
}


function createToggleBtn() {
  const seeMoreBtn = document.createElement("button");

  seeMoreBtn.className =
    " bottom-0 px-0 hover:border-b-transparent border-b font-bold text-lg cursor-pointer py-[2px] w-fit";
  seeMoreBtn.textContent = "Read explanation";
  // seeMoreBtn.addEventListener("click", seeMore);

  return seeMoreBtn;
}


// function createExplanation(explanation: any) {
//   const div = document.createElement("div");
//   const text = document.createElement("p");

//   div.className = "border w-full h-[55%] rounded-lg overflow-auto";
//   text.innerHTML = explanation;

//   div.appendChild(text);

//   return div;
// }
