import React, { useEffect } from "react";
import BookmarkImage from "@/components/bookmark/image/BookmarkImage";
import GridContainer from "@/components/container/grid/GridContainer";
import BookmarkModal from "@/components/bookmark/modal/BookmarkModal";
import useOnOffState from "@/hooks/data/useOnOffState";
import { PAGE_HOME_STYLE } from "@/pages/home/_const/style";
import { useSusBookmarkList } from "@/hooks/query/bookmark/useBookmarkSusQuery";
import {
  useBookmarkAddition,
  useBookmarkDeletion,
} from "@/hooks/query/bookmark/useBookmarkMutation";
import { GalleryImage } from "@/api/gallery/types";
import { createQueryKey } from "@/utils/format/format";
import { QUERY_KEY } from "@/const/constraint/constraint";
import { useSuspenseInfiniteQuery } from "@tanstack/react-query";
import { getGalleryImageList } from "@/api/gallery/gallery";
import useScrollBottomDetect from "@/hooks/event/useScrollBottomDetect";
import ImageGellerySkeleton from "@/pages/home/_fallbacks/ImageGellerySkeleton";
import {
  useSusGalleryList,
  useSusInfiniteGalleryList,
} from "@/hooks/query/gallery/useGallerySusQuery";
import BookmarkImagSkeleton from "@/components/bookmark/image/BookmarkImagSkeleton";
import { useBaseSuspenseInfiniteQuery } from "@/hooks/query/base/useBaseInfiniteQuery";
import useHomePageEffects from "@/pages/home/_hooks/useHomePageEffects";

const ImageGallerySection = () => {
  const {
    isOn: isModalOn,
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

  const handleImageClick = (imageInfo: GalleryImage) => () => {
    handleModalOpen();
  };

  const handleLikeClick =
    (imageInfo: GalleryImage, isBookmarked: boolean) =>
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      e.stopPropagation();
      if (isBookmarked) {
        asyncRemoveBookmark(imageInfo.id);
        return;
      }
      asyncAddBookmark(imageInfo);
    };

  const bookmarkObjById = bookmarkList.reduce((acc, bookmark) => {
    acc[bookmark.id] = bookmark.uri;
    return acc;
  }, {} as { [x: string]: string });

  const imageFlatList = imageList.pages.flat();

  console.log({ isScrollBottomReached, imageList, hasNextPage });

  return (
    <>
      <button
        onClick={() => {
          if (isModalOn) {
            handleModalClose();
          } else {
            handleModalOpen();
          }
          // removeWindowScrollEvent();
        }}
      >
        TEST
      </button>
      <GridContainer
        margin={PAGE_HOME_STYLE.gallery.container.margin}
        width={PAGE_HOME_STYLE.gallery.container.width}
        maxWidth={PAGE_HOME_STYLE.gallery.container.maxWidth}
        padding={PAGE_HOME_STYLE.gallery.container.padding}
        columnGap={PAGE_HOME_STYLE.gallery.container.columnGap}
        rowGap={PAGE_HOME_STYLE.gallery.container.rowGap}
        gridTemplateColumns={
          PAGE_HOME_STYLE.gallery.container.gridTemplateColumns
        }
      >
        {imageFlatList.map((image) => (
          <BookmarkImage
            key={image.id}
            imageInfo={image}
            isBookmarked={bookmarkObjById[image.id] ? true : false}
            width={PAGE_HOME_STYLE.gallery.image.width}
            height={PAGE_HOME_STYLE.gallery.image.height}
            onImageClick={handleImageClick}
            onLikeClick={handleLikeClick}
          />
        ))}
      </GridContainer>
      {isFetchingNextPage && <ImageGellerySkeleton skeletonNumber={2} />}

      {isModalOn && (
        <BookmarkModal
          width={{ sm: "80%", lg: "50%" }}
          onClose={handleModalClose}
        />
      )}
    </>
  );
};

export default ImageGallerySection;
