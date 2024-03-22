import React, { useState, useRef } from "react";

const InputValue = () => {
    const [name, setName] = useState("soo");
    const [age, setAge] = useState(20);
    const style = {
    margin: "30px",
    };
    return (
        <div style={style}>
            <h1>input 태그 value 값 지정</h1>
            이름 : <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            나이 : <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
        </div>
    );
};

export default InputValue;