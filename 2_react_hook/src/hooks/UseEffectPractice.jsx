// We setup useEffect hook to run some code WHEN
//  👉 Component renders for the (First Time)
//  👉  & WHENEVER it re-renders
//  👉  & some data in our component changed.

import { useState, useEffect } from "react";

const UseEffectPractice = () => {
  const [value, setValue] = useState(0);
  const [something, setSomething] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log("use Effect run");

    document.title = `Increment ${value}`;
  }, [value, something]);

  useEffect(()=>{
    async function getData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/photos"
      );
      const data = await response.json();
      console.log(data);
      if (data && data.length) setData(data);
    }
    getData();
  },[])

  return (
    <div>
      <h3>Use Effect</h3>
      {data.map((todo) => (
        <ul key={todo.id}>
          <li>{todo.title}</li>
          <li>{todo.url}</li>
        </ul>
        
      ))}
      <p>{value}</p>
      <p>{something}</p>
      <button onClick={() => setValue(value + 1)}>Click me</button>
      <button onClick={() => setSomething((prev) => prev + 1)}>
        Incrse by something
      </button>
    </div>
  );
};

export default UseEffectPractice;
