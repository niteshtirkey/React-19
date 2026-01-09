import { Suspense } from "react";
import FetchTodo from "./components/FetchTodo";
import Theme from "./components/Theme";
import Count from "./components/Count";
import Home_file from "./components/Home_file";


const App = () => {
  return (
    <div className="container">
      <h1 className="bg-green-600 py-10 text-2xl">React 19 feature</h1>
      {/* <Theme/>
     
      <Suspense>
       <FetchTodo/>
      </Suspense>
       <Count/> */}
     <Home_file/>
    </div>
  );
};

export default App;
