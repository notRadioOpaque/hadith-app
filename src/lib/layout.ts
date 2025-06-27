import render from "./dom";
import createHeader from "../components/header";
import createFooter from "../components/footer";
import createButton from "../components/button";

const btn1 = createButton("test", () => {});
const btn2 = createButton("test2", () => {});


export default function appLayout() {
  const header = createHeader([btn1, btn2], "");
  const footer = createFooter()

  const div = document.createElement("div");

  render([header,footer], div);

  return [div];
}
