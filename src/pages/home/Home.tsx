import { ErrorBoundary } from "react-error-boundary";
import { Suspense } from "react";
import FlexColumnContainer from "@/components/container/flex/FlexColumnContainer";
import ImageGallerySection from "@/pages/home/_sections/ImageGallerySection";
import ImageSearchSection from "@/pages/home/_sections/ImageSearchSection";
import ImageGellerySkeleton from "@/pages/home/_fallbacks/ImageGellerySkeleton";
import ImageGalleryErrorFallback from "@/pages/home/_fallbacks/ImageGalleryErrorFallback";

const Home = () => {
  return (
    <FlexColumnContainer alignItems="stretch" rowGap={{ sm: "20px" }}>
      <ImageSearchSection />
      <ErrorBoundary FallbackComponent={ImageGalleryErrorFallback}>
        <Suspense fallback={<ImageGellerySkeleton skeletonNumber={3} />}>
          <ImageGallerySection />
        </Suspense>
      </ErrorBoundary>
    </FlexColumnContainer>
  );
};

export default Home;
