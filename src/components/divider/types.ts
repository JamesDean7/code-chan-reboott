import type { CSSStyleProperties } from "@/types/styles";

/* ::: Divider ::: */
export type DividerStyleProps = Pick<
  CSSStyleProperties,
  "backgroundColor" | "width" | "height"
>;

export type DividerProps = DividerStyleProps;
