import render from "../lib/dom";
import createLink from "./link";

const GITHUB_BASE_URL = "https://api.github.com/users";

export default function createFooter() {
  const footer = document.createElement("footer");
  // const footerLeft = createFooterLeft();
  const footerRight = createFooterRight();

  footer.className = "flex justify-between items-center py-2 text-white";

  render([footerRight], footer);

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

// function createFooterLeft() {
//   const footerLeft = document.createElement("div");
//   const date = new Date().getFullYear();
//
//   footerLeft.textContent = `Copyright \u00A9 Hadith App ${date} All Right Reserved`;
//   footerLeft.className = "text-sm text-white/60";
//
//   return footerLeft;
// }

function createFooterRight() {
  const footerRight = document.createElement("div");

  const typescriptLink = createLink({
    href: "https://www.typescriptlang.org",
    label: "Typescript",
    target: "_blank",
  });
  const nroLink = createLink({
    href: nro.blog,
    label: nro.login,
    target: "_blank",
  });
  const muakLink = createLink({
    href: bigmuak.blog,
    label: bigmuak.login,
    target: "_blank",
  });

  footerRight.append(
    "Built with ",
    typescriptLink,
    " by ",
    nroLink,
    " & ",
    muakLink,
  );

  footerRight.className = "text-sm text-white/60";

  return footerRight;
}
