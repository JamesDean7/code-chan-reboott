import { addToBookmark, removeFromBookmark } from "@/api/gallery/gallery";
import type { AddToBookmarkFnParams, GalleryImage } from "@/api/gallery/types";
import type { UseBaseMutationBasedFn } from "@/hooks/query/base/types";
import useBaseMutation from "@/hooks/query/base/useBaseMutation";

export const useBookmarkAddition: UseBaseMutationBasedFn<
  GalleryImage[],
  AddToBookmarkFnParams
> = ({ ...rest } = {}) => {
  return useBaseMutation({
    mutationFn: async (mutationParam: AddToBookmarkFnParams) => {
      return await addToBookmark(mutationParam);
    },
    ...rest,
  });
};

export const useBookmarkDeletion: UseBaseMutationBasedFn<
  GalleryImage[],
  string
> = ({ ...rest } = {}) => {
  return useBaseMutation({
    mutationFn: async (mutationParam: string) => {
      return await removeFromBookmark(mutationParam);
    },
    ...rest,
  });
};
