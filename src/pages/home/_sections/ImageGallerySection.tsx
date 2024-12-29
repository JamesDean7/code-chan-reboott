import { useCallback } from "react";
import BookmarkImage from "@/components/bookmark/image/BookmarkImage";
import GridContainer from "@/components/container/grid/GridContainer";
import BookmarkModal from "@/components/bookmark/modal/BookmarkModal";
import useOnOffState from "@/hooks/data/useOnOffState";
import {
  PAGE_HOME_STYLE_GALLERY_CONTAINER,
  PAGE_HOME_STYLE_GALLERY_IMAGE,
} from "@/pages/home/_const/style";
import { useSusBookmarkList } from "@/hooks/query/bookmark/useBookmarkSusQuery";
import {
  useBookmarkAddition,
  useBookmarkDeletion,
} from "@/hooks/query/bookmark/useBookmarkMutation";
import { createQueryKey } from "@/utils/format/format";
import { QUERY_KEY } from "@/const/constraint/constraint";
import useScrollBottomDetect from "@/hooks/event/useScrollBottomDetect";
import { useSusInfiniteGalleryList } from "@/hooks/query/gallery/useGallerySusQuery";
import useHomePageEffects from "@/pages/home/_hooks/useHomePageEffects";
import useSelectedBookmarkImage from "@/components/bookmark/modal/_hooks/useSelectedBookmarkImage";
import type { BookmarkImageProps } from "@/components/bookmark/types";
import SimpleSpinner from "@/components/spinner/simple/SimpleSpinner";

const ImageGallerySection = () => {
  const { selectedImageInfo, handleSelectedImageInfoUpdate } =
    useSelectedBookmarkImage();

  const {
    isOn: isModalOpen,
    handleUpdateToOn: handleModalOpen,
    handleUpdateToOff: handleModalClose,
  } = useOnOffState();

  const { isScrollBottomReached, removeWindowScrollEvent } =
    useScrollBottomDetect({
      detectBuffer: 200,
    });

  const { data: bookmarkList } = useSusBookmarkList();

  const {
    isFetchingNextPage,
    data: imageList,
    fetchNextPage,
    hasNextPage,
  } = useSusInfiniteGalleryList();

  const { mutateAsync: asyncAddBookmark } = useBookmarkAddition({
    baseInvalidateQueries: {
      queryKey: createQueryKey({
        queryKey: [QUERY_KEY.bookmark.root, QUERY_KEY.bookmark.list],
      }),
    },
  });

  const { mutateAsync: asyncRemoveBookmark } = useBookmarkDeletion({
    baseInvalidateQueries: {
      queryKey: createQueryKey({
        queryKey: [QUERY_KEY.bookmark.root, QUERY_KEY.bookmark.list],
      }),
    },
  });

  useHomePageEffects({
    hasNextPage,
    isFetchingNextPage,
    isScrollBottomReached,
    fetchNextPage,
    removeWindowScrollEvent,
  });

  const handleImageClick: BookmarkImageProps["onImageClick"] = useCallback(
    (imageInfo) => () => {
      handleSelectedImageInfoUpdate(imageInfo);
      handleModalOpen();
    },
    []
  );

  const handleLikeClick: BookmarkImageProps["onLikeClick"] = useCallback(
    (imageInfo, isBookmarked) => (e) => {
      e.stopPropagation();
      if (isBookmarked) {
        asyncRemoveBookmark(imageInfo.id);
        return;
      }
      asyncAddBookmark(imageInfo);
    },
    []
  );

  const bookmarkObjById = bookmarkList.reduce((acc, bookmark) => {
    acc[bookmark.id] = bookmark.imageSrc;
    return acc;
  }, {} as { [x: string]: string });

  const imageFlatList = imageList.pages.flat();

  console.log({ isModalOpen, selectedImageInfo });

  return (
    <>
      <GridContainer
        margin={PAGE_HOME_STYLE_GALLERY_CONTAINER.margin}
        width={PAGE_HOME_STYLE_GALLERY_CONTAINER.width}
        maxWidth={PAGE_HOME_STYLE_GALLERY_CONTAINER.maxWidth}
        padding={PAGE_HOME_STYLE_GALLERY_CONTAINER.padding}
        columnGap={PAGE_HOME_STYLE_GALLERY_CONTAINER.columnGap}
        rowGap={PAGE_HOME_STYLE_GALLERY_CONTAINER.rowGap}
        gridTemplateColumns={
          PAGE_HOME_STYLE_GALLERY_CONTAINER.gridTemplateColumns
        }
      >
        {imageFlatList.map((image) => (
          <BookmarkImage
            key={image.id}
            imageInfo={image}
            isBookmarked={bookmarkObjById[image.id] ? true : false}
            width={PAGE_HOME_STYLE_GALLERY_IMAGE.width}
            height={PAGE_HOME_STYLE_GALLERY_IMAGE.height}
            onImageClick={handleImageClick}
            onLikeClick={handleLikeClick}
          />
        ))}
      </GridContainer>
      {isFetchingNextPage && <SimpleSpinner margin={{ sm: "30px auto" }} />}
      {isModalOpen && selectedImageInfo && (
        <BookmarkModal
          width={{ sm: "80%", lg: "50%" }}
          selectedImageInfo={selectedImageInfo}
          onClose={handleModalClose}
          onLikeClick={handleImageClick}
        />
      )}
    </>
  );
};

export default ImageGallerySection;
