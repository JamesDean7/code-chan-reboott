import { PartialAppThemeCollection } from "@/theme/types";
import { InputElementAttribute } from "@/types/element";
import {
  CSSStyleProperties,
  PartialStylePropsByBreakpointsCollection,
} from "@/types/styles";
import type { Control, FieldValues, Path, Validate } from "react-hook-form";

/* ::: TextInput ::: */
export type TextInpputStyleProps = Pick<
  CSSStyleProperties,
  | "width"
  | "height"
  | "outline"
  | "padding"
  | "borderRadius"
  | "borderWidth"
  | "borderStyle"
  | "borderColor"
  | "color"
> &
  Pick<PartialStylePropsByBreakpointsCollection, "fontSize"> &
  Pick<PartialAppThemeCollection, "fontWeight">;

export type TextInputProps = TextInpputStyleProps &
  InputElementAttribute & {
    error?: boolean;
  };

/* ::: HookForm - Common ::: */
export type HookFormCommonCollection<T extends FieldValues> = {
  control: Control<T>;
  inputName: Path<T>;
  customValidateFn?: Validate<any, T>;
};
