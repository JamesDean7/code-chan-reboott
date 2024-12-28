import styled from "@emotion/styled";
import type {
  CSSStyleProperties,
  PartialStylePropsByBreakpointsCollection,
} from "@/types/styles";
import useThemePalette from "@/hooks/theme/useThemePalette";
import type { PartialAppThemeCollection } from "@/theme/types";
import { MEDIA_MIN_WIDTH } from "@/theme/breakpoints";
import { getThemeTypographyWeight } from "@/utils/theme/theme";
import { createStyledCompStyleByBreakpoint } from "@/utils/style/style";
import { customShouldForwardProp } from "@/utils/verify/verify";
import { InputElementAttribute } from "@/types/element";

type TextInpputStyleProps = Pick<
  CSSStyleProperties,
  | "width"
  | "height"
  | "outline"
  | "padding"
  | "borderRadius"
  | "borderWidth"
  | "borderStyle"
  | "borderColor"
  | "color"
> &
  Pick<PartialStylePropsByBreakpointsCollection, "fontSize"> &
  Pick<PartialAppThemeCollection, "fontWeight">;

export type TextInputProps = TextInpputStyleProps &
  InputElementAttribute & {
    error?: boolean;
  };

const TextInputStyle = styled("input", {
  shouldForwardProp: (propName) =>
    customShouldForwardProp({ preventTarget: "common", propName }),
})<TextInpputStyleProps>(
  ({
    width,
    height,
    outline = "none",
    padding = "10px",
    borderRadius = "4px",
    borderWidth = "1px",
    borderStyle = "solid",
    borderColor = "transparent",
    fontSize = { sm: "body3" },
    fontWeight = "normal",
    color,
  }) => {
    const styleByBreakpoint = createStyledCompStyleByBreakpoint({
      fontSize,
    });
    return {
      width,
      height,
      outline,
      padding,
      borderRadius,
      borderWidth,
      borderStyle,
      borderColor,
      fontWeight: getThemeTypographyWeight(fontWeight),
      color,
      ...styleByBreakpoint.sm,
      [MEDIA_MIN_WIDTH.md]: {
        ...styleByBreakpoint.md,
      },
      [MEDIA_MIN_WIDTH.lg]: {
        ...styleByBreakpoint.lg,
      },
      [MEDIA_MIN_WIDTH.xl]: {
        ...styleByBreakpoint.xl,
      },
    };
  }
);

const TextInput = ({ error, borderColor, ...props }: TextInputProps) => {
  const themePaletteRed = useThemePalette({ usePallete: "red" });
  const inputborderColor = error ? themePaletteRed.main : borderColor;
  return <TextInputStyle borderColor={inputborderColor} {...props} />;
};

export default TextInput;
