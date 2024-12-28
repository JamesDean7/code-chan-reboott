import styled from "@emotion/styled";
import type { CSSStyleProperties } from "@/types/styles";

type DividerStyleProps = Pick<
  CSSStyleProperties,
  "backgroundColor" | "width" | "height"
>;

const DividerStyle = styled("div")<DividerStyleProps>(
  ({ theme, width, height, backgroundColor }) => {
    return {
      width,
      height,
      backgroundColor: backgroundColor ?? theme.palette.gray.light,
    };
  }
);

export type DividerProps = DividerStyleProps;

const Divider = ({ ...props }: DividerProps) => {
  return <DividerStyle {...props} />;
};

export default Divider;
