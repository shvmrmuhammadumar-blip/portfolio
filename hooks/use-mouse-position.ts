"use client";

import { type RefObject, useEffect, useState } from "react";

/** Mouse position normalized to -0.5..0.5 within the given element, for subtle parallax. */
export function useMousePosition(ref: RefObject<HTMLElement | null>) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    function handleMouseMove(event: MouseEvent) {
      const rect = element!.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      setPosition({ x, y });
    }

    function handleMouseLeave() {
      setPosition({ x: 0, y: 0 });
    }

    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [ref]);

  return position;
}
