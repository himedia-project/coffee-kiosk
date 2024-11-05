import React from "react";
import { Link, useParams } from "react-router-dom";

const MenuItem = () => {
  const { category } = useParams();
  const itemData = {
    커피: [
      { id: 1, name: "아메리카노", price: 3000 },
      { id: 2, name: "카페라떼", price: 3500 },
      { id: 3, name: "바닐라라떼", price: 4000 },
      { id: 4, name: "카푸치노", price: 4000 },
    ],
    "에이드&티": [
      { id: 5, name: "레몬 에이드", price: 4500 },
      { id: 6, name: "복숭아 아이스티", price: 4000 },
    ],
    음료: [
      { id: 7, name: "탄산수", price: 2000 },
      { id: 8, name: "주스", price: 3000 },
    ],
    디저트: [
      { id: 9, name: "케이크", price: 4500 },
      { id: 10, name: "쿠키", price: 2500 },
      { id: 11, name: "사과생크림와플", price: 3500 },
    ],
  };

  return (
    <div>
      <h2>{category} 메뉴</h2>
      <ul>
        {itemData[category]?.map((item) => (
          <li key={item.id}>
            <Link to={`/options/${item.id}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuItem;
