import { PAGE_HOME_STYLE } from "@/pages/home/_const/style";
import BookmarkImagSkeleton from "@/components/bookmark/image/BookmarkImagSkeleton";
import GridContainer from "@/components/container/grid/GridContainer";

type ImageGellerySkeletonProps = {
  skeletonNumber?: number;
};

const ImageGellerySkeleton = ({
  skeletonNumber = 2,
}: ImageGellerySkeletonProps) => {
  const skeletonNumberArray = Array.from(
    { length: skeletonNumber },
    (v, i) => i
  );

  return (
    <GridContainer
      margin={PAGE_HOME_STYLE.gallery.container.margin}
      width={PAGE_HOME_STYLE.gallery.container.width}
      maxWidth={PAGE_HOME_STYLE.gallery.container.maxWidth}
      padding={PAGE_HOME_STYLE.gallery.container.padding}
      columnGap={PAGE_HOME_STYLE.gallery.container.columnGap}
      rowGap={PAGE_HOME_STYLE.gallery.container.rowGap}
      gridTemplateColumns={
        PAGE_HOME_STYLE.gallery.container.gridTemplateColumns
      }
    >
      {skeletonNumberArray.map((count) => (
        <BookmarkImagSkeleton
          key={`gallery-skeleton-${count}`}
          width={PAGE_HOME_STYLE.gallery.image.width}
          height={PAGE_HOME_STYLE.gallery.image.height}
        />
      ))}
    </GridContainer>
  );
};

export default ImageGellerySkeleton;
