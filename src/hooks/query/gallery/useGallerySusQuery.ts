import { getGalleryImageList } from "@/api/gallery/gallery";
import { QUERY_KEY } from "@/const/constraint/constraint";
import type { BookmarkImageInfo } from "@/features/bookmark/types";
import type {
  UseBaseInfiniteQueryBasedFnParams,
  UseBaseInfiniteQueryBasedFnReturn,
} from "@/hooks/query/base/types";
import { useBaseSuspenseInfiniteQuery } from "@/hooks/query/base/useBaseInfiniteQuery";
import { createQueryKey } from "@/utils/format/format";

export const useSusInfiniteGalleryList = ({
  ...rest
}: UseBaseInfiniteQueryBasedFnParams<
  BookmarkImageInfo[]
> = {}): UseBaseInfiniteQueryBasedFnReturn<BookmarkImageInfo[]> => {
  return useBaseSuspenseInfiniteQuery({
    initialPageParam: 1,
    queryKey: createQueryKey({
      queryKey: [QUERY_KEY.gallery.root, QUERY_KEY.gallery.infiniteList],
    }),
    queryFn: async ({ pageParam }) => {
      return await getGalleryImageList(Number(pageParam));
    },
    getNextPageParam: (fetchedData, allFetchedData, currentPageCursor) => {
      if (Number(currentPageCursor) > 3) return;
      return Number(currentPageCursor) + 1;
    },
    ...rest,
  });
};
