import styled from "@emotion/styled";
import { ReactNodeChildren } from "@/types/lib-react";
import { ElementClassName } from "@/types/element";
import {
  CSSStyleProperties,
  ResponsiveStylePropsCollection,
} from "@/types/styles";
import { getStyleByBreakpoints } from "@/utils/style";
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
      ResponsiveStylePropsCollection,
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
    const resWidth = getStyleByBreakpoints<string>({
      style: width ?? {},
      defaultVal: "auto",
    });
    const resHeight = getStyleByBreakpoints<string>({
      style: height ?? {},
      defaultVal: "auto",
    });
    const resRowGap = getStyleByBreakpoints<string>({
      style: rowGap ?? {},
      defaultVal: "0",
    });
    const resColumnGap = getStyleByBreakpoints<string>({
      style: columnGap ?? {},
      defaultVal: "0",
    });
    return {
      display: "flex",
      position,
      flex,
      flexDirection,
      flexWrap,
      justifyContent,
      alignItems,
      rowGap: resRowGap.sm,
      columnGap: resColumnGap.sm,
      width: resWidth.sm,
      height: resHeight.sm,
      [MEDIA_MIN_WIDTH.md]: {
        width: resWidth.md,
        height: resHeight.md,
        rowGap: resRowGap.md,
        columnGap: resColumnGap.md,
      },
      [MEDIA_MIN_WIDTH.lg]: {
        width: resWidth.lg,
        height: resHeight.lg,
        rowGap: resRowGap.lg,
        columnGap: resColumnGap.lg,
      },
      [MEDIA_MIN_WIDTH.xl]: {
        width: resWidth.xl,
        height: resHeight.xl,
        rowGap: resRowGap.xl,
        columnGap: resColumnGap.xl,
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
