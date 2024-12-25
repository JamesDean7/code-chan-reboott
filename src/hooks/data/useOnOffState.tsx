import { useState } from "react";

const useOnOffState = () => {
  const [isOn, setIsOn] = useState(false);
  const handleUpdateToOn = () => {
    setIsOn(true);
  };
  const handleUpdateToOff = () => {
    setIsOn(false);
  };
  return { isOn, handleUpdateToOn, handleUpdateToOff };
};

export default useOnOffState;
