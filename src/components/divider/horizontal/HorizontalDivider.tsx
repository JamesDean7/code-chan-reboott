import type { DividerProps } from "@/components/divider/base/Divider";
import Divider from "@/components/divider/base/Divider";
import styled from "@emotion/styled";

type HorizontalDiderProps = Pick<DividerProps, "backgroundColor">;

const HorizontalDividerStyle = styled(Divider)(() => ({}));

const HorizontalDivider = ({ ...props }: HorizontalDiderProps) => {
  return <HorizontalDividerStyle width="100%" height="1px" {...props} />;
};

export default HorizontalDivider;
