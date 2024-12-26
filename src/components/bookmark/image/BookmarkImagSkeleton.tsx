import { BookmarkImageProps } from "@/components/bookmark/image/BookmarkImage";
import Container from "@/components/container/base/Container";
import useThemePalette from "@/hooks/theme/useThemePalette";

type BookmarkImagSkeletonProps = Pick<BookmarkImageProps, "width" | "height">;

const BookmarkImagSkeleton = ({ width, height }: BookmarkImagSkeletonProps) => {
  const themeGrayColor = useThemePalette({ usePallete: "gray" });
  return (
    <Container
      width={width}
      height={height}
      backgroundColor={themeGrayColor.light}
      borderRadius="4px"
    />
  );
};

export default BookmarkImagSkeleton;
