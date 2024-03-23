import React, { useRef, useState } from "react";
import './App.css';
import TodoTemplate from "./components/TodoTemplate";
import Todoinsert from "./components/Todoinsert";
import TodoList from "./components/TodoList";
import TodoListItem from "./components/TodoListitem";


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
    const nextId = useRef(4);
  return (
    <TodoTemplate>
      <Todoinsert insertItem = {insertHandler}/>
      <TodoList todos={todos}>
        <TodoListItem/>
      </TodoList>
    </TodoTemplate>
  )
}

export default App;
