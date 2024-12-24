import { THEME } from "@/theme";

export type AppTheme = typeof THEME;
export type AppThemePaletteKeys = keyof AppTheme["palette"];
export type AppThemeTypographyKeys = keyof AppTheme["typography"];
export type AppThemeTypographySizeKeys = keyof AppTheme["typography"]["size"];
export type AppThemeTypographyWeightKeys =
  keyof AppTheme["typography"]["weight"];
