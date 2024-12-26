import {
  AppThemeTypographySizeKeys,
  PartialStyleByBreakpoints,
} from "@/theme/types";
import { CSSProperties } from "react";

export type CSSStyleProperties = CSSProperties;

export type CSSFlexStyleProps = Pick<
  CSSStyleProperties,
  "flex" | "flexDirection" | "justifyContent" | "alignItems" | "gap"
>;

export type CSSFlexDirection = CSSProperties["flexDirection"];

export type CSSFlexAlignItems = CSSProperties["alignItems"];

type StylePropsByBreakpointsCollection = {
  width: PartialStyleByBreakpoints<string>;
  maxWidth: PartialStyleByBreakpoints<string>;
  height: PartialStyleByBreakpoints<string>;
  minHeight: PartialStyleByBreakpoints<string>;
  maxHeight: PartialStyleByBreakpoints<string>;
  compWidth: PartialStyleByBreakpoints<string>;
  compHeight: PartialStyleByBreakpoints<string>;
  gridTemplateColumns: PartialStyleByBreakpoints<string>;
  rowGap: PartialStyleByBreakpoints<string>;
  columnGap: PartialStyleByBreakpoints<string>;
  padding: PartialStyleByBreakpoints<string>;
  margin: PartialStyleByBreakpoints<string>;
  fontSize: PartialStyleByBreakpoints<AppThemeTypographySizeKeys>;
};

export type PartialStylePropsByBreakpointsCollection =
  Partial<StylePropsByBreakpointsCollection>;

type HoverStyleOptionsCollection = {
  hoverColor: string;
  hoverBgColor: string;
  hoverBorderColor: string;
};

export type PartialHoverStyleOptionsCollection =
  Partial<HoverStyleOptionsCollection>;
