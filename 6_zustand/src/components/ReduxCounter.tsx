import { useSelector, useDispatch } from "react-redux";
// import { RootState, AppDispatch } from "../store";
import { increment, decrement } from "../feature/counter/counterSlice";

const ReduxCounter = () => {
  // Read the data from the store.
  const count = useSelector((state: any) => state.counter.value);
  // Changing the data by sending "actions" to the store
  const dispatch = useDispatch();
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => dispatch(decrement())}>-</button>

      <button onClick={() => dispatch(increment())}>+</button>
    </div>
  );
};

export default ReduxCounter;
