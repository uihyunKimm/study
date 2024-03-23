import React from "react";
import TodoListItem from "./TodoListitem";

function TodoList({children},props){
    const {todos} = props;
    return( 
        <div className="listcontainer">
            { todos.map(todo =><TodoListItem todo={todo} key={todo.id}/>)}
            {children}
        </div>
    );
};

export default TodoList;