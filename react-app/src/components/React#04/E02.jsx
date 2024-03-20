import React, { useState } from 'react';

const E02 = () => {
    const [select, setSelect] = useState('');
    
    function updateValue(e){
        setSelect(e.target.value);
    }
    function submitHandler(e){
        e.pre
        setSelect(e.target.value);
    }

    const AlertRadio = () => {
        alert(select)
    };

    return (
        <>
            <h1>라디오 버튼의 value 출력</h1>
            <form onSubmit={submitHandler}>
            <input type="radio" name="info" value="서울" onChange={updateValue}>서울</input>
            <input type="radio" name="info" value="부산" onChange={updateValue}>부산</input>
            <input type="radio" name="info" value="제주" onChange={updateValue}>제주</input>
            <button value='확인' onClick={AlertRadio}></button>
            </form>
        </>
    )
}

export default E02;