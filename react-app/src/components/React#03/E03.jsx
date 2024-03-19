import React,{useState} from "react";


const ChangeColor = () => {
    const [value, setValue] = useState('글자색바꾸기');
    let [fcolor, setColor] = useState('black');


    function changeRed() {
        setColor('red')
    }
    function changeGreen() {
        setColor('green')
    }
    function changeBlue() {
        setColor('blue')
    }
    
    return(
        <>
            <h1 style={{color : fcolor }}>{value}</h1>
            <button onClick={changeRed}>빨간색</button>
            <button onClick={changeGreen}>초록색</button>
            <button onClick={changeBlue}>파란색</button>
        </>
    )
}

export default ChangeColor;