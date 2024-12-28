import React, { useCallback } from "react";
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
import type { GalleryImage } from "@/api/gallery/types";
import { createQueryKey } from "@/utils/format/format";
import { QUERY_KEY } from "@/const/constraint/constraint";
import useScrollBottomDetect from "@/hooks/event/useScrollBottomDetect";
import ImageGellerySkeleton from "@/pages/home/_fallbacks/ImageGellerySkeleton";
import { useSusInfiniteGalleryList } from "@/hooks/query/gallery/useGallerySusQuery";
import useHomePageEffects from "@/pages/home/_hooks/useHomePageEffects";

const ImageGallerySection = () => {
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

  const handleImageClick = useCallback(
    (imageInfo: GalleryImage) => () => {
      handleModalOpen();
    },
    []
  );

  const handleLikeClick = useCallback(
    (imageInfo: GalleryImage, isBookmarked: boolean) =>
      (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
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
    acc[bookmark.id] = bookmark.uri;
    return acc;
  }, {} as { [x: string]: string });

  const imageFlatList = imageList.pages.flat();

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
      {isFetchingNextPage && <ImageGellerySkeleton skeletonNumber={2} />}
      <BookmarkModal
        isOpen={isModalOpen}
        width={{ sm: "80%", lg: "50%" }}
        onClose={handleModalClose}
      />
    </>
  );
};

export default ImageGallerySection;
