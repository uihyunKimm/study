import React, { useCallback, useState } from "react";
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
    
    const changeHandler = useCallback((e) => {
        //새로고침 방지
        e.preventDefault();

        //빈칸 추가 X
        if(item.trim() ===""){
            return;
        }
        //아이템추가
        insertItem(item)
        setItem(e.target.value)},[insertItem,item]);

    return(
        <form className="TodoInsert" onSubmit={submitHandler}>
            <input type="text" placeholder="할 일을 입력하세요" value={item} onChange={changeHandler}/>
            <button type="submit"><CgAdd/></button>
        </form>
    )
};

export default TodoInsert;