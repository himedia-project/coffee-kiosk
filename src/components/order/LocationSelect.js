import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const locations = [
  { name: "매장", image: "for_here.png" },
  { name: "포장", image: "To_go.png" },
];

const LocationSelect = ({ onSelect, closeModal }) => {
  console.log("LocationSelect open!");

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-5 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl text-center font-bold mb-4">
          장소를 선택해 주세요
        </h2>
        <div className="flex justify-between space-x-4">
          {" "}
          {locations.map((location) => (
            <button
              key={location.name}
              className="flex flex-col items-center bg-green-500 text-white px-4 py-2 rounded w-40"
              onClick={() => {
                onSelect(location.name);
                closeModal();
              }}
            >
              {" "}
              <img
                src={location.image}
                alt={location.name}
                className="w-16 h-16 mb-2"
              />{" "}
              {location.name}{" "}
            </button>
          ))}{" "}
        </div>
        <div className="mt-4 flex justify-center">
          <button
            className="bg-gray-300 text-gray-800 px-4 py-2 rounded"
            onClick={closeModal}
          >
            취소
          </button>
        </div>
      </div>
    </div>
  );
};

export default LocationSelect;
