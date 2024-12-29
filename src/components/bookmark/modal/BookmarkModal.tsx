import { useTheme } from "@emotion/react";
import BookmarkModalDetails from "@/components/bookmark/modal/BookmarkModalDetails";
import BookmarkModalHead from "@/components/bookmark/modal/BookmarkModalHead";
import BookmarkModelBody from "@/components/bookmark/modal/BookmarkModelBody";
import FullscreenFilter from "@/components/filter/fullscreen/FullscreenFilter";
import ModalContainer from "@/components/modal/base/ModalContainer";
import type { BookmarkModalProps } from "@/components/bookmark/types";

const BookmarkModal = ({
  selectedImageInfo,
  onClose,
  onLikeClick,
  ...props
}: BookmarkModalProps) => {
  const theme = useTheme();

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
          isBookmarked={false}
          selectedImageInfo={selectedImageInfo}
          onClose={onClose}
          onLikeClick={onLikeClick}
        />
        <BookmarkModelBody selectedImageInfo={selectedImageInfo} />
        <BookmarkModalDetails selectedImageInfo={selectedImageInfo} />
      </ModalContainer>
    </>
  );
};

export default BookmarkModal;
