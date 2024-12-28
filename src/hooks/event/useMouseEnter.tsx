import { useState } from "react";
import type { ElementMouseEvent } from "@/types/event";
import type { JSXInstrinsicElementKeys } from "@/types/element";

const useMouseEnter = <T extends JSXInstrinsicElementKeys = "div">() => {
  const [isMouseEnter, setIsMouseEnter] = useState(false);

  const handleMouseEnter: ElementMouseEvent<T>["onMouseEnter"] = () => {
    setIsMouseEnter(true);
  };

  const handleMouseLeave: ElementMouseEvent<T>["onMouseLeave"] = () => {
    setIsMouseEnter(false);
  };

  return { isMouseEnter, handleMouseEnter, handleMouseLeave };
};

export default useMouseEnter;
