import React, { useEffect, useState } from "react";
import { useRef } from "react";

const E03 = () => {
    const [count, setCount] = useState(0);
    /* const [renderCount, setRenderCount] = useState(0); */
    const renderCount1 = useRef(0);
/* 
    const countHandler = useCallback(() => {
        setCount(count + 1);
    },[count])

    useEffect(() => {
        setRenderCount(renderCount + 1);
    },[countHandler]) */
    useEffect(() => {
        renderCount1.current = renderCount1.current + 1;
        console.log("렌더링이 완료되었습니다.")
    })

    return (
    <div>
        <h1>Count : {count}</h1>
        <h1>렌더링 횟수 : {renderCount1.current}</h1>
        <button onClick={() => setCount(count + 1)}>클릭</button>
    </div>
    );
};

export default E03;