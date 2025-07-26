import render from "../lib/dom";

export default function createContentModalLeft(hadeeth: string, explanation: string) {
  const left = document.createElement("div");

  const hadithAndExplanationDiv = renderHadithOrExplanation(hadeeth, explanation);
  const toggleBtn = createToggleBtn();
  // const hadithDiv = createHadith(hadeeth);
  // const explanationText = createExplanation(explanation);

  left.className = "flex flex-col w-[56%] h-full gap-6 items-center";

  render([hadithAndExplanationDiv,toggleBtn], left);

  return left;
}




function renderHadithOrExplanation(hadeeth: string, explanation: string) {
  const renderer = document.createElement("div");
  const hadithText = createHadithText(hadeeth);
  const explanationText = createExplanationText(explanation);

  renderer.className = "border w-full h-full rounded-lg overflow-auto p-15 text-lg font-bold flex flex-col items-center justify-center text-center";

  

  return renderer;
}



function createExplanationText(explanation: string) {
  const text = document.createElement("p");

  text.innerHTML = explanation;

  return text;
}


function createHadithText(hadeeth: string) {
  const text = document.createElement("p");

  text.innerHTML = hadeeth;

  return text;
}




function createToggleBtn() {
  const seeMoreBtn = document.createElement("button");

  seeMoreBtn.className =
    " bottom-0 px-0 hover:border-b-transparent border-b font-bold text-lg cursor-pointer py-[2px] w-fit";
  seeMoreBtn.textContent = "Read explanation";
  // seeMoreBtn.addEventListener("click", seeMore);

  return seeMoreBtn;
}


// function createHadith(hadeeth: string) {
//   const div = document.createElement("div");
//   const text = document.createElement("p");

//   div.className = "border w-full h-full rounded-lg overflow-auto p-15 text-lg font-bold flex flex-col items-center justify-center text-center";
//   text.innerHTML = hadeeth;

//   div.appendChild(text);

//   return div;
// }
