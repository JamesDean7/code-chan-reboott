import React from "react";
import BookmarkImage from "@/components/bookmark/image/BookmarkImage";
import GridContainer from "@/components/container/grid/GridContainer";
import BookmarkModal from "@/components/bookmark/modal/BookmarkModal";
import useOnOffState from "@/hooks/data/useOnOffState";

const ImageGallery = () => {
  const { isOn, handleUpdateToOn, handleUpdateToOff } = useOnOffState();

  const handleImageClick = (src: string) => () => {
    console.log(" ::: image click ::: ");
    handleUpdateToOn();
  };

  const handleLikeClick =
    (src: string) => (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      e.stopPropagation();
      console.log(" ::: like click ::: ");
    };

  return (
    <>
      <GridContainer
        margin={{ sm: "0", xl: "0 auto" }}
        maxWidth={{ sm: "none", xl: "1200px" }}
        padding={{ sm: "0 20px" }}
        columnGap={{ sm: "10px", md: "20px", lg: "30px" }}
        rowGap={{ sm: "10px", md: "20px", lg: "30px" }}
        gridTemplateColumns={{
          sm: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
      >
        <BookmarkImage
          onImageClick={handleImageClick}
          onLikeClick={handleLikeClick}
        />
        <BookmarkImage
          onImageClick={handleImageClick}
          onLikeClick={handleLikeClick}
        />
        <BookmarkImage
          onImageClick={handleImageClick}
          onLikeClick={handleLikeClick}
        />
        <BookmarkImage
          onImageClick={handleImageClick}
          onLikeClick={handleLikeClick}
        />
        <BookmarkImage
          onImageClick={handleImageClick}
          onLikeClick={handleLikeClick}
        />
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

export default ImageGallery;
