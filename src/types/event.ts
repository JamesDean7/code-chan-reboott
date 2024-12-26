import { JSXInstrinsicElementKeys } from "@/types/element";

export type ElementOnClick<T extends JSXInstrinsicElementKeys> = Pick<
  JSX.IntrinsicElements[T],
  "onClick"
>;

export type ElementMouseEvent<T extends JSXInstrinsicElementKeys> = Pick<
  JSX.IntrinsicElements[T],
  "onMouseEnter" | "onMouseLeave"
>;
