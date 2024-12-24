import { THEME_BREAKPOINTS } from "./breakpoints";
import { THEME_PALETTE } from "./palette";
import { THEME_TYPOGRAPHY } from "./typography";

export const THEME = {
  palette: THEME_PALETTE,
  typography: THEME_TYPOGRAPHY,
  breakpoints: THEME_BREAKPOINTS,
  spacing: 2,
} as const;
