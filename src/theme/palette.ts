const COLOR_RED = {
  light: "#f87171",
  main: "#ef4444",
  dark: "#b91c1c",
};

const COLOR_GRAY = {
  light: "#d1d5db",
  main: "#6b7280",
  dark: "#4b5563",
};

const COLOR_COMMON = {
  black: "#000000",
  white: "#ffffff",
};

export const THEME_PALETTE = {
  common: COLOR_COMMON,
  red: COLOR_RED,
  gray: COLOR_GRAY,
} as const;
