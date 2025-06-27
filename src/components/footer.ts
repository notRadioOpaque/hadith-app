export default function createFooter(children: HTMLElement[], className?: string): HTMLElement {
  const footer = document.createElement("footer");
  footer.className = `  !${className}`;

  children.forEach((child) => {
    footer.appendChild(child);
  });

  return footer;
}
