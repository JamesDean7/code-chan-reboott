import styled from "@emotion/styled";
import type {
  CSSStyleProperties,
  PartialStylePropsByBreakpointsCollection,
} from "@/types/styles";
import { ZINDEX } from "@/const/style/style";
import { MEDIA_MIN_WIDTH } from "@/theme/breakpoints";
import type { ReactNodeChildren } from "@/types/lib-react";
import type { FlexContainerProps } from "@/components/container/flex/FlexContainer";
import FlexContainer from "@/components/container/flex/FlexContainer";
import { createStyledCompStyleByBreakpoint } from "@/utils/style/style";

type BookmarkModalStyleProps = Pick<
  CSSStyleProperties,
  | "borderRadius"
  | "backgroundColor"
  | "zIndex"
  | "top"
  | "left"
  | "transform"
  | "boxShadow"
> &
  Pick<
    PartialStylePropsByBreakpointsCollection,
    "width" | "maxWidth" | "height" | "maxHeight"
  >;

export type ModalContainerProps = ReactNodeChildren &
  FlexContainerProps &
  BookmarkModalStyleProps;

const ModalContainerStyle = styled(FlexContainer)<BookmarkModalStyleProps>(
  ({
    height,
    maxHeight,
    maxWidth,
    width,
    borderRadius = "6px",
    backgroundColor = "#ffffff",
    zIndex = ZINDEX.bgFilterContent,
    top = "50%",
    left = "50%",
    transform = "translate(-50%, -50%)",
    boxShadow,
  }) => {
    const styleByBreakpoint = createStyledCompStyleByBreakpoint({
      height,
      width,
      maxWidth,
      maxHeight,
    });

    return {
      position: "fixed",
      top,
      left,
      transform,
      zIndex,
      borderRadius,
      backgroundColor,
      boxShadow,
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

const ModalContainer = ({ children, ...props }: ModalContainerProps) => {
  return <ModalContainerStyle {...props}>{children}</ModalContainerStyle>;
};

export default ModalContainer;
