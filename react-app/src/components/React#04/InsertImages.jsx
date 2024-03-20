import React from "react";
import image from "./images/jjajang.jpg";

const InsertImages = () => {
    const url = "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png";
    return (
        <>
            <div>
                <h1>이미지 추가하기</h1>
                <img src={image} width="150px" height="150px" alt="파일없음" />
                <img src={require("./images/jjajang.jpg")} width="150px" height="150px" alt="파일없음" />
            </div>
            <div>
                <h1>외부 이미지 추가하기</h1>
                <img src="/images/jjambbong.jpg" alt="파일없음" />
                <br />
                <img src={url} width="150px" height="150px" alt="파일없음" />
            </div>
        </>
    );
};

export default InsertImages;