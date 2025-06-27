import createButton from "./button";
import createLogo from "./logo";

const ctaBtn = createButton("Subscribe", () => {});
const logo = createLogo();

export default function createHeader(): HTMLElement {
  const header = document.createElement("header");
  header.className = `border border-white/10 bg-white/10 backdrop-blur-xs flex justify-between rounded-lg w-full px-4 py-2 text-white`;

  [logo, ctaBtn].forEach((child) => {
    header.appendChild(child);
  });

  return header;
}
