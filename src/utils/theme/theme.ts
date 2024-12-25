import { THEME } from "@/theme";
import {
  AppThemeTypographySizeKeys,
  AppThemeTypographyWeightKeys,
} from "@/theme/types";

export const multiplyByThemeSpacing = (value: number) => {
  return value * THEME.spacing;
};

export const getThemeTypographySize = (
  typographySize: AppThemeTypographySizeKeys
) => {
  return THEME.typography.size[typographySize];
};

export const getThemeTypographyWeight = (
  typographyWeight: AppThemeTypographyWeightKeys
) => {
  return THEME.typography.weight[typographyWeight];
};
