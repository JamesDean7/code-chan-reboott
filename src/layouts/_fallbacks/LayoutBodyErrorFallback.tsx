import { FallbackProps } from "react-error-boundary";
import FlexColumnContainer from "@/components/container/flex/FlexColumnContainer";
import SimpleErrorScreen from "@/components/error/simple/SimpleErrorScreen";

const LayoutBodyErrorFallback = ({
  error,
  resetErrorBoundary,
}: FallbackProps) => {
  const handleReset = () => {
    resetErrorBoundary();
  };
  return (
    <FlexColumnContainer
      justifyContent="center"
      alignItems="center"
      height={{ sm: "70vh" }}
    >
      <SimpleErrorScreen
        title="Image Gallery Error"
        message={error.message}
        onReset={handleReset}
      />
    </FlexColumnContainer>
  );
};

export default LayoutBodyErrorFallback;
