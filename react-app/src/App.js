import React, { useState } from "react";
import Counter from "./components/React#04/Counter";
import AddNameTag from "./components/React#04/AddNameTag";
import AddNameTagEdit from "./components/React#04/AddNameTagEdit";
import PreventDefaultClick from "./components/React#04/PreventDefaultClick";
import ChangeFont from "./components/React#04/ChangeFont";
import EventOnChange from "./components/React#04/EventOnChange";
import NameForm from "./components/React#04/NameForm";
import TextArea from "./components/React#04/TextArea";
import Select from "./components/React#04/Select";
import InsertImages from "./components/React#04/InsertImages";
import CheckBox from "./components/React#04/CheckBox";
import E01 from "./components/React#04/E01";
import E02 from "./components/React#04/E02";
import E03 from "./components/React#04/E03";


function App(){

  return (
      <>
      {/* <E01 /> */}
      {/* <E02 /> */}
      <div className="title">
        <h1>total : {count}</h1>
      </div>
      <div className="container">
      <E03 onCount={on}/>
      </div>
      </>
    )
  }

export default App;