import render from "../lib/dom";
import createHeader from "./header";

export default function createHadithContentHeader() {
  const hadithContentHeader = document.createElement("div");
  hadithContentHeader.className = "w-full";

  const HeaderContent = headerContent();

  render([HeaderContent], hadithContentHeader);

  return hadithContentHeader;
}

function headerContent() {
  const headerContent = document.createElement("div");
  headerContent.className = "w-full h-full flex items-center justify-between";

  // const HeaderContentLeft = createHeaderContentLeft();
  // const HeaderContentRight = createHeaderContentRight();

  render([createHeader()], headerContent);

  return headerContent;
}
//
// function createHeaderContentLeft() {
//   const headerContentLeft = document.createElement("div");
//   headerContentLeft.className =
//     "w-[45%] h-full flex items-center justify-start text-left pb-2 text-2xl font-extrabold";
//   const contentText = document.createElement("p");
//   contentText.className = "border-b-3 border-b-[#29a5d4]";
//
//   contentText.textContent = "Hadith App";
//
//   headerContentLeft.appendChild(contentText);
//
//   return headerContentLeft;
// }
//
// function createHeaderContentRight() {
//   const headerContentRight = document.createElement("div");
//   headerContentRight.className =
//     "w-[45%] h-full flex text-left text-sm font-bold";
//   headerContentRight.textContent =
//     "Chapter 6: The chapters of the mosques and congregation";
//
//   return headerContentRight;
// }
