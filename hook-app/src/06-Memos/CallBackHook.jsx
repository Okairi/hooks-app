import { useCallback } from "react";
import { useState } from "react";
import { ShowIncrement } from "./ShowIncrement";

export const CallBackHook = () => {
  const [counter, setCounter] = useState(10);

  const increment = useCallback(() => {
    setCounter(counter + 1);
  }, []);

  return (
    <>
      <h1>Use callback hook : {counter}</h1>

      <hr />
      <ShowIncrement increment={increment} />
    </>
  );
};
