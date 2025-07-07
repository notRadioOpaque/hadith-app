import appLayout from "./components/layout";
import render from "./lib/dom";

export function createApp(root: HTMLElement) {
  const children = appLayout();

  render(children, root);
}
