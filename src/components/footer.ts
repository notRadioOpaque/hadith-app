import render from "../lib/dom";
import createLink from "./link";

const GITHUB_BASE_URL = "https://api.github.com/users";

export default function createFooter() {
  const footer = document.createElement("footer");
  const footerLeft = createrFooterLeft();
  const footerRight = createrFooterRight();

  footer.className = "flex justify-between fixed bottom-4 right-0 left-0  w-full px-4 py-2  text-white ";

  render([footerLeft, footerRight], footer);

  return footer;
}

const fetchGithubProfile = async (url: string) => {
  try {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`HTTP Error: ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("error:", error);
  }
};

const bigmuak = await fetchGithubProfile(`${GITHUB_BASE_URL}/Abdulhakeem010`);
const nro = await fetchGithubProfile(`${GITHUB_BASE_URL}/notradioopaque`);

function createrFooterLeft() {
  const footerLeft = document.createElement("div");
  const date = new Date().getFullYear();

  footerLeft.textContent = `Copyright \u00A9 Hadith App ${date} All Right Reserved`;
  footerLeft.className = "text-sm text-white/60";

  return footerLeft;
}

function createrFooterRight() {
  const footerRight = document.createElement("div");
  const typescriptLink = createLink("https://www.typescriptlang.org", "Typescript", "_blank");
  const nroGithubLink = createLink(nro.blog, nro.login, "_blank");
  const muakGithubLink = createLink(bigmuak.blog, bigmuak.login, "_blank");

  footerRight.append("Built with vanilla ", typescriptLink, ", and maintained by ", nroGithubLink, " & ", muakGithubLink);
  footerRight.className = "text-sm text-white/60";

  return footerRight;
}
