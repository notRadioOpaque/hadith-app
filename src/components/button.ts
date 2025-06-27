export default function createButton(
  label: string,
  onClick: () => void,
  className?: string
): HTMLButtonElement {
  const btn = document.createElement("button");
  btn.textContent = label;
  btn.className = `px-4 py-2 rounded text-white
    transition-colors duration-300 text-sm !${className}`.trim();

  btn.addEventListener("click", onClick);

  return btn;
}
