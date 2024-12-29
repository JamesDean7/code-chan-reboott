import Filter from "@/components/filter/base/Filter";
import FlexContainer from "@/components/container/flex/FlexContainer";
import { FlexContainerProps } from "@/components/container/types";
import { FilterProps } from "@/components/filter/types";

type FilterContainerProps = FlexContainerProps &
  Pick<FilterProps, "mode"> & {
    onFilterClick?: FilterProps["onClick"];
    filterOpacity?: FilterProps["opacity"];
  };

const FilterContainer = ({
  children,
  mode,
  filterOpacity,
  onFilterClick,
  ...rest
}: FilterContainerProps) => {
  return (
    <FlexContainer position="relative" {...rest}>
      <Filter opacity={filterOpacity} mode={mode} />
      {children}
    </FlexContainer>
  );
};

export default FilterContainer;
