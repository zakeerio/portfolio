import { useEffect, useState } from "react";

export function useCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const updateCursor = (event) => setPosition({ x: event.clientX, y: event.clientY });
    const show = () => setVisible(true);
    const hide = () => setVisible(false);
    const hoverOn = (event) => {
      const target = event.target;

      if (target.closest && target.closest("a, button, input, textarea, select, label")) {
        setHovered(true);
      }
    };
    const hoverOff = (event) => {
      const target = event.target;

      if (target.closest && target.closest("a, button, input, textarea, select, label")) {
        setHovered(false);
      }
    };

    window.addEventListener("pointermove", updateCursor);
    window.addEventListener("pointerenter", show);
    window.addEventListener("pointerleave", hide);
    window.addEventListener("pointerover", hoverOn);
    window.addEventListener("pointerout", hoverOff);

    return () => {
      window.removeEventListener("pointermove", updateCursor);
      window.removeEventListener("pointerenter", show);
      window.removeEventListener("pointerleave", hide);
      window.removeEventListener("pointerover", hoverOn);
      window.removeEventListener("pointerout", hoverOff);
    };
  }, []);

  return { hovered, position, visible };
}
