const TYPOGRAPHY_SIZE = {
  h1: "34px",
  h2: "30px",
  h3: "26px",
  h4: "22px",
  h5: "18px",
  body1: "16px",
  body2: "14px",
  body3: "12px",
};

const TYPOGRAPHY_WEIGHT = {
  thin: 100,
  extraLight: 200,
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extraBold: 800,
  black: 900,
};

export const THEME_TYPOGRAPHY = {
  size: TYPOGRAPHY_SIZE,
  weight: TYPOGRAPHY_WEIGHT,
} as const;
