import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import FlexColumnContainer from "@/components/container/flex/FlexColumnContainer";
import HorizontalDivider from "@/components/divider/horizontal/HorizontalDivider";
import Typography from "@/components/typography/base/Typography";
import BookmarkListErrorFallback from "@/pages/bookmark/_fallbacks/BookmarkListErrorFallback";
import BookmarkListSkeleton from "@/pages/bookmark/_fallbacks/BookmarkListSkeleton";
import BookmarkListSection from "@/pages/bookmark/_sections/BookmarkListSection";
import PageContainer from "@/components/container/page/PageContainer";

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
      <ErrorBoundary FallbackComponent={BookmarkListErrorFallback}>
        <Suspense fallback={<BookmarkListSkeleton skeletonNumber={3} />}>
          <BookmarkListSection />
        </Suspense>
      </ErrorBoundary>
    </PageContainer>
  );
};

export default Bookmark;
