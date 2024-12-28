export type GalleryImage = {
  id: string;
  updateDate: string;
  downloads: number;
  imageWidth: number;
  imageHeight: number;
  tags: string[];
  userImage: string;
  userName: string;
  imageName: string;
  imageSrc: string;
};

export type BookmarkedImage = GalleryImage;

export type AddToBookmarkFnParams = GalleryImage;
