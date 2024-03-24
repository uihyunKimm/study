import React from "react";
import TodoListItem from "./TodoListitem";
import "../style/TodoList.scss"

function TodoList(props){
    const {todos, removeItem} = props;
    return( 
        <div className="TodoList">
            {todos.map(todo =><TodoListItem todo={todo} key={todo.id} removeItem={removeItem}/>)}
        </div>
    );
};

export default TodoList;