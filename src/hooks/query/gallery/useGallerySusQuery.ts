import {
  getUnsplashImageDetailed,
  getUnsplashImageList,
} from "@/api/gallery/gallery";
import {
  UnsplashImageListInfo,
  UpsplashImageDetailed,
} from "@/api/gallery/types";
import { QUERY_KEY } from "@/const/constraint/constraint";
import type { BookmarkImageInfo } from "@/features/bookmark/types";
import type {
  UseBaseInfiniteQueryBasedFnParams,
  UseBaseInfiniteQueryBasedFnReturn,
  UseBaseSuspenseQueryBasedFnParams,
} from "@/hooks/query/base/types";
import { useBaseSuspenseInfiniteQuery } from "@/hooks/query/base/useBaseInfiniteQuery";
import { useBaseSuspenseQuery } from "@/hooks/query/base/useBaseSuspenseQuery";
import { createQueryKey } from "@/utils/format/format";

export const useSusInfiniteGalleryList = ({
  apiPayload,
  ...rest
}: UseBaseInfiniteQueryBasedFnParams<
  UnsplashImageListInfo[],
  number,
  { search: string }
>): UseBaseInfiniteQueryBasedFnReturn<UnsplashImageListInfo[]> => {
  return useBaseSuspenseInfiniteQuery({
    initialPageParam: 1,
    queryKey: createQueryKey({
      queryKey: [QUERY_KEY.unsplash.root, QUERY_KEY.unsplash.infiniteList],
      apiPayload,
    }),
    queryFn: async ({ pageParam }) => {
      return await getUnsplashImageList({
        page: Number(pageParam),
        search: apiPayload?.search,
      });
    },
    getNextPageParam: (fetchedData, allFetchedData, currentPageCursor) => {
      if (Number(currentPageCursor) > 3) return;
      return Number(currentPageCursor) + 1;
    },
    ...rest,
  });
};

export const useSusImageDetail = ({
  apiPayload,
  ...rest
}: UseBaseSuspenseQueryBasedFnParams<
  UpsplashImageDetailed,
  { id: string }
>) => {
  return useBaseSuspenseQuery({
    queryKey: createQueryKey({
      queryKey: [QUERY_KEY.unsplash.root, QUERY_KEY.unsplash.detail],
      apiPayload,
    }),
    queryFn: async () => {
      return await getUnsplashImageDetailed(apiPayload.id);
    },
    ...rest,
  });
};
