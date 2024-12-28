import type {
  AppThemeShadowCustomColorParams,
  AppThemeShadowOptions,
} from "@/theme/types";

const THEME_SHADOW_OPTION: AppThemeShadowOptions = {
  thin: (color: string = "#00000033") => `0 2px 4px 0 ${color}`,
  light: (color: string = "#00000033") => `0 4px 6px 0 ${color}`,
  medium: (color: string = "#00000033") => `0 6px 8px 0 ${color}`,
  bold: (color: string = "#00000033") => `0 8px 10px 0 ${color}`,
};

export const THEME_SHADOW = {
  thin: THEME_SHADOW_OPTION.thin(),
  light: THEME_SHADOW_OPTION.light(),
  medium: THEME_SHADOW_OPTION.medium(),
  bold: THEME_SHADOW_OPTION.bold(),
  customColor: ({ type, color }: AppThemeShadowCustomColorParams) =>
    THEME_SHADOW_OPTION[type](color),
};
