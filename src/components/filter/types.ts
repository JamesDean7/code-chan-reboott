import type { ElementMouseEventCollection } from "@/types/event";
import type { ReactNodeChildren } from "@/types/lib-react";
import type { CSSStyleProperties } from "@/types/styles";

export type FilterStyleProps = Pick<
  CSSStyleProperties,
  | "opacity"
  | "position"
  | "top"
  | "left"
  | "right"
  | "bottom"
  | "backgroundColor"
>;

export type FilterProps = ReactNodeChildren &
  Pick<ElementMouseEventCollection<"div">, "onClick"> &
  Pick<FilterStyleProps, "opacity"> & {
    mode?: "dark" | "transparent";
  };
