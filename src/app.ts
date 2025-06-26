import render from "./lib/dom";
import appLayout from "./lib/layout";

export function createApp(root: HTMLElement) {
  const children = appLayout();

  render(children, root);
}
