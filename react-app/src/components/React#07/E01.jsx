import React from 'react';
import { useState } from 'react';
import { useMemo } from 'react';

function E01(){
    const [list,setList]= useState(['초콜렛','사탕']);
    const [input,setInput]= useState("");

    function InputChange(e) {
        setInput(e.target.value);
        }

    function AddList() {
        setList([...list,input])
    }

    return(
    <>
        <div>
          <input type="text" onChange={InputChange} />
          <button onClick={AddList} >추가</button>
        </div>
        <div>
            <ul>
                {list.map((list,idx)=>(<li key={idx}>{list}</li>))}
            </ul>
        </div>
      </>
    )
}

export default E01;