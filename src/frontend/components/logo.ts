import { quran_icon } from "../assets/icons";
import render from "../../shared/lib/dom";

export default function createLogo() {
  const logo = document.createElement("a");
  const logoText = document.createElement("p");
  const logoImage = document.createElement("img");

  logo.className = "flex items-center justify-center gap-2.5";
  logo.href = "/";

  logoImage.src = quran_icon;
  logoText.textContent = "Hadith App";

  logoImage.className = "block w-[40px] h-[40px]";
  logoText.className =
    "text-xl font-semibold w-[40px] leading-[0.9] text-center text-white";
  logoText.classList.add("lobster");

  render([logoImage, logoText], logo);

  return logo;
}
