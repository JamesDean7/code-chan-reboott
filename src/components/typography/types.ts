import type { PartialAppThemeCollection } from "@/theme/types";
import type { ReactNodeChildren } from "@/types/lib-react";
import type {
  CSSStyleProperties,
  PartialStylePropsByBreakpointsCollection,
} from "@/types/styles";
import type { ExtractByKey } from "@/types/utils";
import type { ReactHTML } from "react";

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
