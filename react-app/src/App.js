import React, { useState } from "react";
import ChildComponent from "./components/React#03/ChildComponent";
import AddNum from "./components/React#03/E01";
import LoginOut from "./components/React#03/E02";
import ChangeColor from "./components/React#03/E03";

function App(){
  const [value,setValue] = useState('');

  // const addDataHandler = (data)=>{
  //   setValue(data);
  // }

  // return(
  //   <>
  //     <h3>전달받은 데이터는? {value}</h3>
  //     <ChildComponent AddData={addDataHandler}/>
  //   </>
  // )
  const userId = (data) => {
    setValue(data);
  }
  return(
    <>
      <div>
        1,2번<AddNum />
      </div>
      <hr />
      <div>
        3번<LoginOut />
      </div>
      <hr />
      <div>
        4번<ChangeColor />
      </div>
      <hr />
      <div>
        5번
        <form>
          <h1>ID : <input type="text" /></h1><br/>
          <h1>PW : <input type="text" /></h1><br/>
          <input type="submit" value={"Login"}/>
        </form>
      </div>
      <hr />
    </>
  )
}

export default App;