import type { AsyncApiRequestFn } from "@/api/types";
import { axiosClient } from "@/api/axiosClient";
import type {
  AddToBookmarkFnParams,
  BookmarkImageInfo,
} from "@/features/bookmark/types";

export const DEMO_IMAGE_LIST: BookmarkImageInfo[] = [
  {
    id: "1",
    imageSrc: "/test.jpg",
    downloads: 200,
    imageHeight: 300,
    imageWidth: 200,
    tags: ["ad"],
    updateDate: "2024-12-10",
    userImage: "/test.jpg",
    userName: "Jack Moa",
    imageName: "test",
  },
  {
    id: "2",
    imageSrc: "/test.jpg",
    downloads: 200,
    imageHeight: 300,
    imageWidth: 200,
    tags: ["ad"],
    updateDate: "2024-12-10",
    userImage: "/test.jpg",
    userName: "Jack Moa",
    imageName: "test",
  },
] as const;

export const getGalleryImageList: AsyncApiRequestFn<
  BookmarkImageInfo[],
  number
> = async (page: number) => {
  const result = await axiosClient.get<BookmarkImageInfo[]>(
    "http://localhost:4000/orders"
  );
  // const result = await axiosClient.get<BookmarkImageInfo[]>(
  //   "http://localhost:4000/orders"
  // );
  // return result.data;
  return DEMO_IMAGE_LIST.map((item) => {
    const { id, ...rest } = item;
    const newId = page * 10 + id;
    return { id: String(Number(newId) + page), ...rest };
  });
};

let DEMO_BOOKMARK_LIST: BookmarkImageInfo[] = [];

export const getMyBookmarkedList: AsyncApiRequestFn<
  BookmarkImageInfo[]
> = async () => {
  return DEMO_BOOKMARK_LIST;
};

export const addToBookmark: AsyncApiRequestFn<
  BookmarkImageInfo[],
  AddToBookmarkFnParams
> = async ({ ...rest }) => {
  DEMO_BOOKMARK_LIST.push({ ...rest });
  return DEMO_BOOKMARK_LIST;
};

export const removeFromBookmark: AsyncApiRequestFn<
  BookmarkImageInfo[],
  string
> = async (id: string) => {
  const newBookMark = DEMO_BOOKMARK_LIST.filter(
    (bookmark) => bookmark.id !== id
  );
  DEMO_BOOKMARK_LIST = newBookMark;
  return DEMO_BOOKMARK_LIST;
};
