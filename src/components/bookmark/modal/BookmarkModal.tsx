import BookmarkModalDetails from "@/components/bookmark/modal/BookmarkModalDetails";
import BookmarkModalHead, {
  type BookmarkModalHeadProps,
} from "@/components/bookmark/modal/BookmarkModalHead";
import BookmarkModelBody from "@/components/bookmark/modal/BookmarkModelBody";
import BackgroundFilter from "@/components/filter/background/BackgroundFilter";
import type { ModalContainerProps } from "@/components/modal/base/ModalContainer";
import ModalContainer from "@/components/modal/base/ModalContainer";
import { useTheme } from "@emotion/react";

type BookmarkModalProps = ModalContainerProps &
  BookmarkModalHeadProps & { isOpen: boolean };

const BookmarkModal = ({ isOpen, onClose, ...props }: BookmarkModalProps) => {
  const theme = useTheme();
  // if (!isOpen) return <></>;

  return (
    <>
      <BackgroundFilter onClick={onClose} />
      <ModalContainer
        flexDirection="column"
        alignItems="stretch"
        padding={{ sm: "20px" }}
        rowGap={{ sm: "20px" }}
        boxShadow={theme.shadow.medium}
        {...props}
      >
        <BookmarkModalHead onClose={onClose} />
        <BookmarkModelBody />
        <BookmarkModalDetails />
      </ModalContainer>
    </>
  );
};

export default BookmarkModal;
