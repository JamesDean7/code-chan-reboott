import { getGalleryImageList } from "@/api/gallery/gallery";
import type { GalleryImage } from "@/api/gallery/types";
import { QUERY_KEY } from "@/const/constraint/constraint";
import type {
  UseBaseInfiniteQueryBasedFn,
  UseBaseSuspenseQueryBasedFn,
} from "@/hooks/query/base/types";
import { useBaseSuspenseInfiniteQuery } from "@/hooks/query/base/useBaseInfiniteQuery";
import { useBaseSuspenseQuery } from "@/hooks/query/base/useBaseSuspenseQuery";
import { createQueryKey } from "@/utils/format/format";

export const useSusGalleryList: UseBaseSuspenseQueryBasedFn<GalleryImage[]> = ({
  ...rest
} = {}) => {
  return useBaseSuspenseQuery({
    queryKey: createQueryKey({
      queryKey: [QUERY_KEY.gallery.root, QUERY_KEY.gallery.list],
    }),
    queryFn: async () => await getGalleryImageList(),
    ...rest,
  });
};

export const useSusInfiniteGalleryList: UseBaseInfiniteQueryBasedFn<
  GalleryImage[]
> = ({ ...rest } = {}) => {
  return useBaseSuspenseInfiniteQuery({
    initialPageParam: 0,
    queryKey: createQueryKey({
      queryKey: [QUERY_KEY.gallery.root, QUERY_KEY.gallery.infiniteList],
    }),
    queryFn: async ({ pageParam }) => {
      return await getGalleryImageList();
    },
    getNextPageParam: (fetchedData, allFetchedData, currentPageCursor) => {
      if (Number(currentPageCursor) > 2) return;
      return Number(currentPageCursor) + 1;
    },
    ...rest,
  });
};
