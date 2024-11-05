import React from "react";
import { Link } from "react-router-dom";

const Category = () => {
  const categories = [
    { name: "커피", path: "/menu/커피" },
    { name: "에이드&티", path: "/menu/에이드&티" },
    { name: "음료", path: "/menu/음료" },
    { name: "디저트", path: "/menu/디저트" },
  ];

  return (
    <div className="bg-white p-4">
      <h2 className="text-xl font-bold mb-4">카테고리</h2>
      <ul className="flex space-x-4">
        {categories.map((category) => (
          <li key={category.name} className="flex-1">
            <Link
              to={category.path}
              className="block text-center py-2 px-4 rounded-lg border border-gray-300 hover:bg-green-500 hover:text-white transition"
            >
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Category;
