import styled from "@emotion/styled";
import { DividerProps, DividerStyleProps } from "@/components/divider/types";

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
