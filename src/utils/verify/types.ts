import type { PreventForwardPropKeys } from "@/const/constraint/types";

type FalseValueOptions = {
  emptyString: boolean;
  zero: boolean;
  undefinedVal: boolean;
  nullVal: boolean;
  booleanVal: boolean;
};

export type IsFalsyValueFnOptions = {
  exclude?: Partial<FalseValueOptions>;
};

export type CustomShouldForwardPropParams = {
  propName: string;
  preventTarget: PreventForwardPropKeys;
  applyIsPropValid?: boolean;
};
