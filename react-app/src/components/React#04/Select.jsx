import React, { useState } from 'react';


const Select = () => {
    const [select, setSelect] = useState('mango');
    
    function updateValue(e){
        setSelect(e.target.value);
    }

    function submitHandler(e){
        console.log("submit으로 받은 데이터 : ", select);
        e.preventDefault();
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <h1>선택한 과일 : {select}</h1>
                <select value={select} onChange={updateValue}>
                    <option value="apple">사과</option>
                    <option value="mango">망고</option>
                    <option value="banana">바나나</option>
                    <option value="watermelon">수박</option>
                </select>
                <input type="submit" value='제출' />
            </form>
        </div>

    );
}

export default Select;