import React, { useEffect, useState, useCallback, memo, useRef } from "react";

const E04 = () => {
    const [name,setName] = useState("어쩌구");
    const inputRef = useRef();

    useEffect(()=>{
        inputRef.current.focus();
    })

    function refHandler(){
        setName(inputRef.current.value)
    }
    function consol(){
        console.log(name);
    }

    
    return (
    <div>
        <input type="text" value={name} ref={inputRef} onChange={()=>refHandler()}/>
        <button onClick={consol}>클릭</button>
        <h1>전송된 단어 : {name}</h1>
    </div>
    );
};

export default E04;