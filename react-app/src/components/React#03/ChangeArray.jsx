import React, { useState } from "react";

const ChangeArray = () => {
    const [value,setValue] = useState(['안녕','하이'])
    
    function changeArr() {
        const cValue = [...value]
        cValue[1] = "Hello";
        setValue(cValue);

    }

    return (
        <div>
            <h1>{value[0]}</h1>
            <h1>{value[1]}</h1>
            <button onClick={changeArr}>배열 값 변경</button>
        </div>
    );
};

export default ChangeArray;