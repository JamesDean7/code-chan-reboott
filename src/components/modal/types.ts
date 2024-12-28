import { FlexContainerProps } from "@/components/container/types";
import { ReactNodeChildren } from "@/types/lib-react";
import {
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
