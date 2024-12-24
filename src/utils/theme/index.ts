import { THEME } from "@/theme";
import {
  ThemeTypographySizeKeys,
  ThemeTypographyWeightKeys,
} from "@/theme/types";

export const multiplyByThemeSpacing = (value: number) => {
  return value * THEME.spacing;
};

export const getThemeTypographySize = (
  typographySize: ThemeTypographySizeKeys
) => {
  return THEME.typography.size[typographySize];
};

export const getThemeTypographyWeight = (
  typographyWeight: ThemeTypographyWeightKeys
) => {
  return THEME.typography.weight[typographyWeight];
};
