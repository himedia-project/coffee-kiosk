import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const PaymentComplete = ({ totalAmount }) => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((countdown) => countdown - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (countdown === 0) {
      navigate("/");
    }
  }, [countdown, navigate]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-green-100">
      <h2 className="text-2xl font-bold text-gray-800">
        결제가 완료되었습니다!
      </h2>
      <h2 className="text-xl text-gray-600">이용해 주셔서 감사합니다.</h2>
      <img src="/card_pay_icon.png" alt="Payment Icon" className="mb-4" />
      <hr className="my-4 w-full border-gray-300" />
      <h2 className="text-lg text-gray-700">
        결제 완료 화면은 잠시 후 자동으로 닫힙니다.
      </h2>
      <h1 className="text-5xl font-extrabold text-red-600">{countdown}</h1>
    </div>
  );
};

export default PaymentComplete;
