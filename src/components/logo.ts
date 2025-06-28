export default function createLogo() {
  const logo = document.createElement("div");
  logo.textContent = "Logo";
  logo.className = "text-2xl font-bold flex items-center justify-center";

  return logo;
}
