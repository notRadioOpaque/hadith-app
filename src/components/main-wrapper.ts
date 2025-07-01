import render from "../lib/dom";
import createLeftSection from "./main-left-section";
import createRightSection from "./main-right-section";

export default function createMain() {
  const main = document.createElement("main");
  const mainLeftDiv = createLeftSection();
  const mainRightDiv = createRightSection();

  main.className = "flex flex-1";

  render([mainLeftDiv, mainRightDiv], main);

  return main;
}
