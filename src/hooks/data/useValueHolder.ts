import { useState } from "react";

const useValueHolder = <T extends unknown>(defaultVal: T) => {
  const [value, setValue] = useState<T>(defaultVal);

  const handleValueUpdate = (param: T) => {
    setValue(param);
  };

  return { value, handleValueUpdate };
};

export default useValueHolder;
