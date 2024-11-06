import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const PaymentComplete = ({ totalAmount }) => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((countdown) => countdown - 1);
    }, 1000); // 초 단위 카운트 다운

    return () => clearInterval(timer); // 타이머를 정리
  }, []);

  useEffect(() => {
    if (countdown === 0) {
      navigate("/");
    }
  }, [countdown, navigate]);

  return (
    <div>
      <h2>결제가 완료되었습니다!</h2>
      <h3>총 결제 금액: {totalAmount}원</h3>

      <div>
        <label>결제 방법: </label>
        <span>일시불</span> {/* "일시불" 고정 표시 */}
      </div>

      <div>
        <label>카드 번호: </label>
        <span>****-****-****-****</span> {/* 카드 번호 형식으로 표시 */}
      </div>
      <hr />
      <h1>{countdown}</h1>
    </div>
  );
};

export default PaymentComplete;
