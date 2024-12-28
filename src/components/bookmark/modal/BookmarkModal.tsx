import { useTheme } from "@emotion/react";
import BookmarkModalDetails from "@/components/bookmark/modal/BookmarkModalDetails";
import BookmarkModalHead, {
  type BookmarkModalHeadProps,
} from "@/components/bookmark/modal/BookmarkModalHead";
import BookmarkModelBody from "@/components/bookmark/modal/BookmarkModelBody";
import BackgroundFilter from "@/components/filter/background/BackgroundFilter";
import type { ModalContainerProps } from "@/components/modal/base/ModalContainer";
import ModalContainer from "@/components/modal/base/ModalContainer";

type BookmarkModalProps = ModalContainerProps &
  Pick<BookmarkModalHeadProps, "onClose"> & { isOpen: boolean };

const BookmarkModal = ({ isOpen, onClose, ...props }: BookmarkModalProps) => {
  const theme = useTheme();

  if (!isOpen) return <></>;

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
        <BookmarkModalHead
          userImage="/test.jpg"
          userName="James Memory"
          onClose={onClose}
        />
        <BookmarkModelBody
          imageName="test image"
          imageSrc="/test.jpg"
          imageHeight={300}
          imageWidth={200}
        />
        <BookmarkModalDetails
          imageWidth={300}
          imageHeight={200}
          downloads={100}
          updateDate="2024-12-10"
          tags={["test", "test2"]}
        />
      </ModalContainer>
    </>
  );
};

export default BookmarkModal;
