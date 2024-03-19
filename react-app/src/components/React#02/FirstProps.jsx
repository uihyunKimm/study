import React from "react";

const FirstProps = (props) => {
    const {name, color} = props;
    return (
        <>
            <p>안녕하세요. 제 이름은 {name}입니다. </p>
            <p>좋아하는 색은 {color}입니다. </p>
        </>
    );
};

export default FirstProps;