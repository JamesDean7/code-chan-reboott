import { getGalleryImageList } from "@/api/gallery/gallery";
import { GalleryItem } from "@/api/gallery/types";
import { QUERY_KEY } from "@/const/constraint/constraint";
import { UseBaseSuspenseQueryBasedFnParams } from "@/hooks/query/base/types";
import { useBaseSuspenseQuery } from "@/hooks/query/base/useBaseSuspenseQuery";
import { createQueryKey } from "@/utils/format/format";

const useBookmarkQuery = ({
  apiPayload,
  ...rest
}: UseBaseSuspenseQueryBasedFnParams<GalleryItem[]> = {}) => {
  return useBaseSuspenseQuery({
    queryKey: createQueryKey({
      queryKey: [QUERY_KEY.bookmark.root, QUERY_KEY.gallery.list],
      apiPayload,
    }),
    queryFn: async () => await getGalleryImageList(),
    ...rest,
  });
};

export default useBookmarkQuery;
