import React from 'react';
import { useState, useEffect, useCallback } from 'react';

const UseCallBackComponent2 = () => {
    const [count,setCount] = useState(0);

    const clickHandler = useCallback(() => {
        console.log("count : ", count);
    },[count])
    
    useEffect(() => {
        console.log("clickHadler() 변경");
        },[clickHandler]);

    return(
    <div>
        <input type="number" value={count}
        onChange={(e) => setCount(e.target.value)} />
        <button onClick={clickHandler}>숫자 출력</button>
    </div>
    )
};
    export default UseCallBackComponent2;