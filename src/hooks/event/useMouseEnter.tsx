import { useState } from "react";
import type { ElementMouseEventCollection } from "@/types/event";
import type { JSXInstrinsicElementKeys } from "@/types/element";

const useMouseEnter = <T extends JSXInstrinsicElementKeys = "div">() => {
  const [isMouseEnter, setIsMouseEnter] = useState(false);

  const handleMouseEnter: ElementMouseEventCollection<T>["onMouseEnter"] =
    () => {
      setIsMouseEnter(true);
    };

  const handleMouseLeave: ElementMouseEventCollection<T>["onMouseLeave"] =
    () => {
      setIsMouseEnter(false);
    };

  return { isMouseEnter, handleMouseEnter, handleMouseLeave };
};

export default useMouseEnter;
