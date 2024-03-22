import React, { useState, useEffect } from "react";

const AddName = () => {
    const [names,setNames] = useState(() => heavyWork());
    const [input,setInput] = useState('');

    function heavyWork() {
        for (let i = 0; i < 1000; i++) {
        console.log("엄청 복잡한 계산 중.. 시간 오래 걸림..");
        }
        return ["정수아", "리액트"];
        }
        
    function InputChange(e) {
        setInput(e.target.value);
     }
    function uploadInput() {
        setNames((prevState) => [input, ...prevState]);
     }
     useEffect(()=>{
        console.log("렌더링이 완료되었습니다.");
        console.log({names});

        return () => {
            console.log("cleanup");
            console.log({names});  
            }
     },[names])
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
    export default AddName;