import React from "react";
import itemData from "../../data/itemData";

const MenuItem = ({ category, onItemClick }) => {
  return (
    <div className="flex flex-col items-center text-center p-5 bg-gray-100 overflow-y-auto w-full h-[600px]">
      <h2 className="text-3xl font-bold mb-5">{category} 메뉴</h2>

      <ul className="flex flex-wrap justify-center list-none p-0 w-[1280px]">
        {itemData[category]?.map((item, index) => (
          <li
            key={item.id}
            className={`m-2 border border-gray-300 rounded-lg overflow-hidden w-64 bg-white transition-transform transform hover:scale-105 cursor-pointer flex flex-col items-center ${
              index < 2 ? "opacity-50" : ""
            }`}
            onClick={() => onItemClick(item)}
          >
            <img
              src={item.url}
              alt={item.name}
              className="w-24 h-auto mx-auto"
            />
            <span className="text-lg mt-2">{item.name}</span>
            <span className="text-sm text-gray-600 mb-2">
              {item.price.toLocaleString()}원
            </span>
            {index < 2 && (
              <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                SOLD OUT
              </span>
            )}
            {index >= 4 && index < 8 && (
              <span className="absolute top-2 right-2 bg-blue-700 text-white text-xs font-bold px-2 py-1 rounded">
                NEW
              </span>
            )}
            {index === 7 || index === 11 ? (
              <span className="absolute top-2 right-2 bg-orange-400 text-white text-sm font-bold px-1 py-1 rounded">
                👍 추천
              </span>
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuItem;
