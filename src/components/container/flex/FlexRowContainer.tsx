import FlexContainer, {
  FlexContainerProps,
} from "@/components/container/flex/FlexContainer";
import { OmitByKey } from "@/types/utils";

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
