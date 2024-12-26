import { PREVENT_FOWARD_PROP } from "@/const/constraint/constraint";

export type PreventForwardPropKeys = keyof typeof PREVENT_FOWARD_PROP;

export type QueryCommonKeys = "detail" | "list";

export type QueryKeyProps = {
  [key: string]: {
    root: string;
    [key: string]: string;
  };
};
