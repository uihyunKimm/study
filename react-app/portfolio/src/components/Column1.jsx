import { Link } from "react-router-dom";
import React from "react";
import "./Column1.scss";

const Column1 = () => {
  return (
  <div>
    <h1>Welcom to Roobits 👻</h1>
    <div>소중한 사람들과 추억을 남겨보세요!</div>
    <div>D-Day를 더 특별하게 만들어 드립니다.</div>
    <Link to="/myroom">
      <button>나의 룸 보기</button>
    </Link>
  </div>
  );
};

export default Column1;