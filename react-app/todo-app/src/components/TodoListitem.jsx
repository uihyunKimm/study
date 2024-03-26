import React from "react";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import "../style/TodoListitem.scss"

const TodoListitem = (props) =>{
    const {todo, removeItem} = props;
    return (
        <div className="TodoListitem">
            <div className="todo">
                <input type="checkbox" className="checkbox" checked={todo.status?"checked":""}/>
                <div className="text">{todo.text}</div>
            </div>
            <div className="remove" onClick={()=>removeItem(todo.id)}>
            < IoIosRemoveCircleOutline />
            </div>
        </div>
    );
};

export default TodoListitem;