import React, { useState } from "react";
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
import { useSusGalleryList } from "@/hooks/query/gallery/useGallerySusQuery";

const ImageGallerySection = () => {
  const { isOn, handleUpdateToOn, handleUpdateToOff } = useOnOffState();

  const { data: imageList } = useSusGalleryList();

  const { data: bookmarkList } = useSusBookmarkList();

  const { data, error, fetchNextPage, hasNextPage } = useSuspenseInfiniteQuery({
    queryKey: ["testKey"],
    queryFn: async ({ pageParam }) => {
      console.log({ pageParam });
      return await getGalleryImageList();
    },
    initialPageParam: 0,
    getNextPageParam: (fetchedData, allFetchedData, currentPageCursor) =>
      currentPageCursor + 1,
  });

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

  const handleImageClick = (imageInfo: GalleryImage) => () => {
    console.log(" ::: image click ::: ");
    console.log({ imageInfo });
    handleUpdateToOn();
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

  console.log({ data, hasNextPage });

  return (
    <>
      <button
        onClick={() => {
          fetchNextPage();
        }}
      >
        Fetch more
      </button>
      <GridContainer
        margin={PAGE_HOME_STYLE.gallery.container.margin}
        maxWidth={PAGE_HOME_STYLE.gallery.container.maxWidth}
        padding={PAGE_HOME_STYLE.gallery.container.padding}
        columnGap={PAGE_HOME_STYLE.gallery.container.columnGap}
        rowGap={PAGE_HOME_STYLE.gallery.container.rowGap}
        gridTemplateColumns={
          PAGE_HOME_STYLE.gallery.container.gridTemplateColumns
        }
      >
        {imageList.map((image) => (
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
      {isOn && (
        <BookmarkModal
          width={{ sm: "80%", lg: "50%" }}
          onClose={handleUpdateToOff}
        />
      )}
    </>
  );
};

export default ImageGallerySection;
