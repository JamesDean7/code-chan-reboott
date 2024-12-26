import styled from "@emotion/styled";
import { ReactNodeChildren } from "@/types/lib-react";
import { ElementClassName } from "@/types/element";
import {
  CSSStyleProperties,
  PartialStylePropsByBreakpointsCollection,
} from "@/types/styles";
import { MEDIA_MIN_WIDTH } from "@/theme/breakpoints";
import { createStyledCompStyleByBreakpoint } from "@/utils/style/style";

type FlexContainerStyleProps = Pick<
  CSSStyleProperties,
  | "flexWrap"
  | "flexDirection"
  | "justifyContent"
  | "alignItems"
  | "flex"
  | "position"
> &
  Pick<
    PartialStylePropsByBreakpointsCollection,
    "width" | "height" | "rowGap" | "columnGap" | "padding" | "minHeight"
  >;

const FlexContainerStyle = styled(
  "div",
  {}
)<FlexContainerStyleProps>(
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

export type FlexContainerProps = ReactNodeChildren &
  ElementClassName &
  FlexContainerStyleProps;

const FlexContainer = ({ children, ...props }: FlexContainerProps) => {
  return <FlexContainerStyle {...props}>{children}</FlexContainerStyle>;
};

export default FlexContainer;
