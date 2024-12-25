import { useState } from "react";
import { ElementMouseEvent } from "@/types/event";

const useMouseEnter = () => {
  const [isMouseEnter, setIsMouseEnter] = useState(false);

  const handleMouseEnter: ElementMouseEvent["onMouseEnter"] = () => {
    setIsMouseEnter(true);
  };

  const handleMouseLeave: ElementMouseEvent["onMouseLeave"] = () => {
    setIsMouseEnter(false);
  };

  return { isMouseEnter, handleMouseEnter, handleMouseLeave };
};

export default useMouseEnter;
