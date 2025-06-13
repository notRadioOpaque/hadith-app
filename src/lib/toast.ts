export type ToastType = "success" | "error" | "info" | "warning";

export function showToast(
  message: string,
  type: ToastType = "info",
  duration = 3000,
) {
  const container = getToastContainer();

  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  toast.textContent = message;

  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.add("hide");
    toast.addEventListener("transitionend", () => toast.remove());
  }, duration);
}

function getToastContainer(): HTMLElement {
  let container = document.getElementById("toast-container");
  if (!container) {
    container = document.createElement("div");
    container.id = "toast-container";
    document.body.appendChild(container);
  }
  return container;
}
