import { memo } from "react";
import styled from "@emotion/styled";
import { MEDIA_MIN_WIDTH } from "@/theme/breakpoints";
import { createStyledCompStyleByBreakpoint } from "@/utils/style/style";
import { getThemeTypographyWeight } from "@/utils/theme/theme";
import { customShouldForwardProp } from "@/utils/verify/verify";
import {
  TypographyComponentProps,
  TypographyProps,
} from "@/components/typography/types";

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
