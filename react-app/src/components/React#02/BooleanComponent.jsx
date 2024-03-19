import React from "react";

const BooleanComponent = ({bored}) => {
    const message = bored? "놀러 가자": "열심히 일하기"
    return (
        <>
            {message}
        </>
    );
};

export default BooleanComponent;