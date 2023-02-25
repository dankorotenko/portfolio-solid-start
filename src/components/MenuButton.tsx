import type { Component, Setter } from "solid-js";

import { FaSolidBarsStaggered, FaSolidXmark } from "solid-icons/fa";

type MenuButtonProps = {
    openedNav: boolean
    setOpenedNav : Setter<boolean>
}
const MenuButton: Component<MenuButtonProps> = (props) => {
  const toggleNav = (): void => {
    props.setOpenedNav(!props.openedNav);
  };
  return (
    <button id="nav-toggle" type="button" onClick={() => toggleNav()}>
      {props.openedNav ? (
        <FaSolidXmark class="close" color="#222" size="1.75rem" />
      ) : (
        <FaSolidBarsStaggered class="open" color="#222" size="1.75rem" />
      )}
    </button>
  );
};

export default MenuButton;
