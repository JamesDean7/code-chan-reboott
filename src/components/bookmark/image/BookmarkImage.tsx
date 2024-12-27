import { GalleryImage } from "@/api/gallery/types";
import IconHeart from "@/assets/svg/IconHeart";
import FlexRowContainer from "@/components/container/flex/FlexRowContainer";
import HoverContainer from "@/components/container/hover/HoverContainer";
import Image, { ImageProps } from "@/components/image/base/Image";
import useMouseEnter from "@/hooks/event/useMouseEnter";
import { useTheme } from "@emotion/react";

export type BookmarkImageProps = {
  imageInfo: GalleryImage;
  isBookmarked: boolean;
  onImageClick: (imageInfo: GalleryImage) => () => void;
  onLikeClick: (
    imageInfo: GalleryImage,
    isBookmarked: boolean
  ) => (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
} & Pick<ImageProps, "width" | "height">;

const BookmarkImage = ({
  isBookmarked,
  imageInfo,
  height = { sm: "400px", md: "500px" },
  width = { sm: "100%" },
  onImageClick,
  onLikeClick,
}: BookmarkImageProps) => {
  const theme = useTheme();
  const { isMouseEnter, handleMouseEnter, handleMouseLeave } = useMouseEnter();
  const heartColor = isBookmarked
    ? theme.palette.red.main
    : theme.palette.common.white;

  const { uri, id } = imageInfo ?? {};
  return (
    <HoverContainer
      cursor="zoom-in"
      onClick={onImageClick(imageInfo)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <FlexRowContainer
        position="relative"
        justifyContent="flex-end"
        alignItems="flex-end"
      >
        <Image src={uri} alt={uri} width={width} height={height} />
        {isMouseEnter && (
          <HoverContainer
            position="absolute"
            margin={{ sm: "10px" }}
            onClick={onLikeClick(imageInfo, isBookmarked)}
          >
            <IconHeart fill={heartColor} />
          </HoverContainer>
        )}
      </FlexRowContainer>
    </HoverContainer>
  );
};

export default BookmarkImage;
