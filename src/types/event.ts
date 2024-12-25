import { JSXInstrinsicElementKeys } from "@/types/element";

export type ElementOnClick<T extends JSXInstrinsicElementKeys = "div"> = Pick<
  JSX.IntrinsicElements[T],
  "onClick"
>;

export type ElementMouseEvent<T extends JSXInstrinsicElementKeys = "div"> =
  Pick<JSX.IntrinsicElements[T], "onMouseEnter" | "onMouseLeave">;
