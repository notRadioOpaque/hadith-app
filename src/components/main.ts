import render from "../lib/dom";

export default function createMain() {
  const main = document.createElement("main");
  const heroText = document.createElement("h1");
  const subHeroText = document.createElement("h3");

  heroText.textContent = "Hero text goes here";
  subHeroText.textContent = "sub-hero text goes here";

  main.className = "flex gap-6 border border-white";
  heroText.className = "w-1/3";
  subHeroText.className = "w-2/3";

  render([heroText, subHeroText], main);

  return main;
}
