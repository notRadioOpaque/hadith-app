import appLayout from "./components/layout";
import render from "./lib/dom";

export async function createApp(root: HTMLElement) {
  const children = await appLayout(); // ✅ Await the DOM structure
  render(children, root);             // ✅ Now children is actual elements
}