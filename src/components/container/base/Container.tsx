import styled from "@emotion/styled";
import { MEDIA_MIN_WIDTH } from "@/theme/breakpoints";
import { createStyledCompStyleByBreakpoint } from "@/utils/style/style";
import { customShouldForwardProp } from "@/utils/verify/verify";
import type {
  ContainerProps,
  ContainerStyleProps,
} from "@/components/container/types";

const ContainerStyle = styled("div", {
  shouldForwardProp: (propName) =>
    customShouldForwardProp({ preventTarget: "common", propName }),
})<ContainerStyleProps>(
  ({
    position,
    display,
    width,
    height,
    minHeight,
    margin,
    padding,
    top,
    left,
    right,
    bottom,
    transform,
    backgroundColor,
    borderRadius,
  }) => {
    const styleByBreakpoint = createStyledCompStyleByBreakpoint({
      height,
      width,
      margin,
      padding,
      minHeight,
    });
    return {
      position,
      display,
      top,
      left,
      right,
      bottom,
      transform,
      backgroundColor,
      borderRadius,
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

const Container = ({ children, ...props }: ContainerProps) => {
  return <ContainerStyle {...props}>{children}</ContainerStyle>;
};

export default Container;
