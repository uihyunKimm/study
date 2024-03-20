
import React, { useState } from "react";
const ChangeFont = () => {
const [value, setValue] = useState('안녕하세요');
const [font, setFont] = useState('50px');
const fstyle = {
    fontSize : font
    }
function changeFont(size){
    setFont(size);
    }
return (
        <div>
            <div style={fstyle}>{value}</div>
            <button onClick={()=>{setFont('100px')}}>글자크기변경</button>
        </div>
    );
};
export default ChangeFont;