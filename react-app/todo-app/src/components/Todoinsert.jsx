import React, { useState } from "react";
import { CgAdd } from "react-icons/cg";
import "../style/TodoInsert.scss"


const TodoInsert = ({insertItem}) => {
    const [item, setItem] = useState("");

    function submitHandler(e){
        e.preventDefault();
        if(item.trim()===""){
            return;
        }
        insertItem(item);

        setItem("");
    }
    
    const changeHandler = (e) => {setItem(e.target.value)};
    return(
        <form className="TodoInsert" onSubmit={submitHandler}>
            <input type="text" placeholder="할 일을 입력하세요" value={item} onChange={changeHandler}/>
            <button type="submit"><CgAdd/></button>
        </form>
    )
};

export default TodoInsert;