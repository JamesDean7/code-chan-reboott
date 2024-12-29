import { useTheme } from "@emotion/react";
import BookmarkModalDetails from "@/features/bookmark/_components/modal/BookmarkModalDetails";
import type {
  BookMarkDetailedInfo,
  BookmarkModalProps,
} from "@/features/bookmark/types";
import BookmarkModalHead from "@/features/bookmark/_components/modal/BookmarkModalHead";
import BookmarkModelBody from "@/features/bookmark/_components/modal/BookmarkModelBody";
import FullscreenFilter from "@/components/filter/fullscreen/FullscreenFilter";
import ModalContainer from "@/components/modal/base/ModalContainer";
import { useSusImageDetail } from "@/hooks/query/gallery/useGallerySusQuery";

const BookmarkModal = ({
  selectedImageInfo,
  isBookmarked,
  onClose,
  onLikeClick,
  ...props
}: BookmarkModalProps) => {
  const { id } = selectedImageInfo;
  const theme = useTheme();
  const { data: unsplashImageDetail } = useSusImageDetail({
    apiPayload: { id },
  });
  const {
    downloads,
    alt_description,
    width,
    height,
    urls: { regular },
    tags,
    created_at,
    user: { profile_image, name },
  } = unsplashImageDetail;

  const imageDetailInfo: BookMarkDetailedInfo = {
    id,
    downloads,
    imageDesc: alt_description,
    imageHeight: height,
    imageWidth: width,
    imageSrc: regular,
    tags: tags.map((tag) => tag.title),
    uploadDate: created_at,
    userImage: profile_image.medium,
    userName: name,
  };

  return (
    <>
      <FullscreenFilter onClick={onClose} />
      <ModalContainer
        flexDirection="column"
        alignItems="stretch"
        padding={{ sm: "20px" }}
        rowGap={{ sm: "20px" }}
        boxShadow={theme.shadow.medium}
        {...props}
      >
        <BookmarkModalHead
          isBookmarked={isBookmarked}
          imageDetailInfo={imageDetailInfo}
          onClose={onClose}
          onLikeClick={onLikeClick}
        />
        <BookmarkModelBody imageDetailInfo={imageDetailInfo} />
        <BookmarkModalDetails imageDetailInfo={imageDetailInfo} />
      </ModalContainer>
    </>
  );
};

export default BookmarkModal;
