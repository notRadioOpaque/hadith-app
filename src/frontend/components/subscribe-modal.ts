import render from "../../shared/lib/dom";
import createForm from "./form";
import closeBtn from "../assets/icons/close-icon.svg"

export default function createSubscribeModal() {
  const modalContainer = document.createElement("div");
  const underlay = createUnderlay();
  const content = createContent();

  modalContainer.className =
    "absolute w-full z-10 h-full hidden flex items-center justify-center";
  modalContainer.id = "modal";

  render([underlay, content], modalContainer);

  return modalContainer;
}

function createUnderlay() {
  const underlay = document.createElement("div");

  underlay.addEventListener("click", () => {
    underlay.parentElement?.classList.remove("show");
  });

  underlay.className =
    "absolute z-[-1] w-full h-full inset-0 bg-black/40 backdrop-blur-sm";

  return underlay;
}

function createContent() {
  const content = document.createElement("div");
  const closeBtnDiv = document.createElement("div");
  const textAndFormDiv = document.createElement("div");
  const closeBtn = createCloseButton();
  const contentTitle = document.createElement("h2");
  const contentSubtitle = document.createElement("p");
  const form = createForm();

  content.className =
<<<<<<< HEAD
    "w-[50%] h-[80%] rounded-lg flex items-center text-center flex-col bg-[#242124] relative";
  closeBtnDiv.className= "flex justify-end items-center absolute top-4 right-4";
  textAndFormDiv.className = "w-full flex flex-col flex-grow items-center justify-center"
=======
    "w-[50%] h-[60%]  rounded-lg flex items-center justify-center  text-center flex-col bg-[#242124] p-20";
>>>>>>> 753d4c7 (feat: subscribe logic)
  contentTitle.className = "font-bold text-4xl ";
  contentSubtitle.className = "mt-6 font-semibold text-xl ";
  contentTitle.textContent = "Get Daily Hadith in Your Inbox";
  contentSubtitle.textContent =
    "One authentic hadith every morning. No spam, just benefit.";

  closeBtnDiv.appendChild(closeBtn);
  [contentTitle, contentSubtitle, form].forEach((child) => {
    textAndFormDiv.appendChild(child);
  })

  render([closeBtnDiv, textAndFormDiv], content);

  return content;
}


function createCloseButton() {
  const closeButton = document.createElement("button");
  const btnIcon = document.createElement("img");

  btnIcon.src = closeBtn;
  btnIcon.className = "w-[40px] h-[40px] block";

  closeButton.className =
    "flex !bg-transparent !px-2.5 gap-3";

    closeButton.addEventListener("click", () => {
      closeButton.closest(".show")?.classList.remove("show");
    });

  closeButton.appendChild(btnIcon);

  return closeButton;
}