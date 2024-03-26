import React, { useReducer } from "react";
import priceCounter from "./priceCounter";

const Hamberger = () => {
    const [state, dispatch] = useReducer(priceCounter, 0);
    
    function berger(){
        dispatch({ type: "berger", price: 5000 });
    }    
    function fried(){
        dispatch({ type: "fried", price: 2000 });
    }    
    function cola(){
        dispatch({ type: "cola", price: 1000 });
    }    
    
    return (
        <div>
            <h1>❤️햄버거 가게❤️</h1>
            <p>
            지불할 금액: <b>{state}</b>
            </p>
            <button onClick={berger}>🍔</button>
            <button onClick={fried}>🍟</button>
            <button onClick={cola}>🥤</button>
        </div>
    );
};

export default Hamberger;