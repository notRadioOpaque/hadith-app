import render from "../../shared/lib/dom";
import createForm from "./form";

export default function createSubscribeModal() {
  const modalContainer = document.createElement("div");
  const underlay = createUnderlay();
  const content = createContent();

  modalContainer.className =
    "absolute w-full z-10 h-full hidden flex items-center justify-center";
  modalContainer.id = "modal";
  // modalContainer.classList.add("hide");

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
  const contentTitle = document.createElement("h2");
  const contentSubtitle = document.createElement("p");

  content.className =
    "w-[50%] h-[80%]  rounded-lg flex items-center justify-center  text-center flex-col bg-[#242124] p-20";
  contentTitle.className = "font-bold text-4xl ";
  contentSubtitle.className = "mt-6 font-semibold text-xl ";
  contentTitle.textContent = "Title here";
  contentSubtitle.textContent = "Subtitle goes here";

  render([contentTitle, contentSubtitle, createForm()], content);

  return content;
}
