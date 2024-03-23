import React, { useState } from "react";
import { CgAdd } from "react-icons/cg";

function addToList(){

}

const Todoinsert = ({insertItem}) => {
    const[item,setItem] = useState("");
    const submitHandler = (e) => {
        e.preventDefault();
    }

    console.log("insert완료")
    return(
        <div className="container" onSubmit={submitHandler}>
            <input type="text" value={item} placeholder="할 일을 입력하세요" onChange={(e) => setItem(e.target.value)}/>
            <button onClick={addToList}><CgAdd/></button>
        </div>
    )
};

export default Todoinsert;