import FlexContainer from "@/components/container/flex/FlexContainer";
import { FlexContainerProps } from "@/components/container/types";
import type { OmitByKey } from "@/types/utils";

type FlexRowContainerProps = OmitByKey<FlexContainerProps, "flexDirection">;

const FlexRowContainer = ({
  children,
  alignItems = "center",
  justifyContent = "space-between",
  ...props
}: FlexRowContainerProps) => {
  return (
    <FlexContainer
      flexDirection="row"
      alignItems={alignItems}
      justifyContent={justifyContent}
      {...props}
    >
      {children}
    </FlexContainer>
  );
};

export default FlexRowContainer;
