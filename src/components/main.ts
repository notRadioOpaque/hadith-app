import render from "../lib/dom";
import createLHS from "./main_LHS";
import createRHS from "./main_RHS";

export default function createMain() {
  const main = document.createElement("main");
  const mainLeftDiv = createLHS();
  const mainRightDiv = createRHS();

  main.className = "flex gap-8 border-white";

  render([mainLeftDiv, mainRightDiv], main);

  return main;
}

