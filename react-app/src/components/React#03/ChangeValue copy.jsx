import React, { useState } from "react";

const ChangeValue = (props) => {
    const [value,setValue] = useState("안녕하세요");

    function changeValue(){
        setValue('반가워요')
    }

    return (
        <>
            <h1>{ value }</h1>
            <button onClick={changeValue}> 클릭 </button>
        </>
    );
};

export default ChangeValue;