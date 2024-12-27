import { memo, ReactHTML } from "react";
import styled from "@emotion/styled";
import { PartialAppThemeCollection } from "@/theme/types";
import { ReactNodeChildren } from "@/types/lib-react";
import { ExtractByKey } from "@/types/utils";
import {
  CSSStyleProperties,
  PartialStylePropsByBreakpointsCollection,
} from "@/types/styles";
import { MEDIA_MIN_WIDTH } from "@/theme/breakpoints";
import { createStyledCompStyleByBreakpoint } from "@/utils/style/style";
import { getThemeTypographyWeight } from "@/utils/theme/theme";
import { customShouldForwardProp } from "@/utils/verify/verify";

type TypographyComponentProps = Pick<
  CSSStyleProperties,
  "color" | "lineHeight" | "position" | "top" | "left" | "bottom" | "right"
> &
  Pick<PartialStylePropsByBreakpointsCollection, "fontSize"> &
  Pick<PartialAppThemeCollection, "fontWeight">;

type TypographyComponentOptions = ExtractByKey<
  keyof ReactHTML,
  "h1" | "h2" | "h3" | "h4" | "h5" | "p" | "span" | "div"
>;

export type TypographyProps = ReactNodeChildren &
  TypographyComponentProps & {
    element?: TypographyComponentOptions;
  };

const TypographyComponent = styled("p", {
  shouldForwardProp: (propName) =>
    customShouldForwardProp({ preventTarget: "common", propName }),
})<TypographyComponentProps>(
  ({
    fontSize,
    fontWeight = "normal",
    color = "#000000",
    lineHeight,
    position,
    top,
    left,
    right,
    bottom,
  }) => {
    const styleByBreakpoint = createStyledCompStyleByBreakpoint({
      fontSize,
    });

    return {
      fontWeight: getThemeTypographyWeight(fontWeight),
      color,
      lineHeight,
      position,
      top,
      left,
      right,
      bottom,
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

const Typography = ({ children, element, ...props }: TypographyProps) => {
  return (
    <TypographyComponent as={element} {...props}>
      {children}
    </TypographyComponent>
  );
};

export default memo(Typography);
