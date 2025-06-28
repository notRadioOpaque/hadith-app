import render from "./dom";
import createHeader from "../components/header";
import createFooter from "../components/footer";
import createButton from "../components/button";
import createMain from "../components/main";


const header = createHeader();
const main = createMain();


export default function appLayout() {
  
  const div = document.createElement("div");
  div.className = "px-8 py-6 flex flex-col gap-6";


  render([header, main], div);

  return [div];
}
