import React from "react";

const PreventDefaultClick = () => {
    function linkClick(e) {
        e.preventDefault();
        console.log("Link is clicked");
    }
    return (
        <div>
            <a href="https://www.naver.com" onClick={linkClick}>
            클릭하세요!!
            </a>
        </div>
    );
};
export default PreventDefaultClick;