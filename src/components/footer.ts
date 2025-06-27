export default function createFooter(children: HTMLElement[], className?: string): HTMLElement {
  const footer = document.createElement("footer");
  footer.className = `border border-white flex justify-between fixed bottom-0 right-0 left-0  w-full px-4 py-2  bg-blue-600 text-white hover:bg-blue-700 !${className}`;

  children.forEach((child) => {
    footer.appendChild(child);
  });

  return footer;
}
