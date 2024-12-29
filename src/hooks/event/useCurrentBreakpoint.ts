import type { AppThemeBreakpointsKeys } from "@/theme/types";
import { applyDebounce } from "@/utils/timer/timer";
import { useTheme } from "@emotion/react";
import { useCallback, useEffect, useState } from "react";

const useCurrentBreakpoint = () => {
  const theme = useTheme();
  const [currentBreakpoint, setCurrentBreakpoint] =
    useState<AppThemeBreakpointsKeys | null>(null);

  useEffect(() => {
    setCurrentBreakpoint(getBreakpoint());

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const handleBreakpointUpdate = useCallback(() => {
    setCurrentBreakpoint(getBreakpoint());
  }, []);

  const handleWindowResize = useCallback(
    applyDebounce(handleBreakpointUpdate, 200),
    [handleBreakpointUpdate]
  );

  const getBreakpoint = (): AppThemeBreakpointsKeys => {
    const width = window.innerWidth;
    if (width < theme.breakpoints.sm) return "sm";
    if (width < theme.breakpoints.md) return "md";
    if (width < theme.breakpoints.lg) return "lg";
    return "xl";
  };

  return currentBreakpoint;
};

export default useCurrentBreakpoint;
