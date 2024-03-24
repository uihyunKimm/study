import React, { useRef, useState } from "react";
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";

function App() {
    const nextId = useRef(4);
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
    
    const insertHandler = (item) => {
      const todo = {
        id : nextId.current,
        text: item,
        status: false,
      };
      setTodos([...todos,todo]);

      nextId.current += 1;
    };

    const removeHandler = (deleted) => {
      setTodos(todos.filter((prevtodo) => prevtodo.id !== deleted))
    }

  return (
    <TodoTemplate>
      <TodoInsert insertItem = {insertHandler}/>
      <TodoList todos={todos} removeItem = {removeHandler}/>
    </TodoTemplate>
  )
}

export default App;
