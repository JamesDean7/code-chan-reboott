import type { ImageProps } from "@/components/image/types";
import type { ModalContainerProps } from "@/components/modal/types";

export type BookmarkImageInfo = {
  id: string;
  imageDesc: string;
  imageSrc: string;
};

export type BookMarkDetailedInfo = {
  id: string;
  downloads: number;
  uploadDate: string;
  imageWidth: number;
  imageHeight: number;
  userImage: string;
  userName: string;
  imageDesc: string;
  imageSrc: string;
  tags: string[];
};

export type AddToBookmarkFnParams = BookmarkImageInfo;

/* ::: BookmarkModal ::: */
export type BookmarkModalSelectedImageInfoProp = {
  selectedImageInfo: BookmarkImageInfo;
};

export type BookmarkModalImageDetailInfoProp = {
  imageDetailInfo: BookMarkDetailedInfo;
};

export type BookmarkModalHeadProps = BookmarkModalImageDetailInfoProp & {
  isBookmarked: boolean;
  onClose: () => void;
  onLikeClick: (
    imageInfo: BookmarkModalImageDetailInfoProp["imageDetailInfo"],
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
