import render from "./dom";
import createHeader from "../components/header";
import createFooter from "../components/footer";
import createMain from "../components/main";

const header = createHeader();
const main = createMain();
const footer = createFooter();

export default function appLayout() {
  const div = document.createElement("div");
  div.className = "px-8 py-6 flex min-h-screen h-full flex-col gap-6";

  render([header, main, footer], div);

  return [div];
}
