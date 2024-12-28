import type { JSXInstrinsicElementKeys } from "@/types/element";

export type ElementMouseEvent<T extends JSXInstrinsicElementKeys> = Pick<
  JSX.IntrinsicElements[T],
  "onMouseEnter" | "onMouseLeave" | "onClick"
>;
