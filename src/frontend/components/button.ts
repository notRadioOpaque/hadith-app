type ButtonProps = {
  label: string;
  onClick:  () => void;
  className?: string;
}

export default function createButton({
  label,
  onClick,
  className
}: ButtonProps): HTMLButtonElement {
  const btn = document.createElement("button");
  btn.textContent = label;
  btn.className = `px-4 py-2 rounded text-white
    transition-colors duration-300 text-sm !${className}`.trim();

  btn.addEventListener("click", onClick);

  return btn;
}
