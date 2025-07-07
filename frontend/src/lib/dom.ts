export default function render(children: HTMLElement[], target: HTMLElement) {
  children.forEach((child) => target.append(child));
}
