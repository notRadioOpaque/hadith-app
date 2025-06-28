import render from "./dom";
import createHeader from "../components/header";
import createMain from "../components/main";
import createFooter from "../components/footer";



const header = createHeader();
const main = createMain();
const footer = createFooter();


export default function appLayout() {
  
  const div = document.createElement("div");
  div.className = "px-8 py-6 flex flex-col gap-6";


  render([header, main, footer], div);

  return [div];
}
