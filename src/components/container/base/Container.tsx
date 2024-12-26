import styled from "@emotion/styled";
import {
  CSSStyleProperties,
  PartialStylePropsByBreakpointsCollection,
} from "@/types/styles";
import { ReactNodeChildren } from "@/types/lib-react";
import { ElementOnClick, ElementMouseEvent } from "@/types/event";
import { MEDIA_MIN_WIDTH } from "@/theme/breakpoints";
import { createStyledCompStyleByBreakpoint } from "@/utils/style/style";
import { customShouldForwardProp } from "@/utils/verify/verify";

type ContainerStyleProps = Pick<
  CSSStyleProperties,
  | "position"
  | "display"
  | "top"
  | "left"
  | "right"
  | "bottom"
  | "transform"
  | "backgroundColor"
  | "borderRadius"
> &
  Pick<
    PartialStylePropsByBreakpointsCollection,
    "width" | "height" | "margin" | "padding" | "minHeight"
  >;

const ContainerStyle = styled("div", {
  shouldForwardProp: (propName) =>
    customShouldForwardProp({ preventTarget: "container", propName }),
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

type ContainerProps = ContainerStyleProps &
  ReactNodeChildren &
  ElementOnClick &
  Pick<ElementMouseEvent, "onMouseEnter" | "onMouseLeave">;

const Container = ({ children, ...props }: ContainerProps) => {
  return <ContainerStyle {...props}>{children}</ContainerStyle>;
};

export default Container;
