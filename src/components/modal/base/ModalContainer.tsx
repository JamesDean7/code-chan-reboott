import styled from "@emotion/styled";
import {
  CSSStyleProperties,
  PartialStylePropsByBreakpointsCollection,
} from "@/types/styles";
import { ZINDEX } from "@/const/style/style";
import { MEDIA_MIN_WIDTH } from "@/theme/breakpoints";
import { ReactNodeChildren } from "@/types/lib-react";
import FlexContainer, {
  FlexContainerProps,
} from "@/components/container/flex/FlexContainer";
import { PREVENT_FOWARD_PROP } from "@/const/constraint/constraint";
import { createStyledCompStyleByBreakpoint } from "@/utils/style/style";
import { customShouldForwardProp } from "@/utils/verify/verify";
import isPropValid from "@emotion/is-prop-valid";

type BookmarkModalStyleProps = Pick<
  CSSStyleProperties,
  "borderRadius" | "backgroundColor" | "zIndex" | "top" | "left" | "transform"
> &
  Pick<
    PartialStylePropsByBreakpointsCollection,
    "width" | "maxWidth" | "height" | "maxHeight"
  >;

const ModalContainerStyle = styled(FlexContainer, {
  shouldForwardProp: (propName) =>
    customShouldForwardProp({ preventTarget: "modalContainer", propName }),
})<BookmarkModalStyleProps>(
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

export type ModalContainerProps = ReactNodeChildren &
  FlexContainerProps &
  BookmarkModalStyleProps;

const ModalContainer = ({ children, ...props }: ModalContainerProps) => {
  console.log({ ModalContainerStyle });
  return <ModalContainerStyle {...props}>{children}</ModalContainerStyle>;
};

export default ModalContainer;
