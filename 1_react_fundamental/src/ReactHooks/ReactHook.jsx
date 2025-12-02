import React, { useState } from 'react'

const ReactHook = () => {
    const [count, setCount] = useState(0);
    const [frinds, setFrinds] = useState([
      {name: 'Alice'},
      {name: 'Bob'},
      {name: 'Charlie'},
    ]);

    // counter functions
    const Increment = () => {
      setCount(prev => prev + 1);
    }
    const Decrement = () => {
      setCount(prev => Math.max(0, prev - 1));
    }

    // frind delete update functions

    const addFrind = () => setFrinds([...frinds, {name: 'New Frind'}]);
    const removFrind = () => setFrinds(frinds.filter((f) => f.name !== "New Frind"));
    const updateFrind = () =>{
        setFrinds(frinds.map((f)=>(f.name === "Alice" ? {name: "Alice Updated"} : f)));
    }
    
  return (
    <div>
      <h1>React Hooks</h1>
        <h2>Count: {count}</h2>
        <button onClick={Increment}>+</button>
        <button onClick={Decrement}>-</button>
        <br />
        <h2>Frinds list:</h2>
        {
            frinds.map(f=>(
                <li key={Math.random()}>{f.name}</li>
            ))
        }
        <button onClick={addFrind}>add Frind</button>
        <button onClick={removFrind}>remove Frind</button>
        <button onClick={updateFrind}>update Frind</button>
    </div>
  )
}

export default ReactHook
