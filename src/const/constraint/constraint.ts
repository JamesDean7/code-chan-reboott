import { QueryCommonKeys, QueryKeyProps } from "@/const/constraint/types";
import { MatchPropAndValueFromKeys } from "@/types/utils";

export const PREVENT_FOWARD_PROP = {
  container: {
    width: true,
    height: true,
    minHeight: true,
  },
  modalContainer: {
    width: true,
  },
  flexContainer: {
    width: true,
    height: true,
  },
  backgroundFilter: {
    zIndex: true,
    opacity: true,
  },
};

const COMMON_QUERY_KEY: MatchPropAndValueFromKeys<QueryCommonKeys> = {
  detail: "detail",
  list: "list",
};

export const QUERY_KEY = {
  gallery: {
    root: "gallery",
    infiniteList: "infiniteList",
    ...COMMON_QUERY_KEY,
  },
  bookmark: {
    root: "bookmark",
    ...COMMON_QUERY_KEY,
  },
} satisfies QueryKeyProps;
