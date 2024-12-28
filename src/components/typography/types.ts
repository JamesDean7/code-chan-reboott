import { PartialAppThemeCollection } from "@/theme/types";
import { ReactNodeChildren } from "@/types/lib-react";
import {
  CSSStyleProperties,
  PartialStylePropsByBreakpointsCollection,
} from "@/types/styles";
import { ExtractByKey } from "@/types/utils";
import { ReactHTML } from "react";

/* ::: Typography ::: */
export type TypographyComponentProps = Pick<
  CSSStyleProperties,
  "color" | "lineHeight" | "position" | "top" | "left" | "bottom" | "right"
> &
  Pick<PartialStylePropsByBreakpointsCollection, "fontSize"> &
  Pick<PartialAppThemeCollection, "fontWeight">;

type TypographyComponentOptions = ExtractByKey<
  keyof ReactHTML,
  "h1" | "h2" | "h3" | "h4" | "h5" | "p" | "span" | "div"
>;

export type TypographyProps = ReactNodeChildren &
  TypographyComponentProps & {
    element?: TypographyComponentOptions;
  };
