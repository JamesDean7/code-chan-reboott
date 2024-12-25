import styled from "@emotion/styled";
import { MEDIA_MIN_WIDTH } from "@/theme/breakpoints";
import { ReactNodeChildren } from "@/types/lib-react";
import { StylePropsByBreakpointsCollection } from "@/types/styles";
import { getStyleByBreakpoints } from "@/utils/style";

type GridContainerStyleProps = Partial<
  Pick<
    StylePropsByBreakpointsCollection,
    | "width"
    | "maxWidth"
    | "height"
    | "rowGap"
    | "columnGap"
    | "gridTemplateColumns"
    | "padding"
    | "margin"
  >
>;

const GridContainerStyle = styled.div<GridContainerStyleProps>(
  ({
    width,
    height,
    rowGap,
    columnGap,
    padding,
    gridTemplateColumns,
    maxWidth,
    margin,
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
    const resGridTemplateColumns = getStyleByBreakpoints<string>({
      style: gridTemplateColumns ?? {},
      defaultVal: "repeat(1, 1fr)",
    });
    const resPadding = getStyleByBreakpoints<string>({
      style: padding ?? {},
      defaultVal: "0",
    });
    const resMargin = getStyleByBreakpoints<string>({
      style: margin ?? {},
      defaultVal: "0",
    });
    const resMaxWidth = getStyleByBreakpoints<string>({
      style: maxWidth ?? {},
      defaultVal: "none",
    });

    return {
      display: "grid",
      gridTemplateColumns: resGridTemplateColumns.sm,
      rowGap: resRowGap.sm,
      columnGap: resColumnGap.sm,
      width: resWidth.sm,
      maxWidth: resMaxWidth.sm,
      height: resHeight.sm,
      margin: resMargin.sm,
      padding: resPadding.sm,
      [MEDIA_MIN_WIDTH.md]: {
        width: resWidth.md,
        maxWidth: resMaxWidth.md,
        height: resHeight.md,
        rowGap: resRowGap.md,
        columnGap: resColumnGap.md,
        gridTemplateColumns: resGridTemplateColumns.md,
        margin: resMargin.md,
        padding: resPadding.md,
      },
      [MEDIA_MIN_WIDTH.lg]: {
        width: resWidth.lg,
        maxWidth: resMaxWidth.lg,
        height: resHeight.lg,
        rowGap: resRowGap.lg,
        columnGap: resColumnGap.lg,
        gridTemplateColumns: resGridTemplateColumns.lg,
        margin: resMargin.lg,
        padding: resPadding.lg,
      },
      [MEDIA_MIN_WIDTH.xl]: {
        width: resWidth.xl,
        maxWidth: resMaxWidth.xl,
        height: resHeight.xl,
        rowGap: resRowGap.xl,
        columnGap: resColumnGap.xl,
        gridTemplateColumns: resGridTemplateColumns.xl,
        margin: resMargin.xl,
        padding: resPadding.xl,
      },
    };
  }
);

type GridContainerProps = ReactNodeChildren & GridContainerStyleProps;

const GridContainer = ({ children, ...props }: GridContainerProps) => {
  return <GridContainerStyle {...props}>{children}</GridContainerStyle>;
};

export default GridContainer;
