import styled from "@emotion/styled";
import { CSSStyleProperties } from "@/types/styles";
import useThemePalette from "@/hooks/theme/useThemePalette";

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
  | "fontSize"
  | "fontWeight"
  | "color"
>;

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
  }) => ({
    width,
    height,
    outline,
    padding,
    borderRadius,
    borderWidth,
    borderStyle,
    borderColor,
    fontSize,
    fontWeight,
    color,
  })
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
