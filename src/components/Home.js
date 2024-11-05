import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>환영합니다! 커피 키오스크</h1>
      <p>원하시는 카테고리를 선택해주세요.</p>
      <Link to="/category">카테고리 선택</Link>
    </div>
  );
};

export default Home;
