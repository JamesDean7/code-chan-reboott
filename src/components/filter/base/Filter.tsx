import styled from "@emotion/styled";
import { ZINDEX } from "@/const/style/style";
import { customShouldForwardProp } from "@/utils/verify/verify";
import { FilterProps, FilterStyleProps } from "@/components/filter/types";

const FilterStyle = styled("div", {
  shouldForwardProp: (propName) =>
    customShouldForwardProp({ preventTarget: "common", propName }),
})<FilterStyleProps>(
  ({
    opacity,
    position = "absolute",
    top = 0,
    left = 0,
    right = 0,
    bottom = 0,
    backgroundColor = "#000000",
  }) => ({
    position,
    top,
    right,
    bottom,
    left,
    backgroundColor,
    opacity,
    zIndex: ZINDEX.bgFilter,
  })
);

const Filter = ({ mode = "dark", opacity = 0.3, children }: FilterProps) => {
  const filterOpacity = mode === "transparent" ? 0 : opacity;
  return <FilterStyle opacity={filterOpacity}>{children}</FilterStyle>;
};

export default Filter;
