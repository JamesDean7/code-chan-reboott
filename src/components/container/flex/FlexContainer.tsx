import styled from "@emotion/styled";
import { MEDIA_MIN_WIDTH } from "@/theme/breakpoints";
import { createStyledCompStyleByBreakpoint } from "@/utils/style/style";
import { customShouldForwardProp } from "@/utils/verify/verify";
import type {
  FlexContainerProps,
  FlexContainerStyleProps,
} from "@/components/container/types";

const FlexContainerStyle = styled("div", {
  shouldForwardProp: (propName) =>
    customShouldForwardProp({ preventTarget: "common", propName }),
})<FlexContainerStyleProps>(
  ({
    position = "static",
    flex = "initial",
    flexDirection = "row",
    flexWrap = "wrap",
    justifyContent = "center",
    alignItems = "center",
    rowGap,
    columnGap,
    width,
    height,
    minHeight,
    padding,
    zIndex,
  }) => {
    const styleByBreakpoint = createStyledCompStyleByBreakpoint({
      height,
      width,
      rowGap,
      columnGap,
      padding,
      minHeight,
    });

    return {
      display: "flex",
      position,
      flex,
      flexDirection,
      flexWrap,
      justifyContent,
      alignItems,
      zIndex,
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

const FlexContainer = ({ children, ...props }: FlexContainerProps) => {
  return <FlexContainerStyle {...props}>{children}</FlexContainerStyle>;
};

export default FlexContainer;
