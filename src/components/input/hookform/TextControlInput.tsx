import TextInput, { TextInputProps } from "@/components/input/text/TextInput";
import { OmitByKey } from "@/types/utils";
import { applyDebounce } from "@/utils/timer/timer";
import { Control, FieldValues, Path, useController } from "react-hook-form";

type TextControlInputProps<T extends FieldValues> = OmitByKey<
  TextInputProps,
  "onChange"
> & {
  control: Control<T>;
  inputName: Path<T>;
  onChange: (search: string) => void;
};

const TextControlInput = <T extends FieldValues>({
  control,
  inputName,
  onChange,
  ...props
}: TextControlInputProps<T>) => {
  const {
    field: { value, onChange: onFieldChange },
    fieldState: { invalid, isTouched, isDirty },
    formState: { touchedFields, dirtyFields },
  } = useController({
    name: inputName,
    control,
    rules: { required: true },
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
    <TextInput onChange={applyDebounce(handleInputChange, 700)} {...props} />
  );
};

export default TextControlInput;
