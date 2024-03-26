import React, { useState, createContext, useContext } from "react";
import styled from "styled-components";
import AddName from "./components/React#06/AddName";
import UseRefComponent1 from "./components/React#06/UseRefComponent1";
import UseRefComponent2 from "./components/React#06/UseRefComponent2";
import UseRefComponent3 from "./components/React#06/UseRefComponent3";
import UseRefDom from "./components/React#06/UseRefDom";
import InputValue from "./components/React#06/InputValue";
import { CgAdd } from "react-icons/cg";
import UseMemoComponent from "./components/React#07/UseMemoComponent"
import UseCallBackComponent1 from "./components/React#07/UseCallBackComponent1"
import UseCallBackComponent2 from "./components/React#07/UseCallBackComponent2";
import ChildComponent from "./components/React#07/ChildComponent";
import { useCallback } from "react";
import E01 from "./components/React#07/E01";
import E02 from "./components/React#07/E02";
import E03 from "./components/React#07/E03";
import E04 from "./components/React#07/E04";
import HomeComponent from "./components/React#08/HomeComponent";
import { ThemeContext } from "./components/React#08/ThemeContext";
import Counter from "./components/React#08/Counter";
import Hamberger from "./components/React#08/Hamberger"
import Bank from "./components/React#08/Bank"
import { ColorContext } from "./components/React#08/ColorContent";
import ColorProvider from "./components/React#08/ColorProvider";

// MyContext 객체 생성
function App() {
  
  
  return(
    <ColorProvider/>
  )
}
  
  export default App;

  {/*const [darkMode, setDarkMode] = useState(false);
  <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <HomeComponent />
    </ThemeContext.Provider> */} 