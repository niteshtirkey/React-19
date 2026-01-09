import { use } from "react";

const fetchData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  return res.json();
};

const dataPromise = fetchData()

function FetchTodo() {
  const data = use(dataPromise);
  console.log(data);
  return (
    <div>
      <h1>title: {data.title}</h1>
    </div>
  );
}

export default FetchTodo;
