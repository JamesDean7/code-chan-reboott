import styled from "@emotion/styled";
import { MEDIA_MIN_WIDTH } from "@/theme/breakpoints";
import type { ReactNodeChildren } from "@/types/lib-react";
import type {
  CSSStyleProperties,
  PartialStylePropsByBreakpointsCollection,
  StyledComponentElementStyleCollection,
} from "@/types/styles";
import type { OmitByKey } from "@/types/utils";
import { createStyledCompStyleByBreakpoint } from "@/utils/style/style";
import { customShouldForwardProp } from "@/utils/verify/verify";
import type { SvgElementAttribute } from "@/types/element";

type SvgElementStyleProps = Pick<CSSStyleProperties, "stroke" | "fill"> &
  Pick<StyledComponentElementStyleCollection, "elementWidth" | "elementHeight">;

export type SvgElementProps = ReactNodeChildren &
  Pick<PartialStylePropsByBreakpointsCollection, "width" | "height"> &
  OmitByKey<SvgElementStyleProps, "elementHeight" | "elementWidth"> &
  OmitByKey<SvgElementAttribute, "height" | "width">;

const SvgElementStyle = styled("svg", {
  shouldForwardProp: (propName) =>
    customShouldForwardProp({ preventTarget: "common", propName }),
})<SvgElementStyleProps>(({ elementHeight, elementWidth }) => {
  const styleByBreakpoint = createStyledCompStyleByBreakpoint({
    height: elementHeight,
    width: elementWidth,
  });
  return {
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
});

const SvgElement = ({
  children,
  width = { sm: "24px" },
  height = { sm: "24px" },
  ...rest
}: SvgElementProps) => {
  return (
    <SvgElementStyle elementHeight={height} elementWidth={width} {...rest}>
      {children}
    </SvgElementStyle>
  );
};

export default SvgElement;
