import styled from "@emotion/styled";
import {
  CSSStyleProperties,
  PartialStylePropsByBreakpointsCollection,
} from "@/types/styles";
import { ReactNodeChildren } from "@/types/lib-react";
import { ElementOnClick, ElementMouseEvent } from "@/types/event";
import { MEDIA_MIN_WIDTH } from "@/theme/breakpoints";
import { createStyledCompStyleByBreakpoint } from "@/utils/style/style";

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
    "width" | "height" | "margin" | "padding"
  >;

const ContainerStyle = styled("div")<ContainerStyleProps>(
  ({
    position,
    display,
    width,
    height,
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
