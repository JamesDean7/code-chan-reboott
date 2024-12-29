import { getMyBookmarkedList } from "@/api/gallery/gallery";
import { QUERY_KEY } from "@/const/constraint/constraint";
import type { BookmarkImageInfo } from "@/features/bookmark/types";
import type {
  UseBaseSuspenseQueryBasedFnParams,
  UseBaseSuspenseQueryBasedFnReturn,
} from "@/hooks/query/base/types";
import { useBaseSuspenseQuery } from "@/hooks/query/base/useBaseSuspenseQuery";
import { createQueryKey } from "@/utils/format/format";

export const useSusBookmarkedList = ({
  ...rest
}: UseBaseSuspenseQueryBasedFnParams<
  BookmarkImageInfo[]
> = {}): UseBaseSuspenseQueryBasedFnReturn<BookmarkImageInfo[]> => {
  return useBaseSuspenseQuery({
    queryKey: createQueryKey({
      queryKey: [QUERY_KEY.bookmark.root, QUERY_KEY.bookmark.list],
    }),
    queryFn: async () => await getMyBookmarkedList(),
    ...rest,
  });
};
