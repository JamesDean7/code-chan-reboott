import styled from "@emotion/styled";
import { ReactNodeChildren } from "@/types/lib-react";
import { ElementClassName } from "@/types/element";
import {
  CSSStyleProperties,
  StylePropsByBreakpointsCollection,
} from "@/types/styles";
import { createStyledCompStyleByBreakpoint } from "@/utils/style";
import { MEDIA_MIN_WIDTH } from "@/theme/breakpoints";

type FlexContainerStyleProps = Pick<
  CSSStyleProperties,
  | "flexWrap"
  | "flexDirection"
  | "justifyContent"
  | "alignItems"
  | "flex"
  | "position"
> &
  Partial<
    Pick<
      StylePropsByBreakpointsCollection,
      "width" | "height" | "rowGap" | "columnGap"
    >
  >;

const FlexContainerStyle = styled.div<FlexContainerStyleProps>(
  ({
    position = "static",
    flex = "auto",
    flexDirection = "row",
    flexWrap = "wrap",
    justifyContent = "center",
    alignItems = "center",
    rowGap,
    columnGap,
    width,
    height,
  }) => {
    const styleByBreakpoint = createStyledCompStyleByBreakpoint({
      height,
      width,
      rowGap,
      columnGap,
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
