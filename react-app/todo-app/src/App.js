import React, { useRef, useState } from "react";
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";

function App() {
    const [todos, setTodos]= useState(
      [
        {
          id : 1,
          text : '리액트 기초 공부하기',
          status : true
        },
        {
          id : 2,
          text : '포트폴리오 만들기',
          status : true
        },
        {
          id : 3,
          text : '프로젝트 준비하기',
          status : false
        }
      ]
    )
  return (
    <TodoTemplate>
      <TodoInsert/>
      <TodoList/>
    </TodoTemplate>
  )
}

export default App;
