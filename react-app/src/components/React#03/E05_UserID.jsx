import React from "react";


const E05_UserId = (props) => {
    function matchId(e){
        props.onAddIdData(e.target.value);
    }
    return(
        <>
            <h1>ID: <input type="text" onChange={matchId}/></h1>
        </>
    )
}

export default E05_UserId;