import { useState } from "react";

const useCounter = ({ value = 0 }) => {
  const [counter, setCounter] = useState(value);

  const addValue = ({ value = 1 }) => {
    setCounter(counter + value);
  };

  const substractValue = ({ value = 1 }) => {
    setCounter(counter - value);
  };

  const resetValue = () => {
    setCounter((value = 0));
  };

  return {value, addValue, substractValue, resetValue};
};

export default useCounter;
