import styled from "@emotion/styled";
import { MEDIA_MIN_WIDTH } from "@/theme/breakpoints";
import { ReactNodeChildren } from "@/types/lib-react";
import { StylePropsByBreakpointsCollection } from "@/types/styles";
import { createStyledCompStyleByBreakpoint } from "@/utils/style/style";
import { customShouldForwardProp } from "@/utils/verify/verify";

type GridContainerStyleProps = Partial<
  Pick<
    StylePropsByBreakpointsCollection,
    | "width"
    | "maxWidth"
    | "height"
    | "rowGap"
    | "columnGap"
    | "gridTemplateColumns"
    | "padding"
    | "margin"
  >
>;

const GridContainerStyle = styled(
  "div",
  {}
)<GridContainerStyleProps>(
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

type GridContainerProps = ReactNodeChildren & GridContainerStyleProps;

const GridContainer = ({ children, ...props }: GridContainerProps) => {
  return <GridContainerStyle {...props}>{children}</GridContainerStyle>;
};

export default GridContainer;
