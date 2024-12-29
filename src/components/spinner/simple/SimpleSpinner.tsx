import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { MEDIA_MIN_WIDTH } from "@/theme/breakpoints";
import type {
  CSSStyleProperties,
  PartialStylePropsByBreakpointsCollection,
} from "@/types/styles";
import { createStyledCompStyleByBreakpoint } from "@/utils/style/style";
import { customShouldForwardProp } from "@/utils/verify/verify";

type SimpleSpinnerStyleProps = Pick<
  CSSStyleProperties,
  "borderColor" | "borderTopColor" | "borderWidth" | "borderStyle" | "display"
> &
  Pick<PartialStylePropsByBreakpointsCollection, "width" | "height" | "margin">;

type SimpleSinnerProps = SimpleSpinnerStyleProps;

const spinKeyFrame = keyframes`
   to { -webkit-transform: rotate(360deg); }
`;

const SimpleSpinnerStyle = styled("div", {
  shouldForwardProp: (propName) =>
    customShouldForwardProp({ preventTarget: "common", propName }),
})<SimpleSpinnerStyleProps>(
  ({
    theme,
    margin,
    display = "block",
    width = { sm: "50px" },
    height = { sm: "50px" },
    borderColor,
    borderTopColor,
    borderWidth = "3px",
    borderStyle = "solid",
  }) => {
    const styleByBreakpoint = createStyledCompStyleByBreakpoint({
      height,
      width,
      margin,
    });
    return {
      display,
      borderColor: borderColor ?? theme.palette.gray.light,
      borderTopColor: borderTopColor ?? theme.palette.gray.main,
      borderWidth,
      borderStyle,
      borderRadius: "100%",
      animation: `${spinKeyFrame} 1s ease-in-out infinite`,
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

const SimpleSpinner = ({ ...rest }: SimpleSinnerProps) => {
  return <SimpleSpinnerStyle {...rest} />;
};

export default SimpleSpinner;
