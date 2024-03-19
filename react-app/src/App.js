import React, { useState } from "react";
import ChildComponent from "./components/React#03/ChildComponent";
import AddNum from "./components/React#03/E01";
import LoginOut from "./components/React#03/E02";
import ChangeColor from "./components/React#03/E03";
import E05_UserID from "./components/React#03/E05_UserID";
import E05_UserPW from "./components/React#03/E05_UserPW";

function App(){

  const [id,inputId] = useState();
  const [pw,inputPw] = useState();

  function addIdHandler(idData){
    inputId(idData);//id
  }

  const addpwHandler = (pwData) => {
    inputPw(pwData);//pw
    }

  const loginAlert = () => {
    if(id === "uihkk" && pw === "1234"){
        alert("로그인성공")
        console.log(id, pw)
      }else{
        alert("로그인실패")
        console.log(id, pw)
      }
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
          <E05_UserID onAddIdData = {addIdHandler}/><br/>
          <E05_UserPW onAddPwData = {addpwHandler}/><br/>
          <input type="submit" value="Login" onClick={loginAlert}/>
        </form>
      </div>
      <hr />
    </>
  )
}

export default App;
  // const addDataHandler = (data)=>{
  //   setValue(data);
  // }

  // return(
  //   <>
  //     <h3>전달받은 데이터는? {value}</h3>
  //     <ChildComponent AddData={addDataHandler}/>
  //   </>
  // )