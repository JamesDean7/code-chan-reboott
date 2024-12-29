import { memo } from "react";
import { useTheme } from "@emotion/react";
import IconHeart from "@/assets/svg/IconHeart";
import FlexRowContainer from "@/components/container/flex/FlexRowContainer";
import HoverContainer from "@/components/container/hover/HoverContainer";
import Image from "@/components/image/base/Image";
import useMouseEnter from "@/hooks/event/useMouseEnter";
import type { BookmarkImageProps } from "@/features/bookmark/types";

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
  const { imageSrc, imageDesc } = imageInfo ?? {};

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
        <Image src={imageSrc} alt={imageDesc} width={width} height={height} />
        {isMouseEnter && (
          <HoverContainer
            position="absolute"
            margin={{ sm: "10px" }}
            onClick={onLikeClick(imageInfo, isBookmarked)}
          >
            <IconHeart
              width={{ sm: "36px" }}
              height={{ sm: "36px" }}
              fill={heartColor}
            />
          </HoverContainer>
        )}
      </FlexRowContainer>
    </HoverContainer>
  );
};

export default memo(BookmarkImage);
