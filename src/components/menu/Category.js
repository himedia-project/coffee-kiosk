import React from "react";
import { Link } from "react-router-dom";

const Category = ({ setSelectedCategory }) => {
  const categories = [
    { name: "커피", path: "/menu/커피" },
    { name: "에이드&티", path: "/menu/에이드&티" },
    { name: "음료", path: "/menu/음료" },
    { name: "디저트", path: "/menu/디저트" },
  ];

  return (
    <div className="bg-white p-4">
      <ul className="flex justify-center space-x-4">
        {categories.map((category) => (
          <li key={category.name} className="flex-1">
            <button
              onClick={() => setSelectedCategory(category.name)}
              className="block text-center py-2 px-4 rounded-lg border border-gray-300 hover:bg-green-500 hover:text-white transition w-full"
            >
              {category.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Category;
