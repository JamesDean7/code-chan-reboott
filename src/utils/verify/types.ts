export type IsFalsyValueFnOptions = {
  exclude?: {
    emptyString?: boolean;
    zero?: boolean;
    undefinedVal?: boolean;
    nullVal?: boolean;
    booleanVal?: boolean;
  };
};
