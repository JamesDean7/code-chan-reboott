import styled from "@emotion/styled";
import { MEDIA_MIN_WIDTH } from "@/theme/breakpoints";
import type { ReactNodeChildren } from "@/types/lib-react";
import type { PartialStylePropsByBreakpointsCollection } from "@/types/styles";
import { createStyledCompStyleByBreakpoint } from "@/utils/style/style";
import { customShouldForwardProp } from "@/utils/verify/verify";

type GridContainerStyleProps = Pick<
  PartialStylePropsByBreakpointsCollection,
  | "width"
  | "maxWidth"
  | "height"
  | "rowGap"
  | "columnGap"
  | "gridTemplateColumns"
  | "padding"
  | "margin"
>;

type GridContainerProps = ReactNodeChildren & GridContainerStyleProps;

const GridContainerStyle = styled("div", {
  shouldForwardProp: (propName) =>
    customShouldForwardProp({ preventTarget: "common", propName }),
})<GridContainerStyleProps>(
  ({
    width,
    height,
    rowGap,
    columnGap,
    padding,
    gridTemplateColumns,
    maxWidth,
    margin,
  }) => {
    const styleByBreakpoint = createStyledCompStyleByBreakpoint({
      height,
      width,
      maxWidth,
      rowGap,
      columnGap,
      gridTemplateColumns,
      padding,
      margin,
    });

    return {
      display: "grid",
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

const GridContainer = ({ children, ...props }: GridContainerProps) => {
  return <GridContainerStyle {...props}>{children}</GridContainerStyle>;
};

export default GridContainer;
