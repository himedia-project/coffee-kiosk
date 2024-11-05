import React from "react";
import { useParams, Link } from "react-router-dom";

const OptionSelect = () => {
  const { item } = useParams();
  const options = ["사이즈", "샷 추가", "시럽"];

  return (
    <div>
      <h2>{item} 옵션 선택</h2>
      <ul>
        {options.map((option) => (
          <li key={option}>{option}</li>
        ))}
      </ul>
      <Link to="/cart">장바구니로 이동</Link>
    </div>
  );
};

export default OptionSelect;
