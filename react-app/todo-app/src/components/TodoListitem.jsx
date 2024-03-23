import React from "react";
import { CgAdd } from "react-icons/cg";

function TodoListItem(){
    return (
        <div className="itemcontainer">
            <div className="itemcontainer2">
                <input type="checkbox" />
                할 일
            </div>
            <button><CgAdd/></button>
        </div>
    );
};

export default TodoListItem;