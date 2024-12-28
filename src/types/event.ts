import type { JSXInstrinsicElementKeys } from "@/types/element";

export type ElementMouseEventCollection<T extends JSXInstrinsicElementKeys> =
  Pick<JSX.IntrinsicElements[T], "onMouseEnter" | "onMouseLeave" | "onClick">;

export type ReactMouseEvent<T = HTMLDivElement> = React.MouseEvent<
  T,
  MouseEvent
>;
