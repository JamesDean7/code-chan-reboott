import "@emotion/react";
import { AppTheme } from "@/theme/types";

declare module "@emotion/react" {
  export interface Theme extends AppTheme {}
}
