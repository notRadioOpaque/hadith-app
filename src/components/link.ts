type LinkProps = {
  href: string;
  label: string;
  target: "_self" | "_blank";
  className?: string;
};

export default function createLink({
  href,
  label,
  target,
  className,
}: LinkProps) {
  const link = document.createElement("a");

  link.href = href;
  link.textContent = label;
  link.target = target;
  link.className = `!${className}`;

  return link;
}
