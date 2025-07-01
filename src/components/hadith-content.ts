import render from "../lib/dom";

export default function createHadithContent() {
  const hadithContent = document.createElement("div");
  const hadithContentHeader = createHadithContentHeader();
  const hadithContentBody = createHadithContentBody();

  hadithContent.className = "w-full h-[90%] flex flex-col";

  render([hadithContentHeader, hadithContentBody], hadithContent);

  return hadithContent;
}


function createHadithContentHeader() {
  const hadithContentHeader = document.createElement("div");
  hadithContentHeader.className = "w-full h-[20%] bg-white";

  const hadithContentHeaderContent = createHadithContentHeaderContent();

  render([hadithContentHeaderContent], hadithContentHeader);

  return hadithContentHeader;
}

function createHadithContentBody() {
  const hadithContentBody = document.createElement("div");
  hadithContentBody.className = "w-full h-[80%] bg-[#333]";

  return hadithContentBody;
}

function createHadithContentHeaderContent() {
  const hadithContentHeaderContent = document.createElement("div");
  hadithContentHeaderContent.className = "w-full h-full flex items-center justify-between px-6";

  const hadithContentHeaderContentLeft = createHadithContentHeaderContentLeft();
  const hadithContentHeaderContentRight = createHadithContentHeaderContentRight();

  render([hadithContentHeaderContentLeft, hadithContentHeaderContentRight], hadithContentHeaderContent);

  return hadithContentHeaderContent;
}

function createHadithContentHeaderContentLeft() {
  const hadithContentHeaderContentLeft = document.createElement("div");
  hadithContentHeaderContentLeft.className = "w-full h-full bg-green-500 ";
  hadithContentHeaderContentLeft.textContent = "Header Content Left";

  return hadithContentHeaderContentLeft;
}

function createHadithContentHeaderContentRight() {
  const hadithContentHeaderContentRight = document.createElement("div");
  hadithContentHeaderContentRight.className = "w-full h-full bg-blue-500";
  hadithContentHeaderContentRight.textContent = "Header Content Right";

  return hadithContentHeaderContentRight;
}

