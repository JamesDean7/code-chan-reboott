import { PREVENT_FOWARD_PROP } from "@/const/constraint/constraint";
import { PreventForwardPropKeys } from "@/const/constraint/types";
import { removeWhiteSpace } from "@/utils/format/format";

export const isNullType = (checkVal: any): checkVal is null =>
  checkVal === null;

export const isUndefinedType = (checkVal: any): checkVal is undefined =>
  checkVal === undefined;

export const isDateType = (checkVal: any): checkVal is Date =>
  !Number.isNaN(checkVal) && checkVal instanceof Date;

export const isStringType = (checkVal: any): checkVal is string =>
  typeof checkVal === "string";

export const isNumberType = (checkVal: any): checkVal is number =>
  typeof checkVal === "number";

export const isBooleanType = (checkVal: any): checkVal is boolean =>
  typeof checkVal === "boolean";

export const isObjectType = (checkVal: any): checkVal is object =>
  typeof checkVal === "object" && checkVal !== null && !Array.isArray(checkVal);

export const isArrayType = <T = any>(checkVal: any): checkVal is Array<T> =>
  Array.isArray(checkVal);

export const isEmptyString = (checkVal: string) => {
  if (removeWhiteSpace(String(checkVal)) !== "") {
    return false;
  }
  return true;
};

export const customShouldForwardProp = ({
  preventTarget,
  propName,
}: {
  propName: string;
  preventTarget: PreventForwardPropKeys;
}) => {
  const propKey =
    propName as keyof (typeof PREVENT_FOWARD_PROP)[typeof preventTarget];

  if (PREVENT_FOWARD_PROP[preventTarget]?.[propKey]) {
    return false;
  }

  return true;
};
