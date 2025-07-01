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
  hadithContentHeaderContent.className = "w-full h-full flex items-center justify-between font-extrabold";

  const hadithContentHeaderContentLeft = createHadithContentHeaderContentLeft();
  const hadithContentHeaderContentRight = createHadithContentHeaderContentRight();

  render([hadithContentHeaderContentLeft, hadithContentHeaderContentRight], hadithContentHeaderContent);

  return hadithContentHeaderContent;
}

function createHadithContentHeaderContentLeft() {
  const hadithContentHeaderContentLeft = document.createElement("div");
  hadithContentHeaderContentLeft.className = "w-full h-full flex items-center justify-start text-left underline decoration-5";
  hadithContentHeaderContentLeft.textContent = "Sunan Ibn Majah";

  return hadithContentHeaderContentLeft;
}

function createHadithContentHeaderContentRight() {
  const hadithContentHeaderContentRight = document.createElement("div");
  hadithContentHeaderContentRight.className = "w-full h-full flex items-center justify-end text-right";
  hadithContentHeaderContentRight.textContent = "Chapter 6: The chapters of the mosques and congregation";

  return hadithContentHeaderContentRight;
}