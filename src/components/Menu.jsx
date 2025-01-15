import { signal } from "@preact/signals";

const menu = signal(null);

export const showMenu = (e, options) => {
  const ypos = e.clientY / window.innerHeight;
  const xpos = e.clientX / window.innerWidth;

  menu.value = {
    options,
    pos: {
      top: ypos < 0.5 ? e.clientY - 16 : null,
      left: xpos < 0.5 ? e.clientX + 12 : null,
      bottom: ypos >= 0.5 ? window.innerHeight - (e.clientY + 16) : null,
      right: xpos >= 0.5 ? window.innerWidth - (e.clientX - 12) : null,
    },
  }

  /* Prevent browser from showing the default context menu */
  e.preventDefault();
  /* Prevent event bubbling that closes the menu immediately */
  e.stopPropagation();
};

export const closeMenu = () => {
  menu.value = null;
};

export const Menu = () => menu.value && (
  <div class="dmpg-menu-container" style={menu.value.pos}>
    {menu.value.options.map(option => (
      <div
          class="dmpg-menu-option"
          onClick={(e) => { option[1](e); e.stopPropagation(); closeMenu(); }}>
        {option[0]}
      </div>
    ))}
  </div>
);