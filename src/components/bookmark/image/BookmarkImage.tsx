import IconHeart from "@/assets/svg/IconHeart";
import FlexRowContainer from "@/components/container/flex/FlexRowContainer";
import HoverContainer from "@/components/container/hover/HoverContainer";
import Image, { ImageProps } from "@/components/image/base/Image";
import useMouseEnter from "@/hooks/event/useMouseEnter";

export type BookmarkImageProps = Partial<ImageProps> & {
  onImageClick: (src: string) => () => void;
  onLikeClick: (
    src: string
  ) => (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};

const BookmarkImage = ({
  height = { sm: "400px", md: "500px" },
  width = { sm: "100%" },
  alt = "gallery image",
  src = "/test.jpg",
  onImageClick,
  onLikeClick,
}: BookmarkImageProps) => {
  const { isMouseEnter, handleMouseEnter, handleMouseLeave } = useMouseEnter();
  return (
    <HoverContainer
      cursor="zoom-in"
      onClick={onImageClick(src)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <FlexRowContainer
        position="relative"
        justifyContent="flex-end"
        alignItems="flex-end"
      >
        <Image src={src} alt={alt} width={width} height={height} />
        {isMouseEnter && (
          <HoverContainer
            position="absolute"
            margin={{ sm: "10px" }}
            onClick={onLikeClick(src)}
          >
            <IconHeart fill="#ffffff" />
          </HoverContainer>
        )}
      </FlexRowContainer>
    </HoverContainer>
  );
};

export default BookmarkImage;
