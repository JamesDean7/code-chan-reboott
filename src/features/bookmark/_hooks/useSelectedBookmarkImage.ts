import { useState } from "react";
import type { BookmarkModalSelectedImageInfoProp } from "@/features/bookmark/types";

const useSelectedBookmarkImage = () => {
  const [selectedImageInfo, setSelectedImageInfo] = useState<
    BookmarkModalSelectedImageInfoProp["selectedImageInfo"] | null
  >(null);

  const handleSelectedImageInfoUpdate = (
    imageInfo: BookmarkModalSelectedImageInfoProp["selectedImageInfo"]
  ) => {
    setSelectedImageInfo(imageInfo);
  };

  const handleSelectedImageInfoReset = () => {
    setSelectedImageInfo(null);
  };
  return {
    selectedImageInfo,
    handleSelectedImageInfoReset,
    handleSelectedImageInfoUpdate,
  };
};

export default useSelectedBookmarkImage;
