import React from "react";

const TodoTask = (props) => {
    const {taskName} = props;
    return (
            <div>
                {taskName}
            </div>
    );
};

export default TodoTask;