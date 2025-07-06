import render from "../../shared/lib/dom";

export default function createHadithContentFooter() {
  const hadithContentFooter = document.createElement("div");
  hadithContentFooter.className =
    "w-full flex justify-between font-bold text-sm";

  const Left = FooterLeft();
  const Right = FooterRight();

  render([Left, Right], hadithContentFooter);

  return hadithContentFooter;
}

function FooterLeft() {
  const hadithContentFooterLeft = document.createElement("div");
  hadithContentFooterLeft.className =
    "w-full h-full flex flex-col justify-start text-left";
  const line1 = document.createElement("p");
  const line2 = document.createElement("p");
  line1.textContent = "Narrated on the Authority of";
  line2.textContent = "Uthman Ibn Affan";

  render([line1, line2], hadithContentFooterLeft);

  return hadithContentFooterLeft;
}

function FooterRight() {
  const hadithContentFooterRight = document.createElement("div");
  hadithContentFooterRight.className =
    "w-full h-full flex justify-end text-right";
  hadithContentFooterRight.textContent = "Hadith No: 736";

  return hadithContentFooterRight;
}
