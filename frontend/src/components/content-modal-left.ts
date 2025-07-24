import render from "../lib/dom";
import type { Hadith } from "../types";


export default function createContentModalLeft(hadeeth: Hadith, explanation: Hadith) {
  const left = document.createElement("div");

  const hadithDiv = createHadith(hadeeth);
  const explanationDiv = createExplanation(explanation);

  left.className = "flex flex-col w-[56%] border-red-500 h-full gap-8";

  render([hadithDiv,explanationDiv], left);

  return left;
}





function createHadith(hadeeth: any) {
  const div = document.createElement("div");
  const text = document.createElement("p");
  
  div.className = "border w-full h-[45%] rounded-lg";
  text.innerHTML = hadeeth;

  div.appendChild(text);

  return div;
}


function createExplanation(explanation: any) {
  const div = document.createElement("div");
  const text = document.createElement("p");
 
  div.className = "border w-full h-[55%] rounded-lg";
  text.innerHTML = explanation;

  div.appendChild(text);

  return div;
}