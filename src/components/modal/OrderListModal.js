import React from "react";
import { Link } from "react-router-dom";

const OrderListModal = ({ closeModal, onComplete, onNext, dummyData }) => {
  const totalQuantity = dummyData.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = dummyData.reduce((acc, item) => {
    const densityPrice =
      item.density === "extra" ? 500 : item.density === "double" ? 1000 : 0;
    return acc + (item.price + densityPrice) * item.quantity;
  }, 0);
  const discountedPrice = totalPrice * 0.9;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-5 rounded-lg shadow-lg w-150">
        <h2 className="text-2xl text-center font-bold mb-4 text-red-600">
          주문정보
        </h2>
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="border-b text-center pb-2">상품명</th>
              <th className="border-b text-center pb-2">수량</th>
              <th className="border-b text-center pb-2">가격</th>
            </tr>
          </thead>
          <tbody>
            {dummyData.map((item, index) => {
              const densityPrice =
                item.density === "extra"
                  ? 500
                  : item.density === "double"
                  ? 1000
                  : 0;
              const itemTotalPrice =
                (item.price + densityPrice) * item.quantity;
              return (
                <tr key={index}>
                  <td className="border-b py-2">{item.name}</td>
                  <td className="border-b py-2">{item.quantity} 개</td>
                  <td className="border-b py-2">
                    {itemTotalPrice.toLocaleString()}원
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="mt-4">
          <p className="text-lg">
            총 수량: <span className="font-bold">{totalQuantity} 개</span>
          </p>
          <p className="text-lg text-black-600">
            총 금액:{" "}
            <span className="font-bold line-through">
              {totalPrice.toLocaleString()} 원
            </span>
          </p>
          <p className="text-lg text-red-600">
            결제 금액:{" "}
            <span className="font-bold">
              {discountedPrice.toLocaleString()} 원
            </span>
          </p>
        </div>
        <div className="mt-4 flex justify-between">
          <button
            onClick={closeModal}
            className="bg-gray-300 text-gray-800 px-4 py-2 rounded"
          >
            취소
          </button>
          <button
            onClick={() => {
              console.log("Next button clicked"); // 디버깅용 로그
              onNext(); // onNext 호출
              closeModal();
            }}
            className="bg-[#c5e1bb] text-[#2d1b1b] px-4 py-2 rounded"
          >
            다음
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderListModal;
