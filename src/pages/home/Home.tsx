import { ErrorBoundary } from "react-error-boundary";
import { Suspense } from "react";
import ImageGallerySection from "@/pages/home/_sections/ImageGallerySection";
import ImageSearchSection from "@/pages/home/_sections/ImageSearchSection";
import ImageGellerySkeleton from "@/pages/home/_fallbacks/ImageGellerySkeleton";
import ImageGalleryErrorFallback from "@/pages/home/_fallbacks/ImageGalleryErrorFallback";
import PageContainer from "@/components/container/page/PageContainer";

const Home = () => {
  return (
    <PageContainer rowGap={{ sm: "40px" }}>
      <ImageSearchSection />
      <ErrorBoundary FallbackComponent={ImageGalleryErrorFallback}>
        <Suspense fallback={<ImageGellerySkeleton skeletonNumber={3} />}>
          <ImageGallerySection />
        </Suspense>
      </ErrorBoundary>
    </PageContainer>
  );
};

export default Home;
