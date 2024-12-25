import styled from "@emotion/styled";
import {
  CSSStyleProperties,
  StylePropsByBreakpointsCollection,
} from "@/types/styles";
import { ReactNodeChildren } from "@/types/lib-react";
import { ElementOnClick, ElementMouseEvent } from "@/types/event";
import { createStyledCompStyleByBreakpoint } from "@/utils/style";
import { MEDIA_MIN_WIDTH } from "@/theme/breakpoints";

type ContainerStyleProps = Pick<CSSStyleProperties, "position" | "display"> &
  Partial<
    Pick<StylePropsByBreakpointsCollection, "width" | "height" | "margin">
  >;

const ContainerStyle = styled.div<ContainerStyleProps>(
  ({ position, display, width, height, margin }) => {
    const styleByBreakpoint = createStyledCompStyleByBreakpoint({
      height,
      width,
      margin,
    });
    return {
      position,
      display,
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
