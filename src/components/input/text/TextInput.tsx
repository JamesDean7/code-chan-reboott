import styled from "@emotion/styled";
import { CSSStyleProperties } from "@/types/styles";
import useThemePalette from "@/hooks/theme/useThemePalette";
import {
  AppThemeTypographySizeKeys,
  AppThemeTypographyWeightKeys,
  PartialStyleByBreakpoints,
} from "@/theme/types";
import { getStyleByBreakpoints } from "@/utils/style";
import { MEDIA_MIN_WIDTH } from "@/theme/breakpoints";
import { getThemeTypographySize } from "@/utils/theme";

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
> & {
  fontSize: PartialStyleByBreakpoints<AppThemeTypographySizeKeys>;
  fontWeight?: AppThemeTypographyWeightKeys;
};

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
    fontSize,
    fontWeight,
    color,
  }) => {
    const resFontSize = getStyleByBreakpoints<AppThemeTypographySizeKeys>({
      style: fontSize,
      defaultVal: "body1",
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
      fontSize: getThemeTypographySize(resFontSize.sm),
      fontWeight,
      color,
      [MEDIA_MIN_WIDTH.md]: {
        fontSize: getThemeTypographySize(resFontSize.md),
      },
      [MEDIA_MIN_WIDTH.lg]: {
        fontSize: getThemeTypographySize(resFontSize.lg),
      },
      [MEDIA_MIN_WIDTH.xl]: {
        fontSize: getThemeTypographySize(resFontSize.xl),
      },
    };
  }
);

type TextInputProps = TextInpputStyleProps &
  JSX.IntrinsicElements["input"] & {
    error?: boolean;
  };

const TextInput = ({ error, borderColor, ...props }: TextInputProps) => {
  const themePaletteRed = useThemePalette({ usePallete: "red" });
  const inputborderColor = error ? themePaletteRed.main : borderColor;
  return <TextInputStyle borderColor={inputborderColor} {...props} />;
};

export default TextInput;
