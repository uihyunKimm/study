import React, { useState, useRef } from "react";

const UseRefComponent2 = () => {
    const [count, setCount] = useState(0);
    const countRef = useRef(0);

    function addStateHandler() {
        console.log("STATE 변경");
        setCount(count + 1);
        }

    function addRefHandler() {
        countRef.current = countRef.current + 1;
        console.log(countRef.current);
        }

    return (
        <div>
            <h3>State 값 : {count}</h3>
            <h3>Ref 값 : {countRef.current}</h3>
            <button onClick={addStateHandler}>State</button>
            <button onClick={addRefHandler}>Ref</button>
        </div>
    );
};

export default UseRefComponent2;
