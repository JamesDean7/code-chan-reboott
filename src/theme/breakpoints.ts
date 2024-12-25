export const THEME_BREAKPOINTS = {
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1536,
} as const;

export const THEME_BREAKPOINTS_KEYS = Object.keys(THEME_BREAKPOINTS) as Array<
  keyof typeof THEME_BREAKPOINTS
>;

export const MEDIA_MIN_WIDTH = {
  sm: `@media (min-width:${THEME_BREAKPOINTS.sm}px)`,
  md: `@media (min-width:${THEME_BREAKPOINTS.md}px)`,
  lg: `@media (min-width:${THEME_BREAKPOINTS.lg}px)`,
  xl: `@media (min-width:${THEME_BREAKPOINTS.xl}px)`,
};
