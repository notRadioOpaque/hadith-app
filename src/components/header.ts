export default function createHeader(
  children: HTMLElement[],
  className?: string
): HTMLElement {
  const header = document.createElement("header");
  header.className = `flex justify-between  w-full px-4 py-2  bg-blue-600 text-white !${className}`;

  children.forEach((child) => {
    header.appendChild(child);
  });

  return header;
}

// factory fns ==> generate header html element
