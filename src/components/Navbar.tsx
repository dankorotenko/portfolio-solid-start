import type { Component, Setter } from "solid-js";
import { A } from "solid-start";
type NavbarProps = {
  openedNav: boolean;
  setOpenedNav: Setter<boolean>;
};
const NavBar: Component<NavbarProps> = (props) => {
  const toggleNav = (): void => {
    props.setOpenedNav(!props.openedNav);
  };
  return (
    <nav>
      <div id="nav-links" class={`${props.openedNav ? "opened" : "closed"}`}>
        <A href="/" class="nav-link interactible" onClick={() => toggleNav()}>
          <h2 class="nav-link-label">
            <div class="nav-link-label-active"></div>Home
          </h2>
          <img
            class="nav-link-image"
            src="https://images.unsplash.com/photo-1622700505454-5c0929990414?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80"
            alt="no-img"
          />
        </A>
        <A
          href="/whatwedo"
          class="nav-link interactible"
          onClick={() => toggleNav()}
        >
          <h2 class="nav-link-label">
            <div class="nav-link-label-active"></div>What We Do
          </h2>
          <img
            class="nav-link-image"
            src="https://images.unsplash.com/photo-1509023464722-18d996393ca8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80"
            alt="no-img"
          />
        </A>
        <A
          href="/portfolio"
          class="nav-link interactible"
          onClick={() => toggleNav()}
        >
          <h2 class="nav-link-label">
            <div class="nav-link-label-active"></div>Portfolio
          </h2>
          <img
            class="nav-link-image"
            src="https://images.unsplash.com/photo-1636425946927-1a948d0ef0b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
            alt="no-img"
          />
        </A>
        <A
          href="/skills"
          class="nav-link interactible"
          onClick={() => toggleNav()}
        >
          <h2 class="nav-link-label">
            <div class="nav-link-label-active"></div>Skills
          </h2>
          <img
            class="nav-link-image"
            src="https://images.unsplash.com/photo-1675701209564-1046c5b6ce10?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80"
            alt="no-img"
          />
        </A>
        <A
          href="/contact"
          class="nav-link interactible"
          onClick={() => toggleNav()}
        >
          <h2 class="nav-link-label">
            <div class="nav-link-label-active"></div>Contact
          </h2>
          <img
            class="nav-link-image"
            src="https://images.unsplash.com/photo-1676085271283-841691e906a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1289&q=80"
            alt="no-img"
          />
        </A>
      </div>
    </nav>
  );
};

export default NavBar;
