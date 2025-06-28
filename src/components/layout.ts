import render from "../lib/dom";
import createHeader from "./header";
import createFooter from "./footer";
import createMain from "./main";

const header = createHeader();
const main = createMain();
const footer = createFooter();

export default function appLayout() {
  const div = document.createElement("div");
  div.className = "px-8 py-6 flex min-h-screen h-full flex-col gap-6";

  render([header, main, footer], div);

  return [div];
}
