import createHeader from "../components/header";
import render from "./dom";



export default function appLayout() {
  const header = createHeader([], "")


  const div = document.createElement("div");
  div.className = "";


  render([header], div,);

  return [div];
}
