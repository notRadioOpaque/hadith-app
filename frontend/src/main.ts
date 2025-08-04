import { createApp } from "./app";
import "./styles/style.css";

const root = document.getElementById("app");

if (root) {
  (async () => {
    await createApp(root); // ✅ properly await the async setup
  })();
}