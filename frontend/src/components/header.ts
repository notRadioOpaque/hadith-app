import createLogo from "./logo";

// const ctaBtn = createButton({ label: "Subscribe", onClick: () => {} });
const logo = createLogo();

export default function createHeader(): HTMLElement {
  const header = document.createElement("header");

  header.className = `flex justify-between rounded-lg w-full text-white`;

  [logo].forEach((child) => {
    header.appendChild(child);
  });

  return header;
}
