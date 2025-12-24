import { useContext, type FC } from "react";
import { MyContext } from "./MyContext";

const Counter:FC=()=> {
 const {count, increment,decrement}= useContext(MyContext);
  return <div>
    <p>count: {count}</p>
    <button onClick={increment}>count: increment</button>
    <button onClick={decrement}>count: decrement</button>
  </div>;
}

export default Counter;
