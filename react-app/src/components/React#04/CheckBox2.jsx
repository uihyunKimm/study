import React, { useState } from 'react';

const CheckBox = (props) => {
    const { list } = props;
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
            {list}
            <label key={item.name}></label>
        </div>
    )
}

export default CheckBox;