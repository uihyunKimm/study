import React from "react";

const ChangePropsValue = (props) => {
    let name = props.name;

    function changeName(){
        name = 'React';
        console.log(name)
    }

    return (
        <>
            <h1>{ props.name }</h1>
            <button onClick={changeName}> 클릭 </button>
        </>
    );
};

export default ChangePropsValue;