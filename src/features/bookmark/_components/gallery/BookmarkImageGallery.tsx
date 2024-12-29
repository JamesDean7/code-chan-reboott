import { useCallback } from "react";
import { GalleryImage } from "@/api/gallery/types";
import BookmarkImageGalleryContainer from "@/features/bookmark/_components/gallery/BookmarkImageGalleryContainer";
import BookmarkImage from "@/features/bookmark/_components/image/BookmarkImage";
import BookmarkModal from "@/features/bookmark/_components/modal/BookmarkModal";
import useSelectedBookmarkImage from "@/features/bookmark/_hooks/useSelectedBookmarkImage";
import { BookmarkImageProps } from "@/features/bookmark/types";
import useOnOffState from "@/hooks/data/useOnOffState";
import { PAGE_BOOKMARK_STYLE_GALLERY_IMAGE } from "@/pages/bookmark/_const/styles";
import {
  useBookmarkAddition,
  useBookmarkDeletion,
} from "@/hooks/query/bookmark/useBookmarkMutation";
import { createQueryKey } from "@/utils/format/format";
import { QUERY_KEY } from "@/const/constraint/constraint";

type BookmarkImageGalleryProps = {
  imageList: GalleryImage[];
  bookmarkedList: GalleryImage[];
};

const BookmarkImageGallery = ({
  imageList,
  bookmarkedList,
}: BookmarkImageGalleryProps) => {
  const { selectedImageInfo, handleSelectedImageInfoUpdate } =
    useSelectedBookmarkImage();

  const {
    isOn: isModalOpen,
    handleUpdateToOn: handleModalOpen,
    handleUpdateToOff: handleModalClose,
  } = useOnOffState();

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

  const bookmarkObjById = bookmarkedList.reduce((acc, bookmark) => {
    acc[bookmark.id] = bookmark.imageSrc;
    return acc;
  }, {} as { [x: string]: string });

  return (
    <>
      <BookmarkImageGalleryContainer>
        {imageList.map((image) => (
          <BookmarkImage
            key={image.id}
            imageInfo={image}
            isBookmarked={bookmarkObjById[image.id] ? true : false}
            width={PAGE_BOOKMARK_STYLE_GALLERY_IMAGE.width}
            height={PAGE_BOOKMARK_STYLE_GALLERY_IMAGE.height}
            onImageClick={handleImageClick}
            onLikeClick={handleLikeClick}
          />
        ))}
      </BookmarkImageGalleryContainer>
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

export default BookmarkImageGallery;
