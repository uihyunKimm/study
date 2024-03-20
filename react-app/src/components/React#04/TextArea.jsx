import React, { useState } from 'react';


const TextArea = () => {
    const [text, setText] = useState('');
    
    function updateValue(e){
        setText(e.target.value);
    }

    function submitHandler(e){
        console.log("submit으로 받은 데이터 : ", text);
        e.preventDefault();
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <h1>이름 : {text}</h1>
                <textarea value={text} onChange={updateValue}/>
                <input type="submit" value='제출' />
            </form>
        </div>

    );
}

export default TextArea;