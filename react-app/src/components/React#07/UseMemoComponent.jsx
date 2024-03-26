import React from 'react';
import { useState } from 'react';
import { useMemo } from 'react';

function hardCalc(number){
    console.log("어려운 계산중");
    for(let i=0; i<1000; i++){console.log(i);}
    
    return number+10000;
}
function easyCalc(number){
    console.log("쉬운 계산중");
    return number+1;
}

const useMemoComponent = () => {
    const [hardNum,setHardNum] = useState(1);
    const [easyNum,setEasyNum] = useState(1);

    const hardSum = useMemo(()=>hardCalc(hardNum),[]);
    const easySum = easyCalc(easyNum);

    return (
        <div>
            <h3>어려운 계산기</h3>
            <input type="number" value={hardNum} onChange={(e)=> setHardNum(parseInt(e.target.value))}/>
            <span> + 10000 = {hardSum} </span>
            <h3>쉬운 계산기</h3>
            <input type="number" value={easyNum} onChange={(e)=> setEasyNum(parseInt(e.target.value))}/>
            <span> + 1 = {easySum} </span>
        </div>
    );
};

export default useMemoComponent;