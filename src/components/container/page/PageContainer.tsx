import FlexContainer from "@/components/container/flex/FlexContainer";
import { FlexContainerProps } from "@/components/container/types";

type PageContainerProps = FlexContainerProps;

const PageContainer = ({
  children,
  minHeight = { sm: "70vh" },
  flexDirection = "column",
  justifyContent = "flex-start",
  alignItems = "stretch",
  ...rest
}: PageContainerProps) => {
  return (
    <FlexContainer
      flexDirection={flexDirection}
      justifyContent={justifyContent}
      alignItems={alignItems}
      minHeight={minHeight}
      {...rest}
    >
      {children}
    </FlexContainer>
  );
};

export default PageContainer;
