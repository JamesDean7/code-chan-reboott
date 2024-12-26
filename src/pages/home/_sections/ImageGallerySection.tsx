import React from "react";
import BookmarkImage from "@/components/bookmark/image/BookmarkImage";
import GridContainer from "@/components/container/grid/GridContainer";
import BookmarkModal from "@/components/bookmark/modal/BookmarkModal";
import useOnOffState from "@/hooks/data/useOnOffState";
import useSusQueryGallery from "@/hooks/query/gallery/useSusQueryGallery";
import { PAGE_HOME_STYLE } from "@/pages/home/_const/style";
import { StandardError } from "@/class/error/StandardError";
import { useErrorBoundary } from "react-error-boundary";

const testArry = [1, 2, 3, 4, 5, 6];

const ImageGallerySection = () => {
  console.log(" ::: ImageGallerySection ::: ");

  const { showBoundary } = useErrorBoundary();

  // setTimeout(() => {
  //   showBoundary(
  //     new StandardError({
  //       message: "aa",
  //       original: "ff",
  //       type: "client",
  //       code: "cc",
  //     })
  //   );
  // }, 2000);

  const { isOn, handleUpdateToOn, handleUpdateToOff } = useOnOffState();

  const { data, error } = useSusQueryGallery();

  const handleImageClick = (src: string) => () => {
    console.log(" ::: image click ::: ");
    handleUpdateToOn();
  };

  const handleLikeClick =
    (src: string) => (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      e.stopPropagation();
      console.log(" ::: like click ::: ");
    };

  console.log(" ::: ImageGallerySection RENDER ::: ");
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
