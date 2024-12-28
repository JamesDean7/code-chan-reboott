import { THEME_SHADOW } from "@/theme/shadow";
import { THEME_BREAKPOINTS } from "./breakpoints";
import { THEME_PALETTE } from "./palette";
import { THEME_TYPOGRAPHY } from "./typography";

export const THEME = {
  spacing: 2,
  palette: THEME_PALETTE,
  typography: THEME_TYPOGRAPHY,
  breakpoints: THEME_BREAKPOINTS,
  shadow: THEME_SHADOW,
} as const;
