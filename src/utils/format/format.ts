export const addSizeUnit = (value: unknown, unit: "px" | "%") => {
  return `${value}${unit}`;
};
