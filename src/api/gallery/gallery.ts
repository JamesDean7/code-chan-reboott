import type { AsyncApiRequestFn } from "@/api/types";
import { axiosClient } from "@/api/axiosClient";
import type {
  AddToBookmarkFnParams,
  BookmarkImageInfo,
} from "@/features/bookmark/types";
import type {
  GetUnsplashImageDetailedParams,
  GetUnsplashImageListBySearchParams,
  GetUnsplashImageListParams,
  UnsplashImageListInfo,
  UpsplashImageDetailed,
} from "@/api/gallery/types";

let BOOKMARKED_LIST: BookmarkImageInfo[] = [];

export const getUnsplashImageListBySearch: AsyncApiRequestFn<
  UnsplashImageListInfo[],
  GetUnsplashImageListBySearchParams
> = async ({ search, page } = {}) => {
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
};

export const getUnsplashImageList: AsyncApiRequestFn<
  UnsplashImageListInfo[],
  GetUnsplashImageListParams
> = async ({ page } = {}) => {
  const result = await axiosClient.get<UnsplashImageListInfo[]>(`photos`, {
    params: {
      page,
    },
  });
  return result.data;
};

export const getUnsplashImageDetailed: AsyncApiRequestFn<
  UpsplashImageDetailed,
  GetUnsplashImageDetailedParams
> = async ({ id } = {}) => {
  const result = await axiosClient.get<UpsplashImageDetailed>(`photos/${id}`);
  return result.data;
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
  return BOOKMARKED_LIST;
};

export const removeFromBookmark: AsyncApiRequestFn<
  BookmarkImageInfo[],
  string
> = async (id?: string) => {
  const newBookMark = BOOKMARKED_LIST.filter((bookmark) => bookmark.id !== id);
  BOOKMARKED_LIST = newBookMark;
  return BOOKMARKED_LIST;
};
