import { memo, ReactHTML } from "react";
import styled from "@emotion/styled";
import {
  ThemeTypographySizeKeys,
  ThemeTypographyWeightKeys,
} from "@/theme/types";
import { ReactNodeChildren } from "@/types/lib-react";
import { ExtractByKey } from "@/types/utils";
import {
  getThemeTypographySize,
  getThemeTypographyWeight,
} from "@/utils/theme";

type TypographyComponentOptions = ExtractByKey<
  keyof ReactHTML,
  "h1" | "h2" | "h3" | "h4" | "h5" | "p" | "span" | "div"
>;

type Props = ReactNodeChildren & {
  component?: TypographyComponentOptions;
  size?: ThemeTypographySizeKeys;
  weight?: ThemeTypographyWeightKeys;
};

type TypographyComponentProps = Pick<Props, "size" | "weight">;

const Typography = ({ children, component, size, weight }: Props) => {
  const TypographyComponent = styled(
    component ?? "p"
  )<TypographyComponentProps>(({ size, weight }) => ({
    fontSize: getThemeTypographySize(size ?? "body1"),
    fontWeight: getThemeTypographyWeight(weight ?? "normal"),
  }));
  return (
    <TypographyComponent size={size} weight={weight}>
      {children}
    </TypographyComponent>
  );
};

export default memo(Typography);
