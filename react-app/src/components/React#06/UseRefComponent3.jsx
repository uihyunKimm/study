import React, { useState, useRef } from "react";

const UseRefComponent3 = () => {
    const [count, setCount] = useState(0);
    const countRef = useRef(0);
    const [refresh,setRefresh] = useState(0);
    let currnetVar = 0;

    function addStateHandler() {
        console.log("STATE 변경");
        setCount(count + 1);
        }
    function refreshStateHandler() {
        console.log("refresh");
        setRefresh(refresh + 1);
        }

    function addRefHandler() {
        countRef.current = countRef.current + 1;
        console.log(countRef.current);
        }
    
    function js() {
        currnetVar = currnetVar + 1
        console.log(currnetVar)
    }

    return (
        <div>
            <h3>State 값 : {count}</h3>
            <h3>Ref 값 : {countRef.current}</h3>
            <h3>Js 값 : {currnetVar}</h3>
            <button onClick={addStateHandler}>State</button>
            <button onClick={addRefHandler}>Ref</button>
            <button onClick={js}>Var</button>
            <button onClick={refreshStateHandler}>RE</button>
        </div>
    );
};

export default UseRefComponent3;
