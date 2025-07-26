import render from "../lib/dom";
import createContentModalBody from "./content-modal-body";
import createContentModalHeader from "./content-modal-header";
import { hadithSample } from "./hadith-content";



export default function createHadithContentModal() {
  const modalContainer = document.createElement("div");
  const header = createContentModalHeader();
  const body = createContentModalBody(hadithSample);

  modalContainer.className =
    "fixed w-full z-10 h-screen hidden bg-[#242124] flex flex-col border p-3";
  modalContainer.id = "contentModal";

  render([header,body], modalContainer);

  return modalContainer;
}







