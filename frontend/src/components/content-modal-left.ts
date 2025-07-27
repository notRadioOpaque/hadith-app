import render from "../lib/dom";

export default function createContentModalLeft(
  hadeeth: string,
  explanation: string,
) {
  const left = document.createElement("div");
  left.className =
    "flex border-r flex-col w-[56%] min-h-full gap-6 items-center";

  let showExplanation = false;

  const renderer = document.createElement("div");
  renderer.className =
    "w-full h-full overflow-auto p-15 text-lg font-bold flex flex-col justify-center";

  function updateRenderer() {
    renderer.innerHTML = "";

    renderer.appendChild(
      showExplanation
        ? createExplanationText(explanation)
        : createHadithText(hadeeth),
    );
  }

  const toggleBtn = document.createElement("button");
  toggleBtn.className =
    "bottom-0 px-0 hover:border-b-transparent border-b font-bold text-lg cursor-pointer py-[2px] w-fit";
  toggleBtn.textContent = "Read explanation";

  toggleBtn.addEventListener("click", () => {
    showExplanation = !showExplanation;
    updateRenderer();
    toggleBtn.textContent = showExplanation
      ? "Back to Hadith"
      : "Read explanation";
  });

  updateRenderer();

  render([renderer, toggleBtn], left);

  return left;
}

function createExplanationText(explanation: string) {
  const explanationWrapper = document.createElement("div");
  explanationWrapper.className = "flex flex-col gap-3";

  const formattedText = explanation.split("\r\n\r\n");

  for (let i = 0; i < formattedText.length; i++) {
    const textDiv = document.createElement("div");
    textDiv.textContent = formattedText[i];

    explanationWrapper.appendChild(textDiv);
  }

  return explanationWrapper;
}

function createHadithText(hadeeth: string) {
  const text = document.createElement("p");
  text.className = "text-center";

  text.innerHTML = hadeeth;

  return text;
}

