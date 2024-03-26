import React from 'react';
import ColorBox from './ColorBox'
import { ColorContext } from './ColorContent';

const ColorProvider = () => {   
    const color = prompt("원하는 색상을 입력하세요"); 
    console.log(color)
    return (
        <div>
        <ColorContext.Provider value={color}>
            <ColorBox/>
        </ColorContext.Provider>
        </div>
    );
};

export default ColorProvider;