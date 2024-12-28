import { memo } from "react";
import { useTheme } from "@emotion/react";
import IconHeart from "@/assets/svg/IconHeart";
import FlexRowContainer from "@/components/container/flex/FlexRowContainer";
import HoverContainer from "@/components/container/hover/HoverContainer";
import Image, { type ImageProps } from "@/components/image/base/Image";
import useMouseEnter from "@/hooks/event/useMouseEnter";

export type BookmarkImageInfo = { id: string; uri: string };

export type BookmarkImageProps = {
  imageInfo: { id: string; uri: string };
  isBookmarked: boolean;
  onImageClick: (imageInfo: BookmarkImageInfo) => () => void;
  onLikeClick: (
    imageInfo: BookmarkImageInfo,
    isBookmarked: boolean
  ) => (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
} & Partial<Pick<ImageProps, "width" | "height">>;

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
  const { uri } = imageInfo ?? {};

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

export default memo(BookmarkImage);
