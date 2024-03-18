import React from "react";

function childComponent({children}) {
    return (
            <>
            childer 값은
            {children}
            입니다.
            </>
    );
    }
    
    export default childComponent;