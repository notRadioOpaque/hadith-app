import type { Hadith } from "../types";

export default function createHadithContentBody(hadith: Hadith) {
  const seeMore = () => {
    const contentModal = document.getElementById("contentModal");

    contentModal?.classList.add("show");
  };

  const hadithContentBody = document.createElement("div");
  const seeMoreBtn = document.createElement("button");

  seeMoreBtn.className =
    "absolute bottom-0 !px-0 mb-2 hover:border-b-transparent border-b text-base !py-[2px]";
  seeMoreBtn.textContent = "See more";
  seeMoreBtn.addEventListener("click", seeMore);

  hadithContentBody.className =
    "w-full h-[80%] font-semibold relative text-white text-center text-xl leading-8 tracking-wide justify-center items-center flex flex-col";

  hadithContentBody.textContent = hadith.hadeeth;
  hadithContentBody.appendChild(seeMoreBtn);

  return hadithContentBody;
}
