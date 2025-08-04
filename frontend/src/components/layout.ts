import render from "../lib/dom";
import createMain from "./main-wrapper";

export default async function appLayout() {
  const div = document.createElement("div");
  div.className = "flex min-h-screen h-full";

  const main = await createMain(); // ✅ Await the Promise
  render([main], div);             // ✅ main is now a real DOM element

  return [div];
}