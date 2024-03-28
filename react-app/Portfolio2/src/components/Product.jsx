import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Product = () => {
    const [productId, setProductId] = useState("");
    const navigate = useNavigate();

    const clickHandler = (e) =>{
        setProductId(e.target.value);
        // navigate(`/product/${productId}`);
    }

    useEffect(() => {
        navigate(`/product/${productId}`);
    }, [productId]);

    return (
        <>
            <button onClick={clickHandler} value="p001">1번 제품</button>
            <button onClick={clickHandler} value="p002">2번 제품</button>
            <button onClick={clickHandler} value="p003">3번 제품</button>
        </>
    );
};

export default Product;