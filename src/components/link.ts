export default function createLink(href: string, label: string, target: string = "_self", className?: string) {
  const link = document.createElement("a");

  link.href = href;
  link.textContent = label;
  link.target = target;
  link.className = `!${className}`;

  return link;
}
