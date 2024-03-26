import React, { useState,useEffect } from 'react';

function E02(){
    const [num,setNum]= useState(0);
    const [text,setText]= useState("입력하세요");

    useEffect(() => {
        console.log("렌더링이 완료되었습니다.")
    },[])

/*     useEffect(() => {
        console.log("렌더링이 완료되었습니다.")
    },[num])

    useEffect(() => {
        console.log("렌더링이 완료되었습니다.")
    },[text]) */

    function PlusNum() {
        setNum(num+1);
        console.log("count값이 변경되었습니다.")
        };

    function inputText(e) {
        setText(e.target.value)
        console.log("text값이 변경되었습니다.")
    }

    return(
    <>
        <div>
            <h1>{num}</h1>
            <button onClick={PlusNum} > + 1 </button>
            <hr />
            <h1>{text}</h1>
            <input type="text" onChange={inputText} />
        </div>
    </>
    )
}

export default E02;