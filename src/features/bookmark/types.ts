import type { ImageProps } from "@/components/image/types";
import type { ModalContainerProps } from "@/components/modal/types";

export type BookmarkImageInfo = {
  id: string;
  updateDate: string;
  downloads: number;
  imageWidth: number;
  imageHeight: number;
  userImage: string;
  userName: string;
  imageName: string;
  imageSrc: string;
  tags: string[];
};

export type AddToBookmarkFnParams = BookmarkImageInfo;

/* ::: BookmarkModal ::: */
export type BookmarkModalSelectedImageInfoProp = {
  selectedImageInfo: BookmarkImageInfo;
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

export type BookmarkImageProps = {
  imageInfo: BookmarkImageInfo;
  isBookmarked: boolean;
  onImageClick: (imageInfo: BookmarkImageInfo) => () => void;
  onLikeClick: (
    imageInfo: BookmarkImageInfo,
    isBookmarked: boolean
  ) => (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
} & Partial<Pick<ImageProps, "width" | "height">>;
