import { signal } from "@preact/signals";
import { Overlay } from "./Overlay.jsx";
import { closeMenu } from "./Menu.jsx"

const lightbox = signal(null);

export const showLightbox = (src) => {
  lightbox.value = src;

  /* Prevent event bubbling that closes the lightbox immediately */
  e.stopPropagation();
  /* ... but close menu instead */
  closeMenu();
};

export const closeLightbox = () => {
  lightbox.value = null;
};

export const Lightbox = () => lightbox.value && (
  <Overlay onClick={(e) => closeLightbox()}>
    <img class="dmpg-lightbox-img" src={lightbox.value} />
  </Overlay>
);