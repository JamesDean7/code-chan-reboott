import { GalleryItem, getGalleryImageList } from "@/api/gallery/gallery";
import { QUERY_KEY } from "@/const/constraint/constraint";
import { useBaseSuspenseQuery } from "@/hooks/query/base/useBaseSuspenseQuery";

const useSusQueryGallery = () => {
  console.log(" ::: useSusQueryGallery 222 ::: ");
  return useBaseSuspenseQuery({
    queryKey: [QUERY_KEY.gallery.root, QUERY_KEY.gallery.list],
    queryFn: async () => await getGalleryImageList(),
  });
};

export default useSusQueryGallery;
