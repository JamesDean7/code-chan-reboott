import BookmarkImagSkeleton from "@/features/bookmark/_components/image/BookmarkImagSkeleton";
import { PAGE_BOOKMARK_STYLE_GALLERY_IMAGE } from "@/pages/bookmark/_const/styles";
import BookmarkImageGalleryContainer from "@/features/bookmark/_components/gallery/BookmarkImageGalleryContainer";
import { PartialStyleByBreakpoints } from "@/theme/types";
import useCurrentBreakpoint from "@/hooks/event/useCurrentBreakpoint";

type ImageGellerySkeletonProps = {
  skeletonNumber?: PartialStyleByBreakpoints<number>;
};

const BookmarkGallerySkeleton = ({
  skeletonNumber = { sm: 1, md: 2, lg: 3, xl: 3 },
}: ImageGellerySkeletonProps) => {
  const currentBreakpoint = useCurrentBreakpoint();

  const skeletonDisplayNumber = skeletonNumber[currentBreakpoint ?? "sm"] ?? 1;

  const skeletonNumberArray = Array.from(
    { length: skeletonDisplayNumber },
    (v, i) => i
  );
  return (
    <BookmarkImageGalleryContainer>
      {skeletonNumberArray.map((count) => (
        <BookmarkImagSkeleton
          key={`gallery-skeleton-${count}`}
          width={PAGE_BOOKMARK_STYLE_GALLERY_IMAGE.width}
          height={PAGE_BOOKMARK_STYLE_GALLERY_IMAGE.height}
        />
      ))}
    </BookmarkImageGalleryContainer>
  );
};

export default BookmarkGallerySkeleton;
