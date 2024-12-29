import { useTheme } from "@emotion/react";
import BookmarkModalDetails from "@/features/bookmark/_components/modal/BookmarkModalDetails";
import BookmarkModalHead from "@/features/bookmark/_components/modal/BookmarkModalHead";
import BookmarkModelBody from "@/features/bookmark/_components/modal/BookmarkModelBody";
import FullscreenFilter from "@/components/filter/fullscreen/FullscreenFilter";
import ModalContainer from "@/components/modal/base/ModalContainer";
import type { BookmarkModalProps } from "@/features/bookmark/types";

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
