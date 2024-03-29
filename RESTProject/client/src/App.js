import React, { useCallback, useEffect, useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  // 중복되는 fetch 코드를 함수로 만들기
  const fetchData = () => {
    fetch("http://localhost:5000/api/todo")
    .then((response) => response.json())
    .then((data) => {
    console.log(data);
    setTodos(data);
    });
    };

    useEffect(() => {
      fetchData();
      }, []);

    useEffect(() => {
      fetch("http://localhost:5000/api/todo")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setTodos(data);
        });
    }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(e.target.text.value);
    // 새로운 todo 객체 생성

    const todo = {
      text: e.target.text.value,
      status: false,
      };

    // 서버에 데이터 전송(POST)
    fetch("http://localhost:5000/api/todo", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
      },
        body: JSON.stringify(todo),
      }).then(() =>fetchData());
    }


  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={submitHandler}>
        <input type="text" name="text" />
        <button type="submit">확인</button>
      </form>
      { todos.map((todo) => (
        <div key={todo.id}>
        <div>{todo.id}</div>
        <div>{todo.text}</div>
        <div>{todo.status ? "Y" : "N"}</div>
        </div>
      ))}
    </div>
  )
  }

  export default App;