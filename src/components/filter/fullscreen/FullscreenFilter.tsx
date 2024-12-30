import styled from "@emotion/styled";
import Filter from "@/components/filter/base/Filter";
import type { FilterProps } from "@/components/filter/types";

type FullscreenFilterProps = FilterProps;

const FullscreenFilterStyle = styled(Filter)({
  position: "fixed",
});

const FullscreenFilter = ({ children, ...rest }: FullscreenFilterProps) => {
  return <FullscreenFilterStyle {...rest}>{children}</FullscreenFilterStyle>;
};

export default FullscreenFilter;
