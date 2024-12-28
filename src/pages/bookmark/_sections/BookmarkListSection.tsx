import { useCallback } from "react";
import type { GalleryImage } from "@/api/gallery/types";
import BookmarkImage from "@/components/bookmark/image/BookmarkImage";
import BookmarkModal from "@/components/bookmark/modal/BookmarkModal";
import GridContainer from "@/components/container/grid/GridContainer";
import { QUERY_KEY } from "@/const/constraint/constraint";
import useOnOffState from "@/hooks/data/useOnOffState";
import { useBookmarkDeletion } from "@/hooks/query/bookmark/useBookmarkMutation";
import { useSusBookmarkList } from "@/hooks/query/bookmark/useBookmarkSusQuery";
import {
  PAGE_BOOKMARK_STYLE_GALLERY_CONTAINER,
  PAGE_BOOKMARK_STYLE_GALLERY_IMAGE,
} from "@/pages/bookmark/_const/styles";
import { createQueryKey } from "@/utils/format/format";
import FlexColumnContainer from "@/components/container/flex/FlexColumnContainer";
import Typography from "@/components/typography/base/Typography";
import IconHeart from "@/assets/svg/IconHeart";

const BookmarkListSection = () => {
  const {
    isOn: isModalOn,
    handleUpdateToOn: handleModalOpen,
    handleUpdateToOff: handleModalClose,
  } = useOnOffState();

  const { data: bookmarkList } = useSusBookmarkList();

  const { mutateAsync: asyncRemoveBookmark } = useBookmarkDeletion({
    baseInvalidateQueries: {
      queryKey: createQueryKey({
        queryKey: [QUERY_KEY.bookmark.root, QUERY_KEY.bookmark.list],
      }),
    },
  });

  const handleImageClick = useCallback(
    (imageInfo: GalleryImage) => () => {
      handleModalOpen();
    },
    []
  );

  const handleLikeClick = useCallback(
    (imageInfo: GalleryImage) =>
      (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.stopPropagation();
        asyncRemoveBookmark(imageInfo.id);
      },
    []
  );

  const isBookmarkEmpty = bookmarkList.length === 0;

  return (
    <>
      {!isBookmarkEmpty && (
        <GridContainer
          margin={PAGE_BOOKMARK_STYLE_GALLERY_CONTAINER.margin}
          width={PAGE_BOOKMARK_STYLE_GALLERY_CONTAINER.width}
          maxWidth={PAGE_BOOKMARK_STYLE_GALLERY_CONTAINER.maxWidth}
          padding={PAGE_BOOKMARK_STYLE_GALLERY_CONTAINER.padding}
          columnGap={PAGE_BOOKMARK_STYLE_GALLERY_CONTAINER.columnGap}
          rowGap={PAGE_BOOKMARK_STYLE_GALLERY_CONTAINER.rowGap}
          gridTemplateColumns={
            PAGE_BOOKMARK_STYLE_GALLERY_CONTAINER.gridTemplateColumns
          }
        >
          {bookmarkList.map((image) => (
            <BookmarkImage
              key={image.id}
              imageInfo={image}
              isBookmarked={true}
              width={PAGE_BOOKMARK_STYLE_GALLERY_IMAGE.width}
              height={PAGE_BOOKMARK_STYLE_GALLERY_IMAGE.height}
              onImageClick={handleImageClick}
              onLikeClick={handleLikeClick}
            />
          ))}
        </GridContainer>
      )}

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
      {isModalOn && (
        <BookmarkModal
          isOpen={isModalOn}
          width={{ sm: "80%", lg: "50%" }}
          onClose={handleModalClose}
        />
      )}
    </>
  );
};

export default BookmarkListSection;
