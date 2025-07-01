import render from "../lib/dom";

export default function createHadithContentFooter() {
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