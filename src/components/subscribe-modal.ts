import render from "../lib/dom";

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
  const contentForm = document.createElement("form");
  const emailInput = document.createElement("input");
  const subscribeBtn = document.createElement("button");

  content.className =
    "w-[50%] h-[80%]  rounded-lg flex items-center justify-center  text-center flex-col bg-[#242124] p-20";
  contentTitle.className = "font-bold text-4xl ";

  contentSubtitle.className = "mt-6 font-semibold text-xl ";

  contentForm.className =
    "w-full flex flex-col items-center justify-center gap-10 mt-10";

  emailInput.className =
    "w-full max-w-sm px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 ";

  subscribeBtn.className =
    "p-3 !w-[200px] !rounded-full hover:ring-[#F0FFF0] hover:ring-2 hover:ring-offset-3 hover:ring-offset-[#242124]  w-full !text-[#242124] !bg-[#F0FFF0] !font-bold !text-lg";

  contentTitle.textContent = "Title here";
  contentSubtitle.textContent = "Subtitle goes here";
  emailInput.type = "email";
  emailInput.name = "email";
  emailInput.id = "email";
  emailInput.placeholder = "example@gmail.com";
  subscribeBtn.type = "submit";
  subscribeBtn.textContent = "Subscribe";

  contentForm.appendChild(emailInput);
  contentForm.appendChild(subscribeBtn);

  render([contentTitle, contentSubtitle, contentForm], content);

  return content;
}
