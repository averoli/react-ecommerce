
import { useState, useMemo } from "react";

const hightFunc = (num) => {
  for (let i = 0; i < 10000; i++) {
    num += 1;
  }
  return num;
};
const Hooks = (initValue = 0) => {
  const [counter, setCounter] = useState(initValue);
  const calc = useMemo(() => hightFunc(counter), [counter]);
  const increment = () => {
    setCounter((prevState) => prevState + 1);
  };
  return (
    <>
      <h1>Hooks</h1>
      <p>counter: {counter}</p>
      <button onClick={increment}>+</button>
      <p>{calc}</p>
    </>
  );
};

export default Hooks;
