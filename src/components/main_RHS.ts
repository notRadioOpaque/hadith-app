import render from "../lib/dom";

export default function createRHS() {
  const div = document.createElement("div");
  const subHeroText = createSubHerotext();
  div.className = "border border-[#00a357] w-[55%] rounded-lg";

  render([subHeroText], div);

  return div;
}

function createSubHerotext() {
  const subHero = document.createElement("div");

  const subHeroText1 = document.createElement("h3");
  const subHeroText2 = document.createElement("h3");
  const subHeroText3 = document.createElement("h3");

  subHeroText1.textContent = "Discover the timeless wisdom of the Prophet ﷺ, one hadith at a time.";
  subHeroText2.textContent =
    "Whether you're starting your morning or seeking guidance at night, each hadith is a gentle reminder of faith, character, and purpose.";
  subHeroText3.textContent = "Stay connected. Stay inspired. One day, one hadith, every day.";

  subHero.className = "";
  subHeroText1.className = "";
  subHeroText2.className = "";
  subHeroText3.className = "";

  render([subHeroText1, subHeroText2, subHeroText3], subHero);

  return subHero;
}
