import { useTheme } from "@emotion/react";
import type { AppThemePaletteKeys } from "@/theme/types";

type UseThemePaletteProps<T extends AppThemePaletteKeys> = {
  usePallete: T;
};

const useThemePalette = <T extends AppThemePaletteKeys>({
  usePallete,
}: UseThemePaletteProps<T>) => {
  const theme = useTheme();
  return theme.palette[usePallete];
};

export default useThemePalette;
