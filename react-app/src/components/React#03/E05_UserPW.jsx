import React from "react";


const E05_UserPw = (props) => {
    function matchPw(e){
        props.onAddPwData(e.target.value);
    }
    return(
        <>
            <h1>PW: <input type="password" onChange={matchPw}/></h1>
        </>
    )
}


export default E05_UserPw;