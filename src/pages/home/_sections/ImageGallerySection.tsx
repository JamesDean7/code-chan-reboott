import { useSusBookmarkedList } from "@/hooks/query/bookmark/useBookmarkSusQuery";
import useScrollBottomDetect from "@/hooks/event/useScrollBottomDetect";
import { useSusInfiniteGalleryList } from "@/hooks/query/gallery/useGallerySusQuery";
import useHomePageEffects from "@/pages/home/_hooks/useHomePageEffects";
import SimpleSpinner from "@/components/spinner/simple/SimpleSpinner";
import BookmarkImageGallery from "@/features/bookmark/_components/gallery/BookmarkImageGallery";

const ImageGallerySection = () => {
  const { isScrollBottomReached, removeWindowScrollEvent } =
    useScrollBottomDetect({
      detectBuffer: 200,
    });

  const {
    isFetchingNextPage,
    data: imageList,
    fetchNextPage,
    hasNextPage,
  } = useSusInfiniteGalleryList();

  const { data: bookmarkedList } = useSusBookmarkedList();

  useHomePageEffects({
    hasNextPage,
    isFetchingNextPage,
    isScrollBottomReached,
    fetchNextPage,
    removeWindowScrollEvent,
  });

  const imageFlatList = imageList.pages.flat();

  return (
    <>
      <BookmarkImageGallery
        imageList={imageFlatList}
        bookmarkedList={bookmarkedList}
      />
      {isFetchingNextPage && <SimpleSpinner margin={{ sm: "30px auto" }} />}
    </>
  );
};

export default ImageGallerySection;
