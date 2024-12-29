import { useSusBookmarkedList } from "@/hooks/query/bookmark/useBookmarkSusQuery";
import FlexColumnContainer from "@/components/container/flex/FlexColumnContainer";
import Typography from "@/components/typography/base/Typography";
import IconHeart from "@/assets/svg/IconHeart";
import BookmarkImageGallery from "@/features/bookmark/_components/gallery/BookmarkImageGallery";

const BookmarkListSection = () => {
  const { data: bookmarkedList } = useSusBookmarkedList();

  const isBookmarkEmpty = bookmarkedList.length === 0;

  return (
    <>
      <BookmarkImageGallery
        imageList={bookmarkedList}
        bookmarkedList={bookmarkedList}
      />
      {isBookmarkEmpty && (
        <FlexColumnContainer
          rowGap={{ sm: "12px" }}
          width={{ sm: "100%" }}
          alignItems="center"
          justifyContent="center"
        >
          <IconHeart width={{ sm: "50px" }} height={{ sm: "50px" }} />
          <Typography fontSize={{ sm: "body1" }}>
            북마크가 비어 있습니다
          </Typography>
        </FlexColumnContainer>
      )}
    </>
  );
};

export default BookmarkListSection;
