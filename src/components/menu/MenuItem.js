import React, { useState } from "react";
import itemData from "../../data/itemData";

const MenuItem = ({ category }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedItem(null);
  };

  return (
    <div className="text-center p-5 bg-gray-100">
      <h2 className="text-2xl font-bold mb-5">{category} 메뉴</h2>
      <ul className="flex flex-wrap justify-center list-none p-0">
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
            <span className="text-sm text-gray-600">{item.price}원</span>
          </li>
        ))}
      </ul>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-5 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">{selectedItem.name}</h3>
            <p className="text-lg">{selectedItem.price}원</p>
            <div className="mt-4">
              <h4 className="font-semibold">뜨거운 (HOT) / 차가운 (ICE)</h4>
              <div>
                <label>
                  <input type="radio" name="temperature" value="hot" /> 뜨거운
                  (HOT)
                </label>
                <label className="ml-4">
                  <input type="radio" name="temperature" value="ice" /> 차가운
                  (ICE)
                </label>
              </div>
            </div>
            <div className="mt-4">
              <h4 className="font-semibold">농도 (선택, 단일 선택)</h4>
              <div>
                <label>
                  <input type="radio" name="density" value="basic" /> 기본
                  (+0원)
                </label>
                <label className="ml-4">
                  <input type="radio" name="density" value="light" /> 연하게
                  (+0원)
                </label>
                <label className="ml-4">
                  <input type="radio" name="density" value="extra" /> 진하게
                  (+500원)
                </label>
                <label className="ml-4">
                  <input type="radio" name="density" value="double" /> 2배
                  진하게 (+1000원)
                </label>
              </div>
            </div>
            <div className="mt-4 flex justify-between">
              <button
                onClick={closeModal}
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded"
              >
                취소
              </button>
              <button className="bg-green-500 text-white px-4 py-2 rounded">
                주문담기
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuItem;
