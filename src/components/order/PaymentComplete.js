import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PaymentComplete = ({ totalAmount }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 5000); // 5초 후에 메인 화면으로 이동

    return () => clearTimeout(timer); // 타이머를 정리
  }, [navigate]);

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
    </div>
  );
};

export default PaymentComplete;
