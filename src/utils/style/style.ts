import type {
  AppThemeBreakpointsKeys,
  AppThemeTypographySizeKeys,
} from "@/theme/types";
import type {
  ChangeThemeValueToStyleValueParams,
  GetStyleValueByBreakpointsParam,
  PrepareResponsiveValueByStylePropsParamsReturn,
  PrepareStylePropsByBreakpointParams,
  StylePropsByBreakpoints,
  StylePropsTypeToStringType,
} from "@/utils/style/types";
import { THEME_BREAKPOINTS_KEYS } from "@/theme/breakpoints";
import { PartialStylePropsByBreakpointsCollection } from "@/types/styles";
import { ExcludeFromType } from "@/types/utils";
import { addSizeUnit } from "@/utils/format/format";
import {
  getThemeTypographySize,
  multiplyByThemeSpacing,
} from "@/utils/theme/theme";
import { isFalsyValue, isObjectType } from "@/utils/verify/verify";

export const getPxSpacing = (value: number) => {
  const spacing = multiplyByThemeSpacing(value);
  return addSizeUnit(spacing, "px");
};

export const getStyleValueByBreakpoints = <T>({
  style,
  defaultVal,
}: GetStyleValueByBreakpointsParam<T>): Record<AppThemeBreakpointsKeys, T> => {
  const smOrDefaultValue = style?.sm ?? defaultVal;
  return {
    sm: smOrDefaultValue,
    md: style?.md ?? smOrDefaultValue,
    lg: style?.lg ?? style?.md ?? smOrDefaultValue,
    xl: style?.xl ?? style?.lg ?? style?.md ?? smOrDefaultValue,
  };
};

export const changeThemeValueToStyleValue = ({
  propertyKey,
  value,
}: ChangeThemeValueToStyleValueParams) => {
  if (isFalsyValue(value)) {
    return value;
  }
  if (propertyKey === "fontSize") {
    return getThemeTypographySize(value as AppThemeTypographySizeKeys);
  }
  return value;
};

const prepareResponsiveValueByStyleProps = (
  props: PartialStylePropsByBreakpointsCollection
): PrepareResponsiveValueByStylePropsParamsReturn => {
  const stylePropList = Object.keys(props) as Array<keyof typeof props>;
  const responsiveValueByStyleProps = stylePropList.reduce(
    (acc, propertyKey) => {
      acc[propertyKey] = getStyleValueByBreakpoints({
        style: isObjectType(props[propertyKey])
          ? props[propertyKey]
          : { sm: props[propertyKey] },
        defaultVal: undefined,
      }) as any;
      return acc;
    },
    {} as PartialStylePropsByBreakpointsCollection
  );

  return responsiveValueByStyleProps;
};

const prepareStylePropsByBreakpoint = ({
  styleProps,
  responsiveValueByStyleProps,
  breakpoint,
}: PrepareStylePropsByBreakpointParams) => {
  const stylePropList = Object.keys(styleProps) as Array<
    keyof typeof styleProps
  >;
  const stylePropByBreakpointValue = stylePropList.reduce(
    (acc, propertyKey) => {
      acc[propertyKey] = changeThemeValueToStyleValue({
        value: responsiveValueByStyleProps?.[propertyKey]?.[breakpoint],
        propertyKey: propertyKey,
      });
      return acc;
    },
    {} as StylePropsTypeToStringType
  );
  return stylePropByBreakpointValue;
};

export const createStyledCompStyleByBreakpoint = (
  styleProps: PartialStylePropsByBreakpointsCollection
) => {
  const responsiveValueByStyleProps =
    prepareResponsiveValueByStyleProps(styleProps);

  const stylePropsByBreakPoint = THEME_BREAKPOINTS_KEYS.reduce(
    (acc, breakpoint) => {
      acc[breakpoint] = {
        ...prepareStylePropsByBreakpoint({
          styleProps,
          responsiveValueByStyleProps,
          breakpoint,
        }),
      };
      return acc;
    },
    {} as StylePropsByBreakpoints
  );

  return stylePropsByBreakPoint;
};
