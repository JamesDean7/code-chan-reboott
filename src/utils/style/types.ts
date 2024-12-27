import { AppThemeBreakpointsKeys } from "@/theme/types";
import { PartialStylePropsByBreakpointsCollection } from "@/types/styles";

export type StylePropsTypeToStringType = Partial<
  Record<keyof PartialStylePropsByBreakpointsCollection, string>
>;

export type StylePropsByBreakpoints = Record<
  AppThemeBreakpointsKeys,
  StylePropsTypeToStringType
>;
