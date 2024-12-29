import type { AsyncApiRequestFn } from "@/api/types";
import type {
  AddToBookmarkFnParams,
  BookmarkedImage,
  GalleryImage,
} from "@/api/gallery/types";
import { axiosClient } from "@/api/axiosClient";

export const DEMO_IMAGE_LIST: GalleryImage[] = [
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
  {
    id: "3",
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
  GalleryImage[],
  number
> = async (page: number) => {
  const result = await axiosClient.get<GalleryImage[]>(
    "http://localhost:4000/orders"
  );
  // return result.data;
  return DEMO_IMAGE_LIST.map((item) => {
    const { id, ...rest } = item;
    const newId = page * 10 + id;
    return { id: String(Number(newId) + page), ...rest };
  });
};

let DEMO_BOOKMARK_LIST: BookmarkedImage[] = [];

export const getMyBookmarkedList: AsyncApiRequestFn<
  GalleryImage[]
> = async () => {
  return DEMO_BOOKMARK_LIST;
};

export const addToBookmark: AsyncApiRequestFn<
  GalleryImage[],
  AddToBookmarkFnParams
> = async ({ ...rest }) => {
  DEMO_BOOKMARK_LIST.push({ ...rest });
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
