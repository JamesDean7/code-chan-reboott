import type { BookmarkModalSelectedImageInfoProp } from "@/features/bookmark/types";
import FlexRowContainer from "@/components/container/flex/FlexRowContainer";
import Image from "@/components/image/base/Image";

type BookmarkModelBodyProps = BookmarkModalSelectedImageInfoProp;

const BookmarkModelBody = ({ selectedImageInfo }: BookmarkModelBodyProps) => {
  const { imageName, imageSrc, imageHeight, imageWidth } = selectedImageInfo;

  const isHorizontalImage = imageWidth > imageHeight;

  return (
    <FlexRowContainer justifyContent="center">
      {isHorizontalImage && (
        <Image
          src={imageSrc}
          alt={imageName}
          maxWidth={{ sm: "90%" }}
          maxHeight={{ sm: "60vh" }}
          width={{ sm: "400px", md: "500px", lg: "600px" }}
          height={{ sm: "300px", md: "400px", lg: "500px" }}
        />
      )}
      {!isHorizontalImage && (
        <Image
          src={imageSrc}
          alt={imageName}
          maxWidth={{ sm: "90%" }}
          maxHeight={{ sm: "60vh" }}
          width={{ sm: "300px", md: "400px", lg: "500px" }}
          height={{ sm: "400px", md: "500px", lg: "600px" }}
        />
      )}
    </FlexRowContainer>
  );
};

export default BookmarkModelBody;
