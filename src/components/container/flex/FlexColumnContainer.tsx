import FlexContainer from "@/components/container/flex/FlexContainer";
import { FlexContainerProps } from "@/components/container/types";
import type { OmitByKey } from "@/types/utils";

type FlexColumnContainerProps = OmitByKey<FlexContainerProps, "flexDirection">;

const FlexColumnContainer = ({
  children,
  justifyContent = "space-between",
  alignItems = "flex-start",
  ...props
}: FlexColumnContainerProps) => {
  return (
    <FlexContainer
      flexDirection="column"
      alignItems={alignItems}
      justifyContent={justifyContent}
      {...props}
    >
      {children}
    </FlexContainer>
  );
};

export default FlexColumnContainer;
