import React, { useState } from 'react';


const NameForm = () => {
    const [form, setForm] = useState('');
    
    function updateValue(e){
        setForm(e.target.value);
    }

    function submitHandler(e){
        console.log("submit으로 받은 데이터 : ", form);
        e.preventDefault();
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <h1>이름 : {form}</h1>
                <input type="text" onChange={updateValue}/>
                <input type="submit" value='전송'/>
            </form>
        </div>

    );
}

export default NameForm;