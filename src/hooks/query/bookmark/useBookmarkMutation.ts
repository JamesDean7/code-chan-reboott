import { addToBookmark, removeFromBookmark } from "@/api/gallery/gallery";
import type { AddToBookmarkFnParams, GalleryImage } from "@/api/gallery/types";
import type {
  UseBaseMutationBasedFnParams,
  UseBaseMutationBasedFnReturn,
} from "@/hooks/query/base/types";
import useBaseMutation from "@/hooks/query/base/useBaseMutation";

export const useBookmarkAddition = ({
  ...rest
}: UseBaseMutationBasedFnParams<
  GalleryImage[],
  AddToBookmarkFnParams
> = {}): UseBaseMutationBasedFnReturn<
  GalleryImage[],
  AddToBookmarkFnParams
> => {
  return useBaseMutation({
    mutationFn: async (mutationParam: AddToBookmarkFnParams) => {
      return await addToBookmark(mutationParam);
    },
    ...rest,
  });
};

export const useBookmarkDeletion = ({
  ...rest
}: UseBaseMutationBasedFnParams<
  GalleryImage[],
  string
> = {}): UseBaseMutationBasedFnReturn<GalleryImage[], string> => {
  return useBaseMutation({
    mutationFn: async (mutationParam: string) => {
      return await removeFromBookmark(mutationParam);
    },
    ...rest,
  });
};
