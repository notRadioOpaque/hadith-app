import render from "../lib/dom";

export default function createFooter() {
  const footer = document.createElement("footer");
  const footerLeft = createrFooterLeft();
  const footerRight = createrFooterRight();

  footer.className =
    "border border-white flex justify-between fixed bottom-0 right-0 left-0  w-full px-4 py-2  bg-blue-600 text-white hover:bg-blue-700";

  render([footerLeft, footerRight], footer);

  return footer;
}

function createrFooterLeft() {
  const footerLeft = document.createElement("div");

  footerLeft.textContent = "Footer left";
  footerLeft.className = "";

  return footerLeft;
}

function createrFooterRight() {
  const footerRight = document.createElement("div");

  footerRight.textContent = "Footer left";
  footerRight.className = "";

  return footerRight;
}
