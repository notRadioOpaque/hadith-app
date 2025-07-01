import render from "../lib/dom";

export default function createHadithContentHeader() {
  const hadithContentHeader = document.createElement("div");
  hadithContentHeader.className = "w-full bg-white";

  const hadithContentHeaderContent = createHadithContentHeaderContent();

  render([hadithContentHeaderContent], hadithContentHeader);

  return hadithContentHeader;
}

function createHadithContentHeaderContent() {
  const hadithContentHeaderContent = document.createElement("div");
  hadithContentHeaderContent.className = "w-full h-full flex items-center justify-between";

  const hadithContentHeaderContentLeft = createHadithContentHeaderContentLeft();
  const hadithContentHeaderContentRight = createHadithContentHeaderContentRight();

  render([hadithContentHeaderContentLeft, hadithContentHeaderContentRight], hadithContentHeaderContent);

  return hadithContentHeaderContent;
}

function createHadithContentHeaderContentLeft() {
  const hadithContentHeaderContentLeft = document.createElement("div");
  hadithContentHeaderContentLeft.className = "w-[45%] h-full flex items-center justify-start text-left pb-2 text-2xl font-extrabold";
  const contentText = document.createElement("p");
  contentText.className = "border-b-3 border-b-[#29a5d4]";

  contentText.textContent = "Sunan Ibn Majah";

  hadithContentHeaderContentLeft.appendChild(contentText);

  return hadithContentHeaderContentLeft;
}

function createHadithContentHeaderContentRight() {
  const hadithContentHeaderContentRight = document.createElement("div");
  hadithContentHeaderContentRight.className = "w-[45%] h-full flex text-left text-sm font-bold";
  hadithContentHeaderContentRight.textContent = "Chapter 6: The chapters of the mosques and congregation";

  return hadithContentHeaderContentRight;
}
