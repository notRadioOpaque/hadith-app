import render from "../lib/dom";
import { cn } from "../lib/utils";
import type { Hadith } from "../types";

enum Grade {
  Authentic = "Authentic hadith",
  Good = "Good hadith",
  Weak = "Weak hadith",
}

export default function createHadithContentFooter(hadith: Hadith) {
  const grade = hadith.grade;
  const attribution = hadith.attribution;

  const hadithContentFooter = document.createElement("div");
  hadithContentFooter.className =
    "w-full flex justify-between items-center font-bold text-sm";

  const Left = FooterLeft(attribution);
  const Right = FooterRight(grade);

  render([Left, Right], hadithContentFooter);

  return hadithContentFooter;
}

function FooterLeft(attribution: string) {
  const hadithContentFooterLeft = document.createElement("div");
  hadithContentFooterLeft.className = "w-1/3 flex flex-col justify-start text-left";
  const chain = document.createElement("p");
  chain.innerHTML = attribution;

  hadithContentFooterLeft.appendChild(chain);

  return hadithContentFooterLeft;
}

function FooterRight(grade: string) {
  const hadithContentFooterRight = document.createElement("div");

  hadithContentFooterRight.className = cn(
    "w-1/3 rounded-full text-bold py-2 flex items-center justify-center",
    Grade.Authentic === grade && "text-black bg-green-500",
    grade === Grade.Good && "text-amber bg-brown",
    Grade.Weak === grade && "text-red bg-pink",
  );

  hadithContentFooterRight.textContent = grade;

  return hadithContentFooterRight;
}
