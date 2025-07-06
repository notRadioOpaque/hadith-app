import render from "../../shared/lib/dom";

export default function createForm() {
  const form = document.createElement("form");

  form.className =
    "w-full flex flex-col items-center justify-center gap-10 mt-10";

  render([createEmailInput(), createSubscribeBtn()], form);

  return form;
}

function createEmailInput() {
  const emailInput = document.createElement("input");

  emailInput.className =
    "w-full max-w-sm px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 ";
  emailInput.type = "email";
  emailInput.name = "email";
  emailInput.id = "email";
  emailInput.placeholder = "example@gmail.com";

  return emailInput;
}

function createSubscribeBtn() {
  const subscribeBtn = document.createElement("button");

  subscribeBtn.className =
    "p-3 !w-[200px] !rounded-full hover:ring-[#F0FFF0] hover:ring-2 hover:ring-offset-3 hover:ring-offset-[#242124]  w-full !text-[#242124] !bg-[#F0FFF0] !font-bold !text-lg";
  subscribeBtn.type = "submit";
  subscribeBtn.textContent = "Subscribe";

  return subscribeBtn;
}

