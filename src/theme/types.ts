import { THEME } from "@/theme";

export type Theme = typeof THEME;
export type ThemeTypographyKeys = keyof Theme["typography"];
export type ThemeTypographySizeKeys = keyof Theme["typography"]["size"];
export type ThemeTypographyWeightKeys = keyof Theme["typography"]["weight"];
