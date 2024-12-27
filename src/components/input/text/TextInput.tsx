import styled from "@emotion/styled";
import {
  CSSStyleProperties,
  PartialStylePropsByBreakpointsCollection,
} from "@/types/styles";
import useThemePalette from "@/hooks/theme/useThemePalette";
import { PartialAppThemeCollection } from "@/theme/types";
import { MEDIA_MIN_WIDTH } from "@/theme/breakpoints";
import { getThemeTypographyWeight } from "@/utils/theme/theme";
import { createStyledCompStyleByBreakpoint } from "@/utils/style/style";

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

const TextInputStyle = styled.input<TextInpputStyleProps>(
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

export type TextInputProps = TextInpputStyleProps &
  JSX.IntrinsicElements["input"] & {
    error?: boolean;
  };

const TextInput = ({ error, borderColor, ...props }: TextInputProps) => {
  const themePaletteRed = useThemePalette({ usePallete: "red" });
  const inputborderColor = error ? themePaletteRed.main : borderColor;
  return <TextInputStyle borderColor={inputborderColor} {...props} />;
};

export default TextInput;
