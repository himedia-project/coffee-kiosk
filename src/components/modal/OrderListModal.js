import React from "react";
import { Link } from "react-router-dom";

const dummyData = [
  { name: "딸기라떼", quantity: 1, price: 3500 },
  { name: "(HOT) 아메리카노", quantity: 1, price: 1500 },
  { name: "사과생크림와플", quantity: 1, price: 3500 },
]; // 말 그대로 시험용 더미 데이터

const OrderListModal = ({ closeModal }) => {
  const totalQuantity = dummyData.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = dummyData.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-5 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4 text-red-600">
          주문정보를 확인해 주세요
        </h2>
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="border-b text-left pb-2">상품명</th>
              <th className="border-b text-left pb-2">수량</th>
              <th className="border-b text-left pb-2">가격</th>
            </tr>
          </thead>
          <tbody>
            {dummyData.map((item, index) => (
              <tr key={index}>
                <td className="border-b py-2">{item.name}</td>
                <td className="border-b py-2">{item.quantity} 개</td>
                <td className="border-b py-2">{item.price}원</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-4">
          <p className="text-lg">
            총 수량: <span className="font-bold">{totalQuantity} 개</span>
          </p>
          <p className="text-lg text-red-600">
            결제금액: <span className="font-bold">{totalPrice} 원</span>
          </p>
        </div>
        <div className="mt-4 flex justify-between">
          <button
            onClick={closeModal}
            className="bg-gray-300 text-gray-800 px-4 py-2 rounded"
          >
            취소
          </button>
          <Link to="/location">
            <button className="bg-green-500 text-white px-4 py-2 rounded">
              다음
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderListModal;
