import type { FlexContainerProps } from "@/components/container/types";
import type { ReactNodeChildren } from "@/types/lib-react";
import type {
  CSSStyleProperties,
  PartialStylePropsByBreakpointsCollection,
} from "@/types/styles";

/* ::: ModalContainer ::: */
export type BookmarkModalStyleProps = Pick<
  CSSStyleProperties,
  | "borderRadius"
  | "backgroundColor"
  | "zIndex"
  | "top"
  | "left"
  | "transform"
  | "boxShadow"
> &
  Pick<
    PartialStylePropsByBreakpointsCollection,
    "width" | "maxWidth" | "height" | "maxHeight"
  >;

export type ModalContainerProps = ReactNodeChildren &
  FlexContainerProps &
  BookmarkModalStyleProps;
