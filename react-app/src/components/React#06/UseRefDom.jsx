import React, { useEffect, useRef } from "react";

const UseRefDom = () => {
    const inputRef = useRef();

    useEffect(() => {
        console.log(inputRef);
        // input 태그에 focus 설정
        inputRef.current.focus();
        }, []);


    return (
        <div>
            ID : <input type="text" ref={inputRef} />
        </div>
    );
};

export default UseRefDom;
