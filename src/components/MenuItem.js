import React from "react";
import { Link, useParams } from "react-router-dom";

const MenuItem = () => {
  const { category } = useParams();
  const items = {
    커피: ["아메리카노", "라떼", "카푸치노"],
    디저트: ["케이크", "쿠키", "마카롱"],
    음료: ["주스", "차", "에이드"],
  };

  return (
    <div>
      <h2>{category} 메뉴</h2>
      <ul>
        {items[category]?.map((item) => (
          <li key={item}>
            <Link to={`/options/${item}`}>{item}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuItem;
