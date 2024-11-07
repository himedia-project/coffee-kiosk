import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { addToCart } from "../../slices/cartSlice";

const ItemOptionModal = ({ category, selectedItem, closeModal }) => {
  const isCoffee = category === "커피";
  console.log("ItemOptionModal category: ", category);

  const [selectedTemperature, setSelectedTemperature] = useState("hot"); // 기본값 설정
  const [selectedDensity, setSelectedDensity] = useState("basic");
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(
      addToCart({
        item: selectedItem,
        temperature: selectedTemperature,
        density: selectedDensity,
      })
    );
    closeModal();
    console.log("add");
  };

  const totalItemPrice = () => {
    //장바구니에 담기는 금액
    const basePrice = selectedItem.price;
    const densityPrice =
      selectedDensity === "extra"
        ? 500
        : selectedDensity === "double"
        ? 1000
        : 0;
    //선택된 농도가 extra면 500 => (1샷추가)
    //선택된 농도가 extra가 아니라면 1000 =>(2배 진하게)
    //앞의 두 조건이 둘다 거짓이라면 0
    return basePrice + densityPrice;
  };
  //densityPrice: 선택된 농도에 따른 추가금액

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-5 rounded-lg shadow-lg w-128">
        {isCoffee ? (
          <>
            <h3 className="text-xl font-bold mb-4">{selectedItem.name}</h3>
            <p className="text-lg">{totalItemPrice().toLocaleString()}원</p>
            <div className="mt-4">
              <h4 className="font-semibold">뜨거운 (HOT) / 차가운 (ICE)</h4>
              <div>
                <label>
                  <input
                    type="radio"
                    name="temperature"
                    value="hot"
                    checked={selectedTemperature === "hot"}
                    onChange={() => setSelectedTemperature("hot")}
                  />{" "}
                  뜨거운 (HOT)
                </label>
                <label className="ml-4">
                  <input
                    type="radio"
                    name="temperature"
                    value="ice"
                    checked={selectedTemperature === "ice"}
                    onChange={() => setSelectedTemperature("ice")}
                  />{" "}
                  차가운 (ICE)
                </label>
              </div>
            </div>
            <div className="mt-4">
              <h4 className="font-semibold">농도 (선택, 단일 선택)</h4>
              <div>
                <label>
                  <input
                    type="radio"
                    name="density"
                    value="basic"
                    checked={selectedDensity === "basic"}
                    onChange={() => setSelectedDensity("basic")}
                  />{" "}
                  기본 (+0원)
                </label>
                <label className="ml-4">
                  <input
                    type="radio"
                    name="density"
                    value="light"
                    checked={selectedDensity === "light"}
                    onChange={() => setSelectedDensity("light")}
                  />{" "}
                  연하게 (+0원)
                </label>
                <label className="ml-4">
                  <input
                    type="radio"
                    name="density"
                    value="extra"
                    checked={selectedDensity === "extra"}
                    onChange={() => setSelectedDensity("extra")}
                  />{" "}
                  진하게 (+500원)
                </label>
                <label className="ml-4">
                  <input
                    type="radio"
                    name="density"
                    value="double"
                    checked={selectedDensity === "double"}
                    onChange={() => setSelectedDensity("double")}
                  />{" "}
                  2배 진하게 (+1000원)
                </label>
              </div>
            </div>
          </>
        ) : (
          <div className="mt-4 flex flex-col items-center">
            <p className="text-center">선택하신 상품의 옵션을 선택해주세요.</p>
            <img
              src={selectedItem.url}
              alt={selectedItem.name}
              className="w-24 h-auto mb-2"
            />{" "}
            <h3 className="text-xl font-bold mb-4">{selectedItem.name}</h3>
            <p className="text-lg">{totalItemPrice()}원</p>
            {/* 이미지 추가 */}
          </div>
        )}

        <div className="mt-4 flex justify-between">
          <button
            onClick={closeModal}
            className="bg-gray-300 text-gray-800 px-4 py-2 rounded"
          >
            취소
          </button>
          <button
            className="bg-green-500 text-white px-4 py-2 rounded"
            onClick={addToCartHandler}
          >
            주문담기
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemOptionModal;
