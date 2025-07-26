import render from "../lib/dom";


export default function createContentModalLeft(hadeeth: string, explanation: string) {
  const left = document.createElement("div");
  left.className = "flex flex-col w-[56%] h-full gap-6 items-center";

  let showExplanation = false;

  const renderer = document.createElement("div");
  renderer.className =
    "border w-full h-full rounded-lg overflow-auto p-15 text-lg font-bold flex flex-col justify-center text-center";

  function updateRenderer() {

    renderer.innerHTML = "";

    renderer.appendChild(
      showExplanation
        ? createExplanationText(explanation)
        : createHadithText(hadeeth)
    );
  }

  const toggleBtn = document.createElement("button");
  toggleBtn.className =
    "bottom-0 px-0 hover:border-b-transparent border-b font-bold text-lg cursor-pointer py-[2px] w-fit";
  toggleBtn.textContent = "Read explanation";

  toggleBtn.addEventListener("click", () => {
    showExplanation = !showExplanation;
    updateRenderer();
    toggleBtn.textContent = showExplanation ? "Back to Hadith" : "Read explanation";
  });


  updateRenderer();


  render([renderer, toggleBtn], left);

  return left;
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