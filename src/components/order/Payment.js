import React, { useState } from "react";
import { Link } from "react-router-dom";
import PaymentComplete from "./PaymentComplete";

const Payment = ({ orderItems }) => {
  const [isPaid, setIsPaid] = useState(false);
  const [installments, setInstallments] = useState(1); // 할부 개월 상태
  const [cardNumber, setCardNumber] = useState(""); // 카드 번호 상태

  const handlePayment = () => {
    // 결제 처리를 하는 함수
    setIsPaid(true);
  };

  // 데이터가 undefined일 경우 빈 배열로 초기화
  const data = orderItems || [];

  // 총 금액 계산
  const totalAmount = data.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-5 rounded-lg shadow-lg">
        {!isPaid ? (
          <div>
            <h2 className="text-xl font-bold mb-4">결제창</h2>
            <ul className="flex flex-col space-y-2">
              {data.map((item, index) => (
                <li key={index} className="flex justify-between">
                  <span>
                    {item.name} - 수량: {item.quantity}
                  </span>
                  <span>{item.price}원</span>
                </li>
              ))}
            </ul>
            <h3 className="mt-4 font-bold">총 결제 금액: {totalAmount}원</h3>

            {/* 할부 개월 입력 필드 */}
            <div className="mt-4">
              <label className="block mb-1">할부 개월:</label>
              <input
                type="number"
                value={installments}
                onChange={(e) => setInstallments(e.target.value)}
                className="border rounded w-full p-2"
                min="1"
              />
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

            <button
              onClick={handlePayment}
              className="mt-4 w-full bg-green-500 text-white px-4 py-2 rounded"
            >
              결제하기
            </button>
            <Link to="/" className="block mt-2 text-center text-blue-500">
              홈으로 이동
            </Link>
          </div>
        ) : (
          <PaymentComplete totalAmount={totalAmount} />
        )}
      </div>
    </div>
  );
};

export default Payment;
