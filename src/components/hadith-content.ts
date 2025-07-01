import render from "../lib/dom";

export default function createHadithContent() {
  const hadithContent = document.createElement("div");
  const hadithContentHeader = createHadithContentHeader();
  const hadithContentBody = createHadithContentBody();
  const hadithContentFooter = createHadithContentFooter();

  hadithContent.className = "w-full h-[90%] pt-20 pb-15 border flex flex-col justify-between gap-6";

  render([hadithContentHeader, hadithContentBody, hadithContentFooter], hadithContent);

  return hadithContent;
}

function createHadithContentHeader() {
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
  hadithContentHeaderContentLeft.className = "w-full h-full flex items-center justify-start text-left";
  hadithContentHeaderContentLeft.textContent = "Sunan Ibn Majah";

  return hadithContentHeaderContentLeft;
}

function createHadithContentHeaderContentRight() {
  const hadithContentHeaderContentRight = document.createElement("div");
  hadithContentHeaderContentRight.className = "w-full h-full flex items-center justify-end text-right";
  hadithContentHeaderContentRight.textContent = "Chapter 6: The chapters of the mosques and congregation";

  return hadithContentHeaderContentRight;
}

function createHadithContentBody() {
  const hadithContentBody = document.createElement("div");
  hadithContentBody.className = "w-full h-[80%] font-semibold text-lg leading-8 tracking-wide justify-center items-center flex";

  hadithContentBody.textContent =
    '"Shall I not tell you about the people of Paradise? Every weak and oppressed person — were he to swear by Allah, He would fulfill it for him. Shall I not tell you about the people of the Fire? Every harsh, arrogant, and proud person. Shall I not tell you about the best of you? The one who, when seen, reminds you of Allah. Shall I not tell you about the worst of you? Those who carry gossip, ruin relationships between loved ones, and seek problems for innocent people.Shall I not tell you about the people of Paradise? Every weak and oppressed person — were he to swear by Allah, He would fulfill it for him. Shall I not tell you about the people of the Fire? Every harsh, arrogant, and proud person. Shall I not tell you about the best of you? The one who, when seen, reminds you of Allah. Shall I not tell you about the worst of you? Those who carry gossip, ruin relationships between loved ones, and seek problems for innocent people."';

  return hadithContentBody;
}

function createHadithContentFooter() {
  const hadithContentFooter = document.createElement("div");
  hadithContentFooter.className = "w-full flex items-center justify-between font-extrabold";

  const hadithContentFooterLeft = createHadithContentFooterLeft();
  const hadithContentFooterRight = createHadithContentFooterRight();

  render([hadithContentFooterLeft, hadithContentFooterRight], hadithContentFooter);

  return hadithContentFooter;
}

function createHadithContentFooterLeft() {
  const hadithContentFooterLeft = document.createElement("div");
  hadithContentFooterLeft.className = "w-full h-full flex items-center justify-start text-left";
  hadithContentFooterLeft.textContent = "Narrated on the Authority of Uthman Ibn Affan";

  return hadithContentFooterLeft;
}

function createHadithContentFooterRight() {
  const hadithContentFooterRight = document.createElement("div");
  hadithContentFooterRight.className = "w-full h-full flex items-center justify-end text-right";
  hadithContentFooterRight.textContent = "Hadith No: 736";

  return hadithContentFooterRight;
}
