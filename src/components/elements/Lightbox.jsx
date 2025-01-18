import { Overlay } from "./Overlay.jsx";

export const Lightbox = ({ onClose, src }) => src && (
  <Overlay onClick={onClose}>
    <img class="dmpg-lightbox-img" src={src} />
  </Overlay>
);