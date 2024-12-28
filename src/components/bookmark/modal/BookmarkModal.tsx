import BookmarkModalDetails from "@/components/bookmark/modal/BookmarkModalDetails";
import BookmarkModalHead, {
  type BookmarkModalHeadProps,
} from "@/components/bookmark/modal/BookmarkModalHead";
import BookmarkModelBody from "@/components/bookmark/modal/BookmarkModelBody";
import BackgroundFilter from "@/components/filter/background/BackgroundFilter";
import type { ModalContainerProps } from "@/components/modal/base/ModalContainer";
import ModalContainer from "@/components/modal/base/ModalContainer";

type BookmarkModalProps = ModalContainerProps & BookmarkModalHeadProps;

const BookmarkModal = ({ onClose, ...props }: BookmarkModalProps) => {
  return (
    <>
      <BackgroundFilter />
      <ModalContainer
        flexDirection="column"
        alignItems="stretch"
        padding={{ sm: "20px" }}
        rowGap={{ sm: "20px" }}
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
