import { getGalleryImageList } from "@/api/gallery/gallery";
import { GalleryImage } from "@/api/gallery/types";
import { QUERY_KEY } from "@/const/constraint/constraint";
import { UseBaseSuspenseQueryBasedFn } from "@/hooks/query/base/types";
import { useBaseSuspenseQuery } from "@/hooks/query/base/useBaseSuspenseQuery";
import { createQueryKey } from "@/utils/format/format";

type ApiPayload = {
  id: string;
};

export const useSusGalleryList: UseBaseSuspenseQueryBasedFn<
  GalleryImage[],
  ApiPayload
> = ({ apiPayload, ...rest } = {}) => {
  return useBaseSuspenseQuery({
    queryKey: createQueryKey({
      queryKey: [QUERY_KEY.gallery.root, QUERY_KEY.gallery.list],
      apiPayload,
    }),
    queryFn: async () => await getGalleryImageList(),
    ...rest,
  });
};
