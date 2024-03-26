import React, { useEffect, useState } from "react";

const Prac02 = () => {
  const [count, setCount] = useState(1);
  const [text, setText] = useState("");

  const numUp = () => {
    setCount(count + 1);
  };

  const textChange = (e) => {
    setText(e.target.value);
  };

  // 마운트 할 때 실행
  useEffect(() => {
    console.log("렌더링이 완료되었습니다.");
  }, []);

  // count 값이 변경되었을 때 실행
  useEffect(() => {
    console.log("count 값이 변경되었습니다.");
  }, [count]);

  // text 값이 변경되었을 때 실행
  useEffect(() => {
    console.log("text 값이 변경되었습니다.");
  }, [text]);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={numUp}>+ 1</button>
      <hr />
      <input type="text" onChange={textChange} />
      <h1>{text}</h1>
    </div>
  );
};

export default Prac02;
