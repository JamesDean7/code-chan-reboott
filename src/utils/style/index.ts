import { addSizeUnit } from "@/utils/format";
import { multiplyByThemeSpacing } from "@/utils/theme";

export const getPxSpacing = (value: number) => {
  const spacing = multiplyByThemeSpacing(value);
  return addSizeUnit(spacing, "px");
};
