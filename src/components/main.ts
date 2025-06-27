import render from "../lib/dom";

export default function createMain() {
  const main = document.createElement("main");
  const heroText = createHeroText();
  const subHeroText = createSubHerotext();

  main.className = "flex gap-6 border-white";

  render([heroText, subHeroText], main);

  return main;
}

function createHeroText() {
  const heroText = document.createElement("h1");
  heroText.textContent =
    "A Daily Hadith to Reflect, Remember, and Revive Your Soul";
  heroText.className = "w-[45%] p-4";

  return heroText;
}

function createSubHerotext() {
  const subHero = document.createElement("div");

  const subHeroText1 = document.createElement("h3");
  const subHeroText2 = document.createElement("h3");
  const subHeroText3 = document.createElement("h3");

  subHeroText1.textContent =
    "Discover the timeless wisdom of the Prophet ﷺ, one hadith at a time.";
  subHeroText2.textContent =
    "Whether you're starting your morning or seeking guidance at night, each hadith is a gentle reminder of faith, character, and purpose.";
  subHeroText3.textContent =
    "Stay connected. Stay inspired. One day, one hadith, every day.";

  subHero.className = "w-[55%] p-4";
  subHeroText1.className = "";
  subHeroText2.className = "";
  subHeroText3.className = "";

  render([subHeroText1, subHeroText2, subHeroText3], subHero);

  return subHero;
}
