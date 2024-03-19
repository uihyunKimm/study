import React, { useState } from "react";

const ChildComponent = (props) => {
    function updateValue(e){
        props.AddData(e.target.value);
    }

    return (
        <>
            <h3><input type="text" onChange={updateValue}/></h3>
        </>
    );
};

export default ChildComponent;