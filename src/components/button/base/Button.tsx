import styled from "@emotion/styled";
import Typography, {
  type TypographyProps,
} from "@/components/typography/base/Typography";
import { MEDIA_MIN_WIDTH } from "@/theme/breakpoints";
import type {
  CSSStyleProperties,
  PartialHoverStyleOptionsCollection,
  PartialStylePropsByBreakpointsCollection,
} from "@/types/styles";
import { createStyledCompStyleByBreakpoint } from "@/utils/style/style";
import useMouseEnter from "@/hooks/event/useMouseEnter";

type ButtonStyleProps = Pick<
  CSSStyleProperties,
  | "backgroundColor"
  | "cursor"
  | "borderWidth"
  | "borderStyle"
  | "borderColor"
  | "borderRadius"
  | "transition"
> &
  Pick<PartialStylePropsByBreakpointsCollection, "padding">;

const ButtonStyle = styled("button")<ButtonStyleProps>(
  ({
    padding = { sm: "4px 14px" },
    backgroundColor,
    cursor = "pointer",
    borderColor = "#000000",
    borderStyle = "solid",
    borderWidth = "2px",
    borderRadius = "4px",
    transition = "background-color 0.3s ease",
  }) => {
    const styleByBreakpoint = createStyledCompStyleByBreakpoint({
      padding,
    });
    return {
      backgroundColor,
      cursor,
      borderColor,
      borderStyle,
      borderWidth,
      borderRadius,
      transition,
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

type ButtonProps = ButtonStyleProps &
  JSX.IntrinsicElements["button"] &
  Pick<TypographyProps, "fontSize" | "color" | "fontWeight"> &
  Pick<PartialHoverStyleOptionsCollection, "hoverBgColor" | "hoverColor">;

const Button = ({
  children,
  fontSize,
  color,
  fontWeight,
  backgroundColor,
  hoverBgColor = "#000000",
  hoverColor = "#ffffff",
  ...rest
}: ButtonProps) => {
  const { isMouseEnter, handleMouseEnter, handleMouseLeave } =
    useMouseEnter<"button">();
  const currentColor = isMouseEnter ? hoverColor : color;
  const currentBgColor = isMouseEnter ? hoverBgColor : backgroundColor;
  return (
    <ButtonStyle
      backgroundColor={currentBgColor}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...rest}
    >
      <Typography
        fontSize={fontSize}
        color={currentColor}
        fontWeight={fontWeight}
      >
        {children}
      </Typography>
    </ButtonStyle>
  );
};

export default Button;
