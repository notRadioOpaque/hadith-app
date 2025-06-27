export default function createHeader(
  children: HTMLElement[],
  className?: string
): HTMLElement {
  const header = document.createElement("header");
  header.className = `border border-white flex justify-between fixed top-0 right-0 left-0  w-full px-4 py-2  bg-blue-600 text-white hover:bg-blue-700 !${className}`;

  children.forEach((child) => {
    header.appendChild(child);
  });

  return header;
}
