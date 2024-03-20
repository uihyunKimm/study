import React, { useState } from "react";

const Prac06 = (props) => {
  const { region } = props;
  const [form, setForm] = useState("");

  function updateValue(e) {
    setForm(e.target.value);
  }

  function submitHandler(e) {
    e.preventDefault();
    alert(form);
  }

  return (
    <div>
      <h3>라디오 버튼의 value를 출력</h3>

      <form onSubmit={submitHandler}>
        {region.map((item) => (
          <label key={item.eng}>
            <input
              type="radio"
              name="city"
              value={item.eng}
              onChange={updateValue}
            />
            {item.region}
          </label>
        ))}
        &nbsp; &nbsp;
        <input type="submit" value="확인" />
      </form>
    </div>
  );
};

export default Prac06;
