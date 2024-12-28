import type { ElementClassName } from "@/types/element";
import { ElementMouseEventCollection } from "@/types/event";
import type { ReactNodeChildren } from "@/types/lib-react";
import type {
  CSSStyleProperties,
  PartialStylePropsByBreakpointsCollection,
} from "@/types/styles";

/* ::: Container ::: */
export type ContainerStyleProps = Pick<
  CSSStyleProperties,
  | "position"
  | "display"
  | "top"
  | "left"
  | "right"
  | "bottom"
  | "transform"
  | "backgroundColor"
  | "borderRadius"
> &
  Pick<
    PartialStylePropsByBreakpointsCollection,
    "width" | "height" | "margin" | "padding" | "minHeight"
  >;

export type ContainerProps = ContainerStyleProps &
  ReactNodeChildren &
  Pick<
    ElementMouseEventCollection<"div">,
    "onMouseEnter" | "onMouseLeave" | "onClick"
  >;

/* ::: FlexContainer ::: */
export type FlexContainerStyleProps = Pick<
  CSSStyleProperties,
  | "flexWrap"
  | "flexDirection"
  | "justifyContent"
  | "alignItems"
  | "flex"
  | "position"
> &
  Pick<
    PartialStylePropsByBreakpointsCollection,
    "width" | "height" | "rowGap" | "columnGap" | "padding" | "minHeight"
  >;

export type FlexContainerProps = ReactNodeChildren &
  ElementClassName &
  FlexContainerStyleProps;
