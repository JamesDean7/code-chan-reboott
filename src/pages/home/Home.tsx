import { ErrorBoundary } from "react-error-boundary";
import { Suspense } from "react";
import ImageGallerySection from "@/pages/home/_sections/ImageGallerySection";
import ImageSearchSection from "@/pages/home/_sections/ImageSearchSection";
import PageContainer from "@/components/container/page/PageContainer";
import BookmarkGalleryErrorFallback from "@/features/bookmark/_fallback/BookmarkGalleryErrorFallback";
import BookmarkGallerySkeleton from "@/features/bookmark/_fallback/BookmarkGallerySkeleton";

const Home = () => {
  return (
    <PageContainer rowGap={{ sm: "40px" }}>
      <ImageSearchSection />
      <ErrorBoundary FallbackComponent={BookmarkGalleryErrorFallback}>
        <Suspense fallback={<BookmarkGallerySkeleton />}>
          <ImageGallerySection />
        </Suspense>
      </ErrorBoundary>
    </PageContainer>
  );
};

export default Home;
