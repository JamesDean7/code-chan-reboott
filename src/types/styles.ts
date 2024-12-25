import { PartialStyleByBreakpoints } from "@/theme/types";
import { CSSProperties } from "react";

export type CSSStyleProperties = CSSProperties;

export type CSSFlexStyleProps = Pick<
  CSSStyleProperties,
  "flex" | "flexDirection" | "justifyContent" | "alignItems" | "gap"
>;

export type CSSFlexDirection = CSSProperties["flexDirection"];

export type CSSFlexAlignItems = CSSProperties["alignItems"];

export type ResponsiveStylePropsCollection = {
  width: PartialStyleByBreakpoints<string>;
  maxWidth: PartialStyleByBreakpoints<string>;
  height: PartialStyleByBreakpoints<string>;
  maxHeight: PartialStyleByBreakpoints<string>;
  compWidth: PartialStyleByBreakpoints<string>;
  compHeight: PartialStyleByBreakpoints<string>;
  gridTemplateColumns: PartialStyleByBreakpoints<string>;
  rowGap: PartialStyleByBreakpoints<string>;
  columnGap: PartialStyleByBreakpoints<string>;
  padding: PartialStyleByBreakpoints<string>;
  margin: PartialStyleByBreakpoints<string>;
};
