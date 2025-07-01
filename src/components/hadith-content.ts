import render from "../lib/dom";
import createHadithContentHeader from "./hadith-content-header";
import createHadithContentBody from "./hadith-content-body";
import createHadithContentFooter from "./hadith-content-footer";

export default function createHadithContent() {
  const hadithContent = document.createElement("div");
  const hadithContentHeader = createHadithContentHeader();
  const hadithContentBody = createHadithContentBody();
  const hadithContentFooter = createHadithContentFooter();

  hadithContent.className = "w-full h-[90%] pt-20 pb-15 border flex flex-col justify-between gap-6";

  render([hadithContentHeader, hadithContentBody, hadithContentFooter], hadithContent);

  return hadithContent;
}






