import FlexColumnContainer from "@/components/container/flex/FlexColumnContainer";
import type { HookFormCommonCollection } from "@/components/input/hookform/types";
import type { TextInputProps } from "@/components/input/text/TextInput";
import TextInput from "@/components/input/text/TextInput";
import Typography from "@/components/typography/base/Typography";
import useThemePalette from "@/hooks/theme/useThemePalette";
import type { OmitByKey } from "@/types/utils";
import { applyDebounce } from "@/utils/timer/timer";
import type {
  FieldValues} from "react-hook-form";
import {
  Control,
  Path,
  useController,
  Validate,
} from "react-hook-form";

type TextControlInputProps<T extends FieldValues> = {
  displayError?: boolean;
  onChange: (search: string) => void;
} & OmitByKey<TextInputProps, "onChange"> &
  Pick<
    HookFormCommonCollection<T>,
    "control" | "customValidateFn" | "inputName"
  >;

const TextControlInput = <T extends FieldValues>({
  control,
  inputName,
  displayError,
  onChange,
  customValidateFn,
  ...props
}: TextControlInputProps<T>) => {
  const themeColorRed = useThemePalette({ usePallete: "red" });
  const {
    field: { onChange: onFieldChange },
    fieldState: { error },
  } = useController({
    name: inputName,
    control,
    rules: {
      validate: customValidateFn,
    },
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const searchValue = e.target.value;
    onFieldChange(searchValue);
    if (onChange) {
      onChange(searchValue);
    }
  };

  return (
    <FlexColumnContainer position="relative" rowGap={{ sm: "4px" }}>
      <TextInput onChange={applyDebounce(handleInputChange, 700)} {...props} />
      {displayError && error && (
        <Typography color={themeColorRed.main}>{error?.message}</Typography>
      )}
    </FlexColumnContainer>
  );
};

export default TextControlInput;
