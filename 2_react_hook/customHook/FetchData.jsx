import useFetch from "../src/hooks/useFetch";
function FetchData() {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");

  return (
    <div>
      {data && Array.isArray(data) &&
        data.map((item) => {
          return (
            <div key={item.id}>
              <li>{item?.title}</li><br/>
            </div>
          );
        })}
    </div>
  );
}

export default FetchData;
