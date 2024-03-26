import React, { useReducer, useState } from "react";
import cash from "./cash";

const reducer = () => {
    const [amount, dispatch] = useReducer(cash, 0);
    const [money, setMoney] = useState(0);
    
    const container = {
        textAlign: "center",
    };

    const btnStyle1 = {
        background: "greenyellow",
        border: "none",
        margin: "10px",
        padding: "20px",
        fontSize: "20px",
    };
    
    const btnStyle2 = {
        background: "orange",
        border: "none",
        margin: "10px",
        padding: "20px",
        fontSize: "20px",
    };
    
    return (
        <div style={container}>
            <h3>🙎‍♀️금액을 입력하세요.</h3>
            <input 
                type="number" 
                step="1000"
                value={money}
                onChange={(e) => setMoney(parseInt(e.target.value))}
            />
            <h3>🙎‍♀️입금 또는 출금 버튼을 클릭하세요.</h3>
            <button
                style={btnStyle1}
                onClick={() => dispatch({ type: "IMPORT", money: parseInt(money) })}
            >
                입금
            </button>
            <button
            style={btnStyle2}
                onClick={() => dispatch({ type: "EXPORT", money: parseInt(money) })}
            >
                출금
            </button>
            <h3>💰현재 잔액 : {amount}</h3>
        </div>
    );
};

export default reducer;