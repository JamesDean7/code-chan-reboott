import { THEME_BREAKPOINTS_KEYS } from "@/theme/breakpoints";
import { AppThemeBreakpointsKeys } from "@/theme/types";
import { PartialStylePropsByBreakpointsCollection } from "@/types/styles";
import { ExcludeFromType } from "@/types/utils";
import { addSizeUnit } from "@/utils/format/format";
import { multiplyByThemeSpacing } from "@/utils/theme/theme";
import { isObjectType } from "@/utils/verify/verify";

export const getPxSpacing = (value: number) => {
  const spacing = multiplyByThemeSpacing(value);
  return addSizeUnit(spacing, "px");
};

type GetStyleByBreakpointsFnParam<T> = {
  style: Partial<Record<AppThemeBreakpointsKeys, T>>;
  defaultVal: T;
};

export const getStyleByBreakpoints = <T>({
  style,
  defaultVal,
}: GetStyleByBreakpointsFnParam<T>): Record<AppThemeBreakpointsKeys, T> => {
  const smOrDefaultValue = style?.sm ?? defaultVal;
  return {
    sm: smOrDefaultValue,
    md: style?.md ?? smOrDefaultValue,
    lg: style?.lg ?? style?.md ?? smOrDefaultValue,
    xl: style?.xl ?? style?.lg ?? style?.md ?? smOrDefaultValue,
  };
};

const changeToSmBreakpointObj = <T>(value: T) => {
  return { sm: value };
};

type StylePropsTypeToStringType = Partial<
  Record<keyof PartialStylePropsByBreakpointsCollection, string>
>;

type StylePropsByBreakpoints = Record<
  AppThemeBreakpointsKeys,
  StylePropsTypeToStringType
>;

const prepareResponsiveValueByStyleProps = (
  props: PartialStylePropsByBreakpointsCollection
) => {
  const stylePropList = Object.keys(props) as Array<keyof typeof props>;
  const styleByBreakpoint = stylePropList.reduce((acc, propertyKey) => {
    acc[propertyKey] = getStyleByBreakpoints({
      style: isObjectType(props[propertyKey])
        ? props[propertyKey]
        : changeToSmBreakpointObj(props[propertyKey]),
      defaultVal: undefined,
    });
    return acc;
  }, {} as ExcludeFromType<PartialStylePropsByBreakpointsCollection, string>);

  return styleByBreakpoint;
};

const prepareStylePropsByBreakpoint = ({
  styleProps,
  responsiveValueByStyleProps,
  breakpoint,
}: {
  styleProps: PartialStylePropsByBreakpointsCollection;
  responsiveValueByStyleProps: ReturnType<
    typeof prepareResponsiveValueByStyleProps
  >;
  breakpoint: AppThemeBreakpointsKeys;
}) => {
  const stylePropList = Object.keys(styleProps) as Array<
    keyof typeof styleProps
  >;
  const stylePropByBreakpointValue = stylePropList.reduce(
    (acc, propertyKey) => {
      acc[propertyKey] =
        responsiveValueByStyleProps?.[propertyKey]?.[breakpoint];
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
