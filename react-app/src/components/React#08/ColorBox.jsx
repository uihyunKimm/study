import React, {useContext} from 'react';
import { ColorContext } from './ColorContent';

const ColorBox = () => {
    const value = useContext(ColorContext);
    const boxStyle = {
        background: value,
        height: "100vh",
    }
    return (
        <div style={boxStyle}></div>
    );
};

export default ColorBox;