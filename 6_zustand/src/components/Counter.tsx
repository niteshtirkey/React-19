import React from "react";
import { useCounterStore } from "./store";
import OtherComponents from "./OtherComponents";

function Counter() {
  const count = useCounterStore((state) => state.count);
  return (
    <div>
      <h2>Count: {count}</h2>
      <OtherComponents/>
    </div>
  );
}

export default Counter;
