import React,{useState} from "react";

const AddNum = () => {
    let [value, setValue] = useState(0);
    function addNum() {
        setValue(value + 1);
    }
    function reset() {
        setValue(value = 0);
    }
    return(
        <>
            <h1>{value}</h1>
            <button onClick={addNum} onMouseOut={reset}>클릭</button>
        </>
    )
}

export default AddNum;