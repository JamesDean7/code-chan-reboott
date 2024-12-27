import { AppThemeBreakpointsKeys } from "@/theme/types";
import { PartialStylePropsByBreakpointsCollection } from "@/types/styles";
import { ExcludeFromType } from "@/types/utils";

export type StylePropsTypeToStringType = Partial<
  Record<keyof PartialStylePropsByBreakpointsCollection, string>
>;

export type StylePropsByBreakpoints = Record<
  AppThemeBreakpointsKeys,
  StylePropsTypeToStringType
>;

export type GetStyleValueByBreakpointsParam<T> = {
  style: Partial<Record<AppThemeBreakpointsKeys, T>>;
  defaultVal: T;
};

export type PrepareResponsiveValueByStylePropsParamsReturn = ExcludeFromType<
  Partial<PartialStylePropsByBreakpointsCollection>,
  string
>;

export type ChangeThemeValueToStyleValueParams = {
  propertyKey: keyof PartialStylePropsByBreakpointsCollection;
  value: string | undefined;
};

export type PrepareStylePropsByBreakpointParams = {
  styleProps: PartialStylePropsByBreakpointsCollection;
  responsiveValueByStyleProps: PrepareResponsiveValueByStylePropsParamsReturn;
  breakpoint: AppThemeBreakpointsKeys;
};
