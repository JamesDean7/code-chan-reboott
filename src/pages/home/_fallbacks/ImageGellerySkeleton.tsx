import BookmarkImagSkeleton from "@/components/bookmark/image/BookmarkImagSkeleton";
import GridContainer from "@/components/container/grid/GridContainer";
import { PAGE_HOME_STYLE } from "@/pages/home/_const/style";

const ImageGellerySkeleton = () => {
  return (
    <GridContainer
      margin={PAGE_HOME_STYLE.gallery.container.margin}
      maxWidth={PAGE_HOME_STYLE.gallery.container.maxWidth}
      padding={PAGE_HOME_STYLE.gallery.container.padding}
      columnGap={PAGE_HOME_STYLE.gallery.container.columnGap}
      rowGap={PAGE_HOME_STYLE.gallery.container.rowGap}
      gridTemplateColumns={
        PAGE_HOME_STYLE.gallery.container.gridTemplateColumns
      }
    >
      <BookmarkImagSkeleton
        width={PAGE_HOME_STYLE.gallery.image.width}
        height={PAGE_HOME_STYLE.gallery.image.height}
      />
      <BookmarkImagSkeleton
        width={PAGE_HOME_STYLE.gallery.image.width}
        height={PAGE_HOME_STYLE.gallery.image.height}
      />
      <BookmarkImagSkeleton
        width={PAGE_HOME_STYLE.gallery.image.width}
        height={PAGE_HOME_STYLE.gallery.image.height}
      />
      <BookmarkImagSkeleton
        width={PAGE_HOME_STYLE.gallery.image.width}
        height={PAGE_HOME_STYLE.gallery.image.height}
      />
    </GridContainer>
  );
};

export default ImageGellerySkeleton;
