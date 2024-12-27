import type { CreateQueryKeyParams } from "@/utils/format/types";
import { isArrayType, isFalsyValue, isObjectType } from "@/utils/verify/verify";
import { QueryKey } from "@tanstack/react-query";

export const addSizeUnit = (value: unknown, unit: "px" | "%") => {
  return `${value}${unit}`;
};

export const removeWhiteSpace = (value: any) => {
  if (typeof value !== "string") {
    return value;
  }
  return value.replace(/\s/g, "");
};

export const createQueryKey = ({
  queryKey,
  apiPayload,
}: CreateQueryKeyParams): QueryKey => {
  if (isFalsyValue(apiPayload, { exclude: { zero: true } })) {
    return queryKey;
  }

  if (isObjectType(apiPayload)) {
    return [...queryKey, apiPayload];
  }

  if (isArrayType(apiPayload)) {
    return [...queryKey, ...apiPayload];
  }

  return [...queryKey, apiPayload];
};
