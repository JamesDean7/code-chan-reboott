import styled from "@emotion/styled";
import type { CSSStyleProperties } from "@/types/styles";

type DividerStyleProps = Pick<
  CSSStyleProperties,
  "backgroundColor" | "width" | "height"
>;

export type DividerProps = DividerStyleProps;

const DividerStyle = styled("div")<DividerStyleProps>(
  ({ theme, width, height, backgroundColor }) => {
    return {
      width,
      height,
      backgroundColor: backgroundColor ?? theme.palette.gray.light,
    };
  }
);

const Divider = ({ ...props }: DividerProps) => {
  return <DividerStyle {...props} />;
};

export default Divider;
