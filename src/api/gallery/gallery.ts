import type { AsyncApiRequestFn } from "@/api/types";
import { AddToBookmarkFnParams, GalleryImage } from "@/api/gallery/types";

export const DEMO_IMAGE_LIST: GalleryImage[] = [
  { id: "1", uri: "/test.jpg" },
  { id: "2", uri: "/test.jpg" },
  { id: "3", uri: "/test.jpg" },
  { id: "4", uri: "/test.jpg" },
  { id: "5", uri: "/test.jpg" },
  { id: "6", uri: "/test.jpg" },
] as const;

export const getGalleryImageList: AsyncApiRequestFn<
  GalleryImage[]
> = async () => {
  return DEMO_IMAGE_LIST;
  // const result = await axiosClient.get<GalleryImage[]>(
  //   "http://localhost:4000/orders"
  // );
  // return result.data;
};

let DEMO_BOOKMARK_LIST: GalleryImage[] = [
  { id: "1", uri: "/test.jpg" },
  { id: "3", uri: "/test.jpg" },
  { id: "6", uri: "/test.jpg" },
];

export const getMyBookmarkList: AsyncApiRequestFn<
  GalleryImage[]
> = async () => {
  return DEMO_BOOKMARK_LIST;
};

export const addToBookmark: AsyncApiRequestFn<
  GalleryImage[],
  AddToBookmarkFnParams
> = async ({ id, uri }) => {
  DEMO_BOOKMARK_LIST.push({ id, uri });
  return DEMO_BOOKMARK_LIST;
};

export const removeFromBookmark: AsyncApiRequestFn<
  GalleryImage[],
  string
> = async (id: string) => {
  const newBookMark = DEMO_BOOKMARK_LIST.filter(
    (bookmark) => bookmark.id !== id
  );
  DEMO_BOOKMARK_LIST = newBookMark;
  return DEMO_BOOKMARK_LIST;
};
