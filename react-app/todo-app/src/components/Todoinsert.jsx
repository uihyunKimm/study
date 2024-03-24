import React, { useState } from "react";
import { CgAdd } from "react-icons/cg";
import "../style/TodoInsert.scss"


function addToList(){

}

const TodoInsert = () => {
    console.log("insert완료")
    return(
        <form className="TodoInsert">
            <input type="text" placeholder="할 일을 입력하세요"/>
            <button type="submit"><CgAdd/></button>
        </form>
    )
};

export default TodoInsert;