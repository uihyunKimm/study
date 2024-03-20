import React, { useState } from 'react';


const SelectImage = () => {
    const selectList = ["apple", "mango", "banana", "strawberry"];
    const [select, setSelect] = useState('');
    
    function updateValue(e){
        setSelect(e.target.value);
    }

    return (
        <div>
            <h1>선택한 과일 : {select}</h1>
            <select value={select} onChange={updateValue}>
                {selectList.map((item)=>(
                    <option value={`/images/${item}.png`}>{item}</option>
                ))}
            </select>
            <img src={select} width="150px" height="150px" alt="파일없음" />
        </div>

    );
}

export default SelectImage;