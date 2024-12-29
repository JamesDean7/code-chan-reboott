import type { GalleryImage } from "@/api/gallery/types";
import type { ImageProps } from "@/components/image/types";
import type { ModalContainerProps } from "@/components/modal/types";

/* ::: BookmarkModal ::: */
export type BookmarkModalSelectedImageInfoProp = {
  selectedImageInfo: GalleryImage;
};

export type BookmarkModalHeadProps = BookmarkModalSelectedImageInfoProp & {
  isBookmarked: boolean;
  onClose: () => void;
  onLikeClick: (
    imageInfo: BookmarkModalSelectedImageInfoProp["selectedImageInfo"],
    isBookmarked: boolean
  ) => (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};

export type BookmarkModalProps = ModalContainerProps &
  BookmarkModalSelectedImageInfoProp &
  Pick<BookmarkModalHeadProps, "isBookmarked" | "onClose" | "onLikeClick">;

/* ::: BookmarkImage ::: */
type BookmarkImageInfo = GalleryImage;

export type BookmarkImageProps = {
  imageInfo: BookmarkImageInfo;
  isBookmarked: boolean;
  onImageClick: (imageInfo: BookmarkImageInfo) => () => void;
  onLikeClick: (
    imageInfo: BookmarkImageInfo,
    isBookmarked: boolean
  ) => (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
} & Partial<Pick<ImageProps, "width" | "height">>;
