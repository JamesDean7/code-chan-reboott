import { AppThemePaletteKeys } from "@/theme/types";
import { useTheme } from "@emotion/react";

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
