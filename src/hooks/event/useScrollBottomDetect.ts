import { useCallback, useEffect, useState } from "react";

type UseScrollReachBottomProps = {
  detectBuffer?: number;
};

const useScrollBottomDetect = ({
  detectBuffer = 100,
}: UseScrollReachBottomProps = {}) => {
  const [isScrollBottomReached, setIsScrollBottomReached] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleWindowScroll);
    return () => window.removeEventListener("scroll", handleWindowScroll);
  }, []);

  const handleWindowScroll = useCallback(() => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.scrollY;
    const nearBottom =
      windowHeight + scrollTop >= documentHeight - detectBuffer;
    setIsScrollBottomReached(nearBottom);
  }, []);

  const addWindowScrollEvent = () => {
    window.addEventListener("scroll", handleWindowScroll);
  };

  const removeWindowScrollEvent = () => {
    window.removeEventListener("scroll", handleWindowScroll);
  };

  return {
    isScrollBottomReached,
    addWindowScrollEvent,
    removeWindowScrollEvent,
  };
};

export default useScrollBottomDetect;
