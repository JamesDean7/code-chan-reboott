import type { AsyncApiRequestFn } from "@/api/types";
import { axiosClient } from "@/api/axiosClient";
import type {
  AddToBookmarkFnParams,
  BookmarkImageInfo,
} from "@/features/bookmark/types";
import {
  UnsplashImageListInfo,
  UpsplashImageDetailed,
} from "@/api/gallery/types";

let BOOKMARKED_LIST: BookmarkImageInfo[] = [];

export const getUnsplashImageList: AsyncApiRequestFn<
  UnsplashImageListInfo[],
  { page: number; search: string }
> = async ({ page, search }) => {
  if (search) {
    const result = await axiosClient.get<{ results: UnsplashImageListInfo[] }>(
      `search/photos`,
      {
        params: {
          page,
          query: search,
        },
      }
    );
    return result.data.results;
  }
  const result = await axiosClient.get<UnsplashImageListInfo[]>(`photos`, {
    params: {
      page,
    },
  });
  return result.data;
};

export const getUnsplashImageDetailed: AsyncApiRequestFn<
  UpsplashImageDetailed,
  string
> = async (id: string) => {
  const result = await axiosClient.get<UpsplashImageDetailed>(`photos/${id}`);
  console.log({ result });
  return result.data;
  // return MOCK_UNSPLASH_DETAILED;
};

export const getMyBookmarkedList: AsyncApiRequestFn<
  BookmarkImageInfo[]
> = async () => {
  return BOOKMARKED_LIST;
};

export const addToBookmark: AsyncApiRequestFn<
  BookmarkImageInfo[],
  AddToBookmarkFnParams
> = async ({ ...rest }) => {
  BOOKMARKED_LIST.push({ ...rest });
  console.log({ rest, result: BOOKMARKED_LIST });
  return BOOKMARKED_LIST;
};

export const removeFromBookmark: AsyncApiRequestFn<
  BookmarkImageInfo[],
  string
> = async (id: string) => {
  const newBookMark = BOOKMARKED_LIST.filter((bookmark) => bookmark.id !== id);
  BOOKMARKED_LIST = newBookMark;
  return BOOKMARKED_LIST;
};
