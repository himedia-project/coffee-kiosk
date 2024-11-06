import React from "react";
import { Link } from "react-router-dom";

const locations = ["매장", "포장"];

const LocationSelect = ({ onSelect, closeModal }) => {
  console.log("LocationSelect open!");
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-5 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">장소를 선택해 주세요</h2>
        <ul className="flex flex-col space-y-4">
          {locations.map((location) => (
            <li key={location}>
              <button
                className="w-full bg-green-500 text-white px-4 py-2 rounded"
                onClick={() => {
                  onSelect(location);
                  closeModal();
                }}
              >
                {location}
              </button>
            </li>
          ))}
        </ul>
        <div className="mt-4 flex justify-between">
          <button
            className="bg-gray-300 text-gray-800 px-4 py-2 rounded"
            onClick={closeModal}
          >
            취소
          </button>
          <button
            className="bg-green-500 text-white px-4 py-2 rounded"
            onClick={() => {
              onSelect();
              closeModal();
            }}
          >
            다음
          </button>
        </div>
      </div>
    </div>
  );
};

export default LocationSelect;
