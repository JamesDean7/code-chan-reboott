import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import FlexColumnContainer from "@/components/container/flex/FlexColumnContainer";
import HorizontalDivider from "@/components/divider/horizontal/HorizontalDivider";
import Typography from "@/components/typography/base/Typography";
import BookmarkListErrorFallback from "@/pages/bookmark/_fallbacks/BookmarkListErrorFallback";
import BookmarkListSkeleton from "@/pages/bookmark/_fallbacks/BookmarkListSkeleton";
import BookmarkListSection from "@/pages/bookmark/_sections/BookmarkListSection";

const Bookmark = () => {
  return (
    <FlexColumnContainer rowGap={{ sm: "60px" }} alignItems="stretch">
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
    </FlexColumnContainer>
  );
};

export default Bookmark;
