import { useTheme } from "@emotion/react";
import BookmarkModalDetails from "@/features/bookmark/_components/modal/BookmarkModalDetails";
import type { BookmarkModalProps } from "@/features/bookmark/types";
import BookmarkModalHead from "@/features/bookmark/_components/modal/BookmarkModalHead";
import BookmarkModelBody from "@/features/bookmark/_components/modal/BookmarkModelBody";
import FullscreenFilter from "@/components/filter/fullscreen/FullscreenFilter";
import ModalContainer from "@/components/modal/base/ModalContainer";

const BookmarkModal = ({
  selectedImageInfo,
  isBookmarked,
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
          isBookmarked={isBookmarked}
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
