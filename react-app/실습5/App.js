import { useState } from "react";
import Prac01 from "./components/실습-05/Prac01";
import Prac02 from "./components/실습-05/Prac02";
import Prac03 from "./components/실습-05/Prac03";

function App() {
  /*
  const regionList = [
    {
      region: "서울",
      eng: "Seoul",
    },
    {
      region: "부산",
      eng: "Busan",
    },
    {
      region: "제주",
      eng: "Jeju",
    },
  ];
  */

  const [count, setCount] = useState(0);

  function onCountHandler() {
    setCount((prev) => prev + 1);
  }

  return (
    <>
      {/* <Prac01 /> */}
      {/* <Prac02 region={regionList} /> */}

      {/* 
      <div className="title">
        <h1>Total Count : {count}</h1>
      </div>
      <div className="container">
        <Prac03 onCount={onCountHandler} />
        <Prac03 onCount={onCountHandler} />
      </div> 
      */}
    </>
  );
}

export default App;
