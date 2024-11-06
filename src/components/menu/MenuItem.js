import React, { useState } from "react";
import itemData from "../../data/itemData";
<<<<<<< HEAD
import { useNavigate } from "react-router-dom";
=======
import ItemOptionModal from "../modal/ItemOptionModal";
>>>>>>> c14d9b4babf9ba5c8b57d4431df9631d3486c470

const MenuItem = ({ category }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedItem(null);
  };

  return (
    <div className="flex flex-col items-center text-center p-5 bg-gray-100 overflow-y-auto w-full h-[600px]">
      <h2 className="text-2xl font-bold mb-5">{category} 메뉴</h2>
      <ul className="flex flex-wrap justify-center list-none p-0 w-[1280px]">
        {itemData[category]?.map((item) => (
          <li
            key={item.id}
            className="m-2 border border-gray-300 rounded-lg overflow-hidden w-40 bg-white transition-transform transform hover:scale-105 cursor-pointer flex flex-col items-center"
            onClick={() => handleItemClick(item)}
          >
            <img
              src={item.url}
              alt={item.name}
              className="w-24 h-auto mx-auto"
            />
            <span className="text-lg mt-2">{item.name}</span>
            <span className="text-sm text-gray-600 mb-2">{item.price}원</span>
          </li>
        ))}
      </ul>

      {isOpen && (

        <ItemOptionModal
          category={category}
          selectedItem={selectedItem}
          closeModal={closeModal}
        />
      )}
    </div>
  );
};

export default MenuItem;
