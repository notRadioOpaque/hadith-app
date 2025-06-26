import createButton from "../components/button";
import render from "./dom";

export default function appLayout() {
  const btn1 = createButton("test1", () => {});
  const btn2 = createButton("test2", () => {});

  const div = document.createElement("div");
  div.className = "flex gap-6";
  render([btn1, btn2], div);

  return [div];
}
