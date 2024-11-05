import React, { useState } from "react";
import { Link } from "react-router-dom";
import PaymentComplete from "./PaymentComplete";

const Payment = ({ orderItems }) => {
  const [isPaid, setIsPaid] = useState(false);

  const handlePayment = () => {
    // 결제 처리를 하는 함수
    setIsPaid(true);
  };

  // 데이터가 undefined일 경우 빈 배열로 초기화
  const data = orderItems || [];

  // 총 금액 계산
  const totalAmount = data.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div>
      {!isPaid ? (
        <div>
          <h2>결제창</h2>
          <ul>
            {data.map((item, index) => (
              <li key={index}>
                {item.name} - 수량: {item.quantity}, 가격: {item.price}원
              </li>
            ))}
          </ul>
          <h3>총 결제 금액: {totalAmount}원</h3>

          <button onClick={handlePayment}>결제하기</button>
          <Link to="/">홈으로 이동</Link>
        </div>
      ) : (
        <PaymentComplete totalAmount={totalAmount} />
      )}
    </div>
  );
};

export default Payment;
