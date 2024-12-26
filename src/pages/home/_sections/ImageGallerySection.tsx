import React from "react";
import { useErrorBoundary } from "react-error-boundary";
import BookmarkImage from "@/components/bookmark/image/BookmarkImage";
import GridContainer from "@/components/container/grid/GridContainer";
import BookmarkModal from "@/components/bookmark/modal/BookmarkModal";
import useOnOffState from "@/hooks/data/useOnOffState";
import useSusQueryGallery from "@/hooks/query/gallery/useSusQueryGallery";
import { PAGE_HOME_STYLE } from "@/pages/home/_const/style";
import useBookmarkQuery from "@/hooks/query/bookmark/useBookmarkQuery";

const testArry = [{ id: "1" }, { id: "2" }, { id: "3" }];

const ImageGallerySection = () => {
  const { showBoundary } = useErrorBoundary();

  const { isOn, handleUpdateToOn, handleUpdateToOff } = useOnOffState();

  const { data: imageList } = useSusQueryGallery();

  const { data: bookmarkList } = useBookmarkQuery();

  const handleImageClick = (src: string) => () => {
    console.log(" ::: image click ::: ");
    handleUpdateToOn();
  };

  const handleLikeClick =
    (src: string) => (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      e.stopPropagation();
      console.log(" ::: like click ::: ");
    };

  console.log({ imageList, bookmarkList });
  return (
    <>
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
        {testArry.map((image) => (
          <BookmarkImage
            key={image.id}
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
