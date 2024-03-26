import React, { useContext } from "react";
import { MyContext } from "./Context";

const ChildComponent = () => {
    const value = useContext(MyContext);
    return <div>전달받은 데이터 : {value}</div>;
};

export default ChildComponent;