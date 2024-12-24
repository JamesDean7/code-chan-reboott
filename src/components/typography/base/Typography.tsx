import { memo, ReactHTML } from "react";
import styled from "@emotion/styled";
import {
  AppThemeTypographySizeKeys,
  AppThemeTypographyWeightKeys,
} from "@/theme/types";
import { ReactNodeChildren } from "@/types/lib-react";
import { ExtractByKey } from "@/types/utils";
import {
  getThemeTypographySize,
  getThemeTypographyWeight,
} from "@/utils/theme";
import { CSSStyleProperties } from "@/types/styles";

type TypographyComponentProps = {
  size?: AppThemeTypographySizeKeys;
  weight?: AppThemeTypographyWeightKeys;
} & Pick<CSSStyleProperties, "color" | "lineHeight">;

type TypographyComponentOptions = ExtractByKey<
  keyof ReactHTML,
  "h1" | "h2" | "h3" | "h4" | "h5" | "p" | "span" | "div"
>;

type Props = ReactNodeChildren &
  TypographyComponentProps & {
    component?: TypographyComponentOptions;
  };

const Typography = ({ children, component, ...props }: Props) => {
  const TypographyComponent = styled(
    component ?? "p"
  )<TypographyComponentProps>(
    ({ size = "body1", weight = "normal", color = "#000000", lineHeight }) => ({
      fontSize: getThemeTypographySize(size),
      fontWeight: getThemeTypographyWeight(weight),
      color,
      lineHeight,
    })
  );
  return <TypographyComponent {...props}>{children}</TypographyComponent>;
};

export default memo(Typography);
