import React from "react";
import { Link } from "react-router-dom";
import itemData from "../../data/itemData";

const MenuItem = ({ category }) => {
  return (
    <div className="text-center p-5 bg-gray-100">
      <h2 className="text-2xl font-bold mb-5">{category} 메뉴</h2>
      <ul className="flex flex-wrap justify-center list-none p-0">
        {itemData[category]?.map((item) => (
          <li
            key={item.id}
            className="m-2 border border-gray-300 rounded-lg overflow-hidden w-40 bg-white transition-transform transform hover:scale-105"
          >
            <Link
              to={`/options/${item.id}`}
              className="no-underline text-gray-800 flex flex-col items-center p-3"
            >
              <img src={item.url} alt={item.name} className="w-24 h-auto" />
              <span className="text-lg mt-2">{item.name}</span>
              <span className="text-sm text-gray-600">{item.price}원</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuItem;
