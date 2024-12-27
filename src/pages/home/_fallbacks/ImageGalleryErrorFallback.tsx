import { FallbackProps } from "react-error-boundary";
import FlexColumnContainer from "@/components/container/flex/FlexColumnContainer";
import { useQueryErrorResetBoundary } from "@tanstack/react-query";
import SimpleErrorScreen from "@/components/error/simple/SimpleErrorScreen";

const ImageGalleryErrorFallback = ({
  error,
  resetErrorBoundary,
}: FallbackProps) => {
  const { reset } = useQueryErrorResetBoundary();
  const handleReset = () => {
    reset();
    resetErrorBoundary();
  };
  return (
    <FlexColumnContainer
      justifyContent="center"
      alignItems="center"
      height={{ sm: "50vh" }}
    >
      <SimpleErrorScreen
        title="Image Gallery Error"
        message={error.message}
        onReset={handleReset}
      />
    </FlexColumnContainer>
  );
};

export default ImageGalleryErrorFallback;
