import GridContainer from "@/components/container/grid/GridContainer";
import { PAGE_BOOKMARK_STYLE_GALLERY_CONTAINER } from "@/pages/bookmark/_const/styles";
import { ReactNodeChildren } from "@/types/lib-react";

type BookmarkImageGalleryContainerProps = ReactNodeChildren;

const BookmarkImageGalleryContainer = ({
  children,
}: BookmarkImageGalleryContainerProps) => {
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
      {children}
    </GridContainer>
  );
};

export default BookmarkImageGalleryContainer;
