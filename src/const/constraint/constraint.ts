import type { QueryCommonKeys, QueryKeyProps } from "@/const/constraint/types";
import type { MatchPropAndValueFromKeys } from "@/types/utils";

const PREVENT_FOWARD_PROP_COMMON = {
  width: true,
  height: true,
  minHeight: true,
  maxHeight: true,
  zIndex: true,
  opacity: true,
  fontSize: true,
  fontWeight: true,
  color: true,
};

export const PREVENT_FOWARD_PROP = {
  common: PREVENT_FOWARD_PROP_COMMON,
};

const COMMON_QUERY_KEY: MatchPropAndValueFromKeys<QueryCommonKeys> = {
  detail: "detail",
  list: "list",
};

export const QUERY_KEY = {
  unsplash: {
    root: "unsplash",
    infiniteList: "infiniteList",
    ...COMMON_QUERY_KEY,
  },
  bookmark: {
    root: "bookmark",
    ...COMMON_QUERY_KEY,
  },
} satisfies QueryKeyProps;
