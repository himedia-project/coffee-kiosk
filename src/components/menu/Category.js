import React, { useState } from "react";
import { Link } from "react-router-dom";

const Category = ({ setSelectedCategory, selectedCategory }) => {
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
              className={`block text-xl font-bold text-center py-2 px-4 rounded-lg border border-gray-300 transition w-full ${
                selectedCategory === category.name
                  ? "bg-[#c5e1bb] text-[#2d1b1b]"
                  : "hover:bg-[#c5e1bb] hover:text-white"
              }`}
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
