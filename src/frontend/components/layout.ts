import render from "../../shared/lib/dom";
import createMain from "./main-wrapper";

const main = createMain();

export default function appLayout() {
  const div = document.createElement("div");
  div.className = "flex min-h-screen h-full";

  render([main], div);

  return [div];
}
