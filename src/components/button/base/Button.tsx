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
import { customShouldForwardProp } from "@/utils/verify/verify";

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
  Pick<PartialStylePropsByBreakpointsCollection, "padding"> &
  Pick<PartialHoverStyleOptionsCollection, "hoverBgColor" | "hoverColor">;

type ButtonProps = ButtonStyleProps &
  JSX.IntrinsicElements["button"] &
  Pick<TypographyProps, "fontSize" | "color" | "fontWeight">;

const ButtonStyle = styled("button", {
  shouldForwardProp: (propName) =>
    customShouldForwardProp({ preventTarget: "common", propName }),
})<ButtonStyleProps>(
  ({
    padding = { sm: "4px 14px" },
    color,
    backgroundColor,
    cursor = "pointer",
    borderColor = "#000000",
    borderStyle = "solid",
    borderWidth = "2px",
    borderRadius = "4px",
    transition = "background-color 0.3s ease",
    hoverBgColor,
    hoverColor,
  }) => {
    const styleByBreakpoint = createStyledCompStyleByBreakpoint({
      padding,
    });
    return {
      color,
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
      "&:hover": {
        color: hoverColor,
        backgroundColor: hoverBgColor,
      },
    };
  }
);

const Button = ({
  children,
  fontSize,
  color,
  fontWeight,
  backgroundColor,
  hoverBgColor,
  hoverColor,
  ...rest
}: ButtonProps) => {
  const { isMouseEnter, handleMouseEnter, handleMouseLeave } =
    useMouseEnter<"button">();
  return (
    <ButtonStyle
      color={color}
      backgroundColor={backgroundColor}
      hoverBgColor={hoverBgColor ?? backgroundColor}
      hoverColor={hoverColor ?? color}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...rest}
    >
      <Typography fontSize={fontSize} color="inherent" fontWeight={fontWeight}>
        {children}
      </Typography>
    </ButtonStyle>
  );
};

export default Button;
