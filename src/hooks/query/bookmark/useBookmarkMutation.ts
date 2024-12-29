import { addToBookmark, removeFromBookmark } from "@/api/gallery/gallery";
import type {
  AddToBookmarkFnParams,
  BookmarkImageInfo,
} from "@/features/bookmark/types";
import type {
  UseBaseMutationBasedFnParams,
  UseBaseMutationBasedFnReturn,
} from "@/hooks/query/base/types";
import useBaseMutation from "@/hooks/query/base/useBaseMutation";

export const useBookmarkAddition = ({
  ...rest
}: UseBaseMutationBasedFnParams<
  BookmarkImageInfo[],
  AddToBookmarkFnParams
> = {}): UseBaseMutationBasedFnReturn<
  BookmarkImageInfo[],
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
  BookmarkImageInfo[],
  string
> = {}): UseBaseMutationBasedFnReturn<BookmarkImageInfo[], string> => {
  return useBaseMutation({
    mutationFn: async (mutationParam: string) => {
      return await removeFromBookmark(mutationParam);
    },
    ...rest,
  });
};
