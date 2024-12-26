import { Control, FieldValues, Path, Validate } from "react-hook-form";

export type HookFormCommonCollection<T extends FieldValues> = {
  control: Control<T>;
  inputName: Path<T>;
  customValidateFn?: Validate<any, T>;
};
