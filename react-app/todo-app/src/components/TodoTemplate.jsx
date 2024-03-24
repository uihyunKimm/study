import React from "react";
import "../style/TodoTemplate.scss"

const TodoTemplate = ({children}) => {
    return (
        <div className="TodoTemplate">
            <div className="Title">일정관리</div>
            <div className="content">{children}</div>
        </div>
    );
};

export default TodoTemplate;