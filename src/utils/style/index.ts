import { AppThemeBreakpointsKeys } from "@/theme/types";
import { addSizeUnit } from "@/utils/format";
import { multiplyByThemeSpacing } from "@/utils/theme";

export const getPxSpacing = (value: number) => {
  const spacing = multiplyByThemeSpacing(value);
  return addSizeUnit(spacing, "px");
};

type GetStyleByBreakpointsFnParam<T> = {
  style: Partial<Record<AppThemeBreakpointsKeys, T>>;
  defaultVal: T;
};

export const getStyleByBreakpoints = <T>({
  defaultVal,
  style,
}: GetStyleByBreakpointsFnParam<T>): Record<AppThemeBreakpointsKeys, T> => {
  const smOrDefaultValue = style?.sm ?? defaultVal;
  return {
    sm: smOrDefaultValue,
    md: style?.md ?? smOrDefaultValue,
    lg: style?.lg ?? style?.md ?? smOrDefaultValue,
    xl: style?.xl ?? style?.lg ?? style?.md ?? smOrDefaultValue,
  };
};
