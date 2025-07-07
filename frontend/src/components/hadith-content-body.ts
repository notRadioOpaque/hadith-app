export default function createHadithContentBody() {
  const hadithContentBody = document.createElement("div");
  hadithContentBody.className =
    "w-full h-[80%] font-semibold text-[#29a5d4] text-center text-xl leading-8 tracking-wide justify-center items-center flex";

  hadithContentBody.textContent =
    "Shall I not tell you about the people of Paradise? Every weak and oppressed person — were he to swear by Allah, He would fulfill it for him. Shall I not tell you about the people of the Fire? Every harsh, arrogant, and proud person.";

  return hadithContentBody;
}
