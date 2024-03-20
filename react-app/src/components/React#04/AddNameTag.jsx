import React, { useState } from "react";

const AddNameTag = () => {
    const [names,setNames] = useState(['김의현','리액트']);
    const [input,setInput] = useState('');

    function InputChange(e) {
        setInput(e.target.value);
     }
    function uploadInput() {
        setNames((prevState) => [input, ...prevState]);
     }
    return (
        <div>
        <input type='text' onChange={InputChange}/>
        <button onClick={uploadInput}>추가</button>
        <div>
        { names.map((name, idx) => (<p key={idx}>{name}</p>)) }
        </div>
        </div>
        );
        };
    export default AddNameTag;