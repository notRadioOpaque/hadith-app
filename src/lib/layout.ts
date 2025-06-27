import createHeader from "../components/header";
import render from "./dom";
import createButton from "../components/button";

const btn1 = createButton("test", () => {});
const btn2 = createButton("test2", () => {});

export default function appLayout() {
  const header = createHeader([btn1, btn2], "");

  const div = document.createElement("div");
  div.className = "";

  render([header], div);

  return [div];
}
