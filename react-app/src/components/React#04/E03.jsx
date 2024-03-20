import React, { useState } from 'react';
const boxStyle = {
    width : "300px",
    height : "auto",
    display: "flex",
}
const CountUp = () => {
    const [value,setValue] = useState(0);

    function numUp(){
        setValue(value+1)
    }

    return(
        <div style={boxStyle}>
            <b>{value}</b>
            <button onClick={numUp}>+1</button>
        </div>
        );

};
export default CountUp;