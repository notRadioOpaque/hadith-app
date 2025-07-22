import render from "../lib/dom";

export default function createContentModalLeft() {
  const left = document.createElement("div");
  const hadithDiv = createHadith("");
  const explanationDiv = createExplanation("");

  left.className = "flex flex-col w-[56%] border-red-500 h-full gap-8";

  render([hadithDiv,explanationDiv], left);

  return left;
}





function createHadith(hadeeth: string) {
  const div = document.createElement("div");
  const text = document.createElement("p");
  
  div.className = "border w-full h-[45%] rounded-lg";
  text.innerHTML = hadeeth;

  div.appendChild(text);

  return div;
}


function createExplanation(explanation: string) {
  const div = document.createElement("div");
  const text = document.createElement("p");
 
  div.className = "border w-full h-[55%] rounded-lg";
  text.innerHTML = explanation;

  div.appendChild(text);

  return div;
}