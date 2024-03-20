import React, { useState } from 'react';

const E01 = () => {
    const [message, setMessage] = useState({title : '제목', color : 'black'})

    function printText(e){
        const prev = {...message, title : e.target.value};
        setMessage(prev);
    }
    

        return (
            <div>
                    <h1>{message}</h1>
                    <hr />
                    <input type="text" placeholder='내용을 입력하세요' onChange={printText}/>
                    <button onClick={printText} />
            </div>
        )
    }
export default E01;