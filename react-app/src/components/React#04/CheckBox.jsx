import React, { useState } from 'react';

const CheckBox = (props) => {
    const { cap, shose, bag} = props;
    const [ total, setTotal ] = useState(0);

    const ChangeHandler = (checkbox) => {
        if(checkbox.checked) {
            setTotal((prev) => prev + parseInt(checkbox.value));
        }else {
            setTotal((prev) => prev - parseInt(checkbox.value));
        }
    };

    return (
        <div>
            <input type="checkbox" value={cap} onChange={(e) => ChangeHandler(e.target)}/>모자 만원 <br />
            <input type="checkbox" value={shose} onChange={(e) => ChangeHandler(e.target)}/>신발 3만원 <br />
            <input type="checkbox" value={bag} onChange={(e) => ChangeHandler(e.target)}/>가방 8만원 <br />
            <p>합계 : {total}</p>
        </div>
    )
}

export default CheckBox;