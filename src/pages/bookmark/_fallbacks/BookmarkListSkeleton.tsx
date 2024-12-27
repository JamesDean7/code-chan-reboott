import BookmarkImagSkeleton from "@/components/bookmark/image/BookmarkImagSkeleton";
import GridContainer from "@/components/container/grid/GridContainer";
import {
  PAGE_BOOKMARK_STYLE_GALLERY_CONTAINER,
  PAGE_BOOKMARK_STYLE_GALLERY_IMAGE,
} from "@/pages/bookmark/_const/styles";

type ImageGellerySkeletonProps = {
  skeletonNumber?: number;
};

const BookmarkListSkeleton = ({
  skeletonNumber = 2,
}: ImageGellerySkeletonProps) => {
  const skeletonNumberArray = Array.from(
    { length: skeletonNumber },
    (v, i) => i
  );

  return (
    <GridContainer
      margin={PAGE_BOOKMARK_STYLE_GALLERY_CONTAINER.margin}
      width={PAGE_BOOKMARK_STYLE_GALLERY_CONTAINER.width}
      maxWidth={PAGE_BOOKMARK_STYLE_GALLERY_CONTAINER.maxWidth}
      padding={PAGE_BOOKMARK_STYLE_GALLERY_CONTAINER.padding}
      columnGap={PAGE_BOOKMARK_STYLE_GALLERY_CONTAINER.columnGap}
      rowGap={PAGE_BOOKMARK_STYLE_GALLERY_CONTAINER.rowGap}
      gridTemplateColumns={
        PAGE_BOOKMARK_STYLE_GALLERY_CONTAINER.gridTemplateColumns
      }
    >
      {skeletonNumberArray.map((count) => (
        <BookmarkImagSkeleton
          key={`gallery-skeleton-${count}`}
          width={PAGE_BOOKMARK_STYLE_GALLERY_IMAGE.width}
          height={PAGE_BOOKMARK_STYLE_GALLERY_IMAGE.height}
        />
      ))}
    </GridContainer>
  );
};

export default BookmarkListSkeleton;
