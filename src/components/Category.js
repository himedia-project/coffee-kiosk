import React from "react";
import { Link } from "react-router-dom";

const Category = () => {
  const categories = ["커피", "음료", "디저트"];
  return (
    <div>
      <h2>카테고리</h2>
      <ul>
        {categories.map((category) => (
          <li key={category}>
            <Link to={`/menu/${category}`}>{category}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Category;
