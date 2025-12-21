import React, { useEffect, useRef, useState } from "react";

export default function Timer() {
  const [count, setCount] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);
  

  return (
    <div>
      <h2>Timer: {count} second</h2>
      <button onClick={()=>clearInterval(intervalRef.current)}>Stop</button>
    </div>
  );
}
