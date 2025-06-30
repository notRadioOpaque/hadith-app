import render from "../lib/dom";

export default function createLHS() {
  const div = document.createElement("div");
  const heroText = createHeroText();
  div.className = "border border-[#00a357] w-[45%]";

  render([heroText], div);

  return div;
}

function createHeroText() {
  const heroText = document.createElement("h1");
  heroText.textContent = "A Daily Hadith to Reflect, Remember, and Revive Your Soul";
  heroText.className = "";

  return heroText;
}
