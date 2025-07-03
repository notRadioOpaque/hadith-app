import render from "../lib/dom";
import createHadithContentHeader from "./hadith-content-header";
import createHadithContentBody from "./hadith-content-body";
import createHadithContentFooter from "./hadith-content-footer";

export default function createHadithContent() {
  const hadithContent = document.createElement("div");
  const hadithContentHeader = createHadithContentHeader();
  const hadithContentBody = createHadithContentBody();
  const hadithContentFooter = createHadithContentFooter();
  const subscribeCard = createSubscribePanel();

  hadithContent.className =
    "w-full h-full pt-20  pb-12 flex flex-col justify-between gap-6";

  render(
    [
      hadithContentHeader,
      hadithContentBody,
      hadithContentFooter,
      subscribeCard,
    ],
    hadithContent,
  );

  return hadithContent;
}

function createSubscribePanel() {
  const subscribeWrapper = document.createElement("div");
  const subBtn = document.createElement("button");
  const subText = document.createElement("p");
  subText.textContent = "No spam. Just one Hadith a day for free! 📬";
  subBtn.textContent = "Get Daily Hadith ";

  subBtn.addEventListener("click", () => {
    const modal = document.querySelector("#modal");
    modal?.classList.add("show");
  });

  subscribeWrapper.className = "w-full mt-10 flex flex-col items-center gap-6";
  subBtn.className =
    "!p-3 !w-[200px] !rounded-full hover:ring-[#F0FFF0] hover:ring-2 hover:ring-offset-3 hover:ring-offset-[#242124]  w-full !text-[#242124] !bg-[#F0FFF0] !font-bold !text-lg";
  subText.className = "text-sm text-[#29a5d4] font-semibold italic text-center";

  render([subBtn, subText], subscribeWrapper);

  return subscribeWrapper;
}
