import React, { useState } from "react";
import styled from "styled-components";
import E01 from "./components/React#05/E01";
import AddName from "./components/React#06/AddName";
import UseRefComponent1 from "./components/React#06/UseRefComponent1";
import UseRefComponent2 from "./components/React#06/UseRefComponent2";
import UseRefComponent3 from "./components/React#06/UseRefComponent3";
import UseRefDom from "./components/React#06/UseRefDom";
import InputValue from "./components/React#06/InputValue";

function App(){
/* const Wrapper = styled.div`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    @media only screen and (max-width: 768px) { 
      Header {
        width: 100%;
        padding: 16px;
        justify-content: center;
        height: 120px;
      }
    }
    `;

const Header = styled.header`
    position: fixed;
    top: 0;
    display: flex;
    width: 1024px;
    height: 120px;
    padding: 16px;
    background-color: black;
    align-items: center;
    `;

const Button = styled.button`
    background: ${(props)=>(props.primary ? "blue":"white")};
    padding: 4px;
    margin-right: 16px;
    font-size: 16px;
    border-radius: 4px;
    border: ${(props)=>(props.primary? "2px solid yellow": "none")};
    color: ${(props)=>(props.primary ? "white":"black")};
    `;
   */
  return (
    <>
      <InputValue/>
    </>
      )
  }
export default App;

/* <Wrapper>
      <Header>
        <Button>버튼1</Button>
        <Button primary>버튼2</Button>
      </Header>
      <E01/>
    </Wrapper> */