import { FallbackProps, useErrorBoundary } from "react-error-boundary";
import Button from "@/components/button/base/Button";
import FlexColumnContainer from "@/components/container/flex/FlexColumnContainer";
import FlexRowContainer from "@/components/container/flex/FlexRowContainer";
import Typography from "@/components/typography/base/Typography";
import { useQueryErrorResetBoundary } from "@tanstack/react-query";
import SimpleErrorScreen from "@/components/error/simple/SimpleErrorScreen";

const ImageGallertyErrorFallback = ({
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

export default ImageGallertyErrorFallback;
