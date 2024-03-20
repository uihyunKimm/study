import React, { useState } from "react";
const Prac05 = () => {
  const [message, setMessage] = useState({ title: "제목", color: "black" });

  function changeMessage(cMessage) {
    const newMessage = { ...message };
    newMessage.title = cMessage;
    newMessage.color = "red";
    setMessage(newMessage);
  }

  function showMessage() {
    alert(message.title);
  }

  return (
    <div>
      <h1 style={{ color: message.color }}>{message.title}</h1>
      <hr />
      <input
        type="text"
        name="msg"
        placeholder="내용을 입력하세요"
        onChange={(e) => {
          changeMessage(e.target.value);
        }}
      />
      <button
        onClick={() => {
          showMessage();
        }}
      >
        클릭
      </button>
    </div>
  );
};
export default Prac05;
