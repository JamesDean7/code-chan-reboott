import { useEffect } from "react";

type UseHomeEffectsProps = {
  hasNextPage: boolean;
  isScrollBottomReached: boolean;
  isFetchingNextPage: boolean;
  fetchNextPage: () => void;
  removeWindowScrollEvent: () => void;
};

const useHomePageEffects = ({
  fetchNextPage,
  removeWindowScrollEvent,
  hasNextPage,
  isFetchingNextPage,
  isScrollBottomReached,
}: UseHomeEffectsProps) => {
  useEffect(() => {
    if (isScrollBottomReached && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [isScrollBottomReached]);

  useEffect(() => {
    if (!hasNextPage) {
      removeWindowScrollEvent();
    }
  }, [hasNextPage]);
};

export default useHomePageEffects;
