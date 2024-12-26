import type { AsyncApiRequestFn } from "@/api/types";
import { axiosClient } from "@/api/axiosClient";
import { GalleryItem } from "@/api/gallery/types";

export const getGalleryImageList: AsyncApiRequestFn<
  GalleryItem[]
> = async () => {
  const result = await axiosClient.get<GalleryItem[]>(
    "http://localhost:4000/orders"
  );
  return result.data;
};

let DEMO_BOOKMARK_LIST = [{ id: "1" }, { id: "2" }];

export const getMyBookmarkList = () => {
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
};

export const addToBookmark = (id: string) => {
  DEMO_BOOKMARK_LIST.push({ id });
  return DEMO_BOOKMARK_LIST;
};

export const removeFromBookmark = (id: string) => {
  const newBookMark = DEMO_BOOKMARK_LIST.filter(
    (bookmark) => bookmark.id !== id
  );
  DEMO_BOOKMARK_LIST = newBookMark;
  return DEMO_BOOKMARK_LIST;
};
