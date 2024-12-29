import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import FlexColumnContainer from "@/components/container/flex/FlexColumnContainer";
import HorizontalDivider from "@/components/divider/horizontal/HorizontalDivider";
import Typography from "@/components/typography/base/Typography";
import BookmarkListSection from "@/pages/bookmark/_sections/BookmarkListSection";
import PageContainer from "@/components/container/page/PageContainer";
import BookmarkGalleryErrorFallback from "@/features/bookmark/_fallback/BookmarkGalleryErrorFallback";
import BookmarkGallerySkeleton from "@/features/bookmark/_fallback/BookmarkGallerySkeleton";

const Bookmark = () => {
  return (
    <PageContainer rowGap={{ sm: "40px" }}>
      <FlexColumnContainer
        rowGap={{ sm: "20px" }}
        justifyContent="center"
        alignItems="center"
      >
        <Typography fontSize={{ sm: "h1" }} fontWeight="bold">
          북마크
        </Typography>
        <HorizontalDivider />
      </FlexColumnContainer>
      <ErrorBoundary FallbackComponent={BookmarkGalleryErrorFallback}>
        <Suspense fallback={<BookmarkGallerySkeleton />}>
          <BookmarkListSection />
        </Suspense>
      </ErrorBoundary>
    </PageContainer>
  );
};

export default Bookmark;
