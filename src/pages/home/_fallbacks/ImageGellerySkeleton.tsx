import {
  PAGE_HOME_STYLE_GALLERY_CONTAINER,
  PAGE_HOME_STYLE_GALLERY_IMAGE,
} from "@/pages/home/_const/style";
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
      margin={PAGE_HOME_STYLE_GALLERY_CONTAINER.margin}
      width={PAGE_HOME_STYLE_GALLERY_CONTAINER.width}
      maxWidth={PAGE_HOME_STYLE_GALLERY_CONTAINER.maxWidth}
      padding={PAGE_HOME_STYLE_GALLERY_CONTAINER.padding}
      columnGap={PAGE_HOME_STYLE_GALLERY_CONTAINER.columnGap}
      rowGap={PAGE_HOME_STYLE_GALLERY_CONTAINER.rowGap}
      gridTemplateColumns={
        PAGE_HOME_STYLE_GALLERY_CONTAINER.gridTemplateColumns
      }
    >
      {skeletonNumberArray.map((count) => (
        <BookmarkImagSkeleton
          key={`gallery-skeleton-${count}`}
          width={PAGE_HOME_STYLE_GALLERY_IMAGE.width}
          height={PAGE_HOME_STYLE_GALLERY_IMAGE.height}
        />
      ))}
    </GridContainer>
  );
};

export default ImageGellerySkeleton;
