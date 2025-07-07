import { useSubscribe } from "../../shared/hooks/useSubscribe";
import render from "../../shared/lib/dom";
import { showToast } from "../../shared/lib/toast";
import { isValidEmail } from "../../shared/lib/utils";

export default function createForm() {
  const form = document.createElement("form");
  const input = createEmailInput();
  const submitBtn = createSubscribeBtn();

  form.className =
    "w-full flex flex-col items-center justify-center gap-10 mt-10";

  render([input, submitBtn], form);

  const { subscribe } = useSubscribe();

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = input.value.trim();

    if (!isValidEmail(email)) {
      showToast("please enter a correct email", "error");

      return;
    }

    const result = await subscribe(email);

    if (result.success) {
      showToast("you have been subscribed", "success");
      form.reset();
    } else {
      showToast(result.error || "Could not subscribe.", "error");
    }
  });

  return form;
}

function createEmailInput() {
  const emailInput = document.createElement("input");

  emailInput.className =
    "w-full max-w-md px-4 py-3.5 border text-lg border-gray-300 rounded-full placeholder:text-lg focus:outline-none ring-offset-2 ring-offset-[#242124]  focus:ring-1 focus:ring-[#F0FFF0] ";
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
