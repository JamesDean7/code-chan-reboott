import { getMyBookmarkedList } from "@/api/gallery/gallery";
import type { GalleryImage } from "@/api/gallery/types";
import { QUERY_KEY } from "@/const/constraint/constraint";
import type { UseBaseSuspenseQueryBasedFn } from "@/hooks/query/base/types";
import { useBaseSuspenseQuery } from "@/hooks/query/base/useBaseSuspenseQuery";
import { createQueryKey } from "@/utils/format/format";

export const useSusBookmarkedList: UseBaseSuspenseQueryBasedFn<
  GalleryImage[]
> = ({ ...rest } = {}) => {
  return useBaseSuspenseQuery({
    queryKey: createQueryKey({
      queryKey: [QUERY_KEY.bookmark.root, QUERY_KEY.bookmark.list],
    }),
    queryFn: async () => await getMyBookmarkedList(),
    ...rest,
  });
};
