import React from "react";
import TodoListItem from "./TodoListitem";
import "../style/TodoList.scss"

function TodoList(props){
    const {todos, removeItem, updateItem} = props;
    return( 
        <div className="TodoList">
            {todos.map(todo =><TodoListItem todo={todo} key={todo.id} check={todo.status} removeItem={removeItem} updateItem={updateItem}/>)}
        </div>
    );
};

export default TodoList;