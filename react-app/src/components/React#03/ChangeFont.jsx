import React,{useState} from "react";

const ChangeFont = () => {
    const [value, setValue] = useState(['안녕하세요']);
    const [font,setFont] = useState("50px");

    const fstyle = {fontSize : font}

    return (
        <>
            <div style={fstyle}>{value}</div>
        </>
    );
};

export default ChangeFont;