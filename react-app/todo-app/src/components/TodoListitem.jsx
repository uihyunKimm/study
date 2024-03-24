import React from "react";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import "../style/TodoListitem.scss"

const TodoListitem = () =>{
    return (
        <div className="TodoListitem">
            <div className="todo">
                <input type="checkbox" className="checkbox"/>
                <div className="text">할 일</div>
            </div>
            <div className="remove">
            < IoIosRemoveCircleOutline />
            </div>
        </div>
    );
};

export default TodoListitem;