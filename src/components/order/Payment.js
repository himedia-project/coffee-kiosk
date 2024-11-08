import React, { useState } from "react";
import { Link } from "react-router-dom";
import PaymentComplete from "./PaymentComplete";

const Payment = ({ orderItems, closeModal }) => {
  const [isPaid, setIsPaid] = useState(false);
  const [installments, setInstallments] = useState(0); // 초기값을 0으로 변경
  const [cardNumber, setCardNumber] = useState(""); // 카드 번호 상태

  const handlePayment = () => {
    // 결제 처리를 하는 함수
    setIsPaid(true);
  };

  // 데이터가 undefined일 경우 빈 배열로 초기화
  const data = orderItems || [];

  // 총 금액 계산
  const totalAmount = data.reduce((total, item) => {
    const densityPrice =
      item.density === "extra" ? 500 : item.density === "double" ? 1000 : 0;
    return total + (item.price + densityPrice) * item.quantity;
  }, 0);
  const discountedAmount = totalAmount * 0.9;
  const discountAmount = totalAmount - discountedAmount;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-5 rounded-lg shadow-lg w-96">
        {!isPaid ? (
          <div>
            <h2 className="text-2xl text-center font-bold mb-4">결제창</h2>
            <ul className="flex flex-col space-y-2 mb-3">
              {data.map((item, index) => {
                const densityPrice =
                  item.density === "extra"
                    ? 500
                    : item.density === "double"
                    ? 1000
                    : 0;
                const itemTotalPrice =
                  (item.price + densityPrice) * item.quantity;

                return (
                  <li key={index} className="flex justify-between">
                    <span>
                      {item.name} - 수량: {item.quantity}
                    </span>
                    <span>{itemTotalPrice.toLocaleString()}원</span>
                  </li>
                );
              })}
            </ul>

            <hr />
            <p className="mt-4 font-bold">
            총 할인 금액: {discountAmount.toLocaleString()}원
          </p>
            <h3 className="mt-4 font-bold">
              총 결제 금액: {discountedAmount.toLocaleString()}원
            </h3>

            {/* 할부 개월 입력 필드 */}
            <div className="mt-4">
              <label className="block mb-1">할부 개월:</label>
              <select
                value={installments}
                onChange={(e) => setInstallments(e.target.value)}
                className="border rounded w-full p-2"
              >
                <option value={0}>일시불</option>
                <option value={1}>1개월</option>
                <option value={2}>2개월</option>
                <option value={3}>3개월</option>
              </select>
            </div>

            {/* 카드 번호 입력 필드 */}
            <div className="mt-4">
              <label className="block mb-1">카드 번호:</label>
              <input
                type="text"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                className="border rounded w-full p-2"
                placeholder="****-****-****-****"
              />
            </div>

            <div className="mt-4 flex justify-between">
              <button
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded"
                onClick={closeModal}
              >
                취소
              </button>
              <button
                className="bg-[#c5e1bb] text-[#2d1b1b] px-4 py-2 rounded"
                onClick={handlePayment}
              >
                결제하기
              </button>
            </div>
          </div>
        ) : (
          <PaymentComplete />
        )}
      </div>
    </div>
  );
};

export default Payment;
