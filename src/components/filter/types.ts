import { ElementMouseEventCollection } from "@/types/event";
import { ReactNodeChildren } from "@/types/lib-react";
import { CSSStyleProperties } from "@/types/styles";

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
