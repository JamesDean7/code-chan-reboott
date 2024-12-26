export const addSizeUnit = (value: unknown, unit: "px" | "%") => {
  return `${value}${unit}`;
};

export const removeWhiteSpace = (value: any) => {
  if (typeof value !== "string") {
    return value;
  }
  return value.replace(/\s/g, "");
};
