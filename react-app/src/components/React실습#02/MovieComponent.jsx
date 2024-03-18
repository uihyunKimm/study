import React from "react";

const MovieComponent = (props) => {
    const {title,open, img} = props;
    return (
        <>
            <h1>영화 제목 :{title} </h1>
            <h1>개봉: {open} </h1>
            <img src= {img} />
            <hr />
        </>
    );
};

export default MovieComponent;