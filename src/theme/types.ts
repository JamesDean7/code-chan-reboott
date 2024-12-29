import type { THEME } from "@/theme";

export type AppTheme = typeof THEME;

export type AppThemePaletteKeys = keyof AppTheme["palette"];

export type AppThemeTypographyKeys = keyof AppTheme["typography"];

export type AppThemeTypographySizeKeys = keyof AppTheme["typography"]["size"];

export type AppThemeTypographyWeightKeys =
  keyof AppTheme["typography"]["weight"];

export type AppThemeBreakpointsKeys = keyof AppTheme["breakpoints"];

type AppThemeShadowOptionsKeys = "thin" | "light" | "medium" | "bold";

export type AppThemeShadowOptions = Record<
  AppThemeShadowOptionsKeys,
  (param?: string) => string
>;

export type AppThemeShadowCustomColorParams = {
  type: AppThemeShadowOptionsKeys;
  color: string;
};

export type StyleByBreakpoints<T extends unknown = string> = Record<
  AppThemeBreakpointsKeys,
  T
>;

export type PartialStyleByBreakpoints<T extends unknown = string> = Partial<
  StyleByBreakpoints<T>
>;

export type AppThemeCollection = {
  fontWeight?: AppThemeTypographyWeightKeys;
};

export type PartialAppThemeCollection = Partial<AppThemeCollection>;
