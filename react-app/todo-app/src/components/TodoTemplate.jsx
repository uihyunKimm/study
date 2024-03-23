import React from "react";
import "./TodoTemplate.scss";

function TodoTemplate({children}){

    return (
        <div className="wrapper">
            <div className="title">일정관리</div>
            {children}
        </div>
    );
};

export default TodoTemplate;