import type { Component } from "solid-js";
import { createSignal, createEffect } from "solid-js";
import { FiArrowUpRight } from "solid-icons/fi";

const Trailer: Component = () => {
  const [isLink, setIsLink] = createSignal(false);
  let trailer: any;

  const animateTrailer = (e: MouseEvent, interacting: boolean) => {
    const x = e.clientX - 10,
      y = e.clientY - 10;

    const keyframes = {
      transform: `translate(${x}px, ${y}px) scale(${interacting ? 4 : 1})`,
    };
    trailer.animate(keyframes, {
      duration: 800,
      fill: "forwards",
    });
  };

  createEffect(() => {
    window.onmousemove = (e) => {
      if (e.target instanceof Element) {
        const interactible = e.target.closest(".interactible"),
          interacting = interactible !== null;
        setIsLink(interacting);
        animateTrailer(e, interacting);
      }
    };
  }, []);

  return (
    <div ref={trailer} class={`trailer ${isLink() ? "link" : ""}`}>
      <FiArrowUpRight color="#000" size="0.5rem" />
    </div>
  );
};

export default Trailer;
