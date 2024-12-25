import React from "react";
import BookmarkImage from "@/components/bookmark/image/BookmarkImage";
import GridContainer from "@/components/container/grid/GridContainer";
import BookmarkModal from "@/components/bookmark/modal/BookmarkModal";

const ImageGallery = () => {
  const handleImageClick = (src: string) => () => {
    console.log(" ::: image click ::: ");
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
        columnGap={{ sm: "20px" }}
        rowGap={{ sm: "20px" }}
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
      <BookmarkModal
        width={{ sm: "30%", lg: "50%" }}
        height={{ sm: "300px", lg: "650px" }}
      />
    </>
  );
};

export default ImageGallery;
