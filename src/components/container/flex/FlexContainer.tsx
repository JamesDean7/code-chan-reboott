import styled from "@emotion/styled";
import { ReactNodeChildren } from "@/types/lib-react";
import { ElementClassName } from "@/types/element";
import {
  CSSStyleProperties,
  StylePropsByBreakpointsCollection,
} from "@/types/styles";
import { MEDIA_MIN_WIDTH } from "@/theme/breakpoints";
import { createStyledCompStyleByBreakpoint } from "@/utils/style/style";
import isPropValid from "@emotion/is-prop-valid";

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
      "width" | "height" | "rowGap" | "columnGap" | "padding"
    >
  >;

const FlexContainerStyle = styled("div")<FlexContainerStyleProps>(
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
    padding,
  }) => {
    const styleByBreakpoint = createStyledCompStyleByBreakpoint({
      height,
      width,
      rowGap,
      columnGap,
      padding,
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
