import { memo, ReactHTML } from "react";
import styled from "@emotion/styled";
import {
  AppThemeTypographySizeKeys,
  AppThemeTypographyWeightKeys,
  PartialStyleByBreakpoints,
} from "@/theme/types";
import { ReactNodeChildren } from "@/types/lib-react";
import { ExtractByKey } from "@/types/utils";
import { CSSStyleProperties } from "@/types/styles";
import { MEDIA_MIN_WIDTH } from "@/theme/breakpoints";
import { getStyleByBreakpoints } from "@/utils/style/style";
import {
  getThemeTypographySize,
  getThemeTypographyWeight,
} from "@/utils/theme/theme";

type TypographyComponentProps = {
  fontSize?: PartialStyleByBreakpoints<AppThemeTypographySizeKeys>;
  fontWeight?: AppThemeTypographyWeightKeys;
} & Pick<CSSStyleProperties, "color" | "lineHeight">;

type TypographyComponentOptions = ExtractByKey<
  keyof ReactHTML,
  "h1" | "h2" | "h3" | "h4" | "h5" | "p" | "span" | "div"
>;

type TypographyProps = ReactNodeChildren &
  TypographyComponentProps & {
    component?: TypographyComponentOptions;
  };

const Typography = ({ children, component, ...props }: TypographyProps) => {
  const TypographyComponent = styled(
    component ?? "p"
  )<TypographyComponentProps>(
    ({ fontSize, fontWeight = "normal", color = "#000000", lineHeight }) => {
      const resFontSize = getStyleByBreakpoints<AppThemeTypographySizeKeys>({
        style: fontSize ?? { sm: "body1" },
        defaultVal: "body1",
      });
      return {
        fontSize: getThemeTypographySize(resFontSize.sm),
        fontWeight: getThemeTypographyWeight(fontWeight),
        color,
        lineHeight,
        [MEDIA_MIN_WIDTH.md]: {
          fontSize: getThemeTypographySize(resFontSize.md),
        },
        [MEDIA_MIN_WIDTH.lg]: {
          fontSize: getThemeTypographySize(resFontSize.lg),
        },
        [MEDIA_MIN_WIDTH.xl]: {
          fontSize: getThemeTypographySize(resFontSize.xl),
        },
      };
    }
  );

  return <TypographyComponent {...props}>{children}</TypographyComponent>;
};

export default memo(Typography);
