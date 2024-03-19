import React from "react";

const DefaultProps = ({name}) => {
    return (
        <>
            <p>안녕하세요 전{name}입니다.</p>
        </>
    );
};
DefaultProps.defaultProps = {
    name : "이름없음"
}


export default DefaultProps;