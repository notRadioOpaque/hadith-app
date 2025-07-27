import { hadithSample } from "../lib/constants";
import render from "../lib/dom";
import createContentModalBody from "./content-modal-body";
import createContentModalHeader from "./content-modal-header";

export default function createHadithContentModal() {
  const modalContainer = document.createElement("div");
  const header = createContentModalHeader();
  const body = createContentModalBody(hadithSample);

  modalContainer.className =
    "absolute w-full z-10 gap-3 min-h-full transition-all duration-400 ease-in-out h-max flex flex-col translate-y-[100%] bg-[#242124] px-8 pt-3 pb-8";
  modalContainer.id = "contentModal";

  render([header, body], modalContainer);

  return modalContainer;
}
