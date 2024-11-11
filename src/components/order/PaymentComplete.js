import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../../slices/cartSlice";

const PaymentComplete = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(5);
  const dispatch = useDispatch();
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    const startTime = Date.now();
    const duration = 5000; // 5초

    const progressTimer = setInterval(() => {
      // 현재 시간 - 시작 시간
      const elapsedTime = Date.now() - startTime;
      // 계산식을 약간 수정하여 더 빠르게 진행되도록 함
      const newProgress = Math.max(0, 100 - (elapsedTime / duration) * 130); // 130%로 조정하여 더 빠르게 진행

      if (elapsedTime >= duration) {
        // 5초가 정확히 지났을 때만 종료
        clearInterval(progressTimer);
        setProgress(0);
        dispatch(clearCart());
        navigate("/");
      } else {
        setProgress(newProgress);
      }
    }, 16); // 약 60fps

    return () => clearInterval(progressTimer);
  }, [navigate, dispatch]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((countdown) => countdown - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-5 rounded-lg shadow-lg w-96">
        <div className="flex flex-col items-center justify-center h-screen bg-[#c5e1bb]">
          <h2 className="text-2xl font-bold text-gray-800">
            결제가 완료되었습니다!
          </h2>
          <h2 className="text-xl text-gray-600">이용해 주셔서 감사합니다.</h2>
          <img src="/card_pay_icon.png" alt="Payment Icon" className="mb-4" />
          <hr className="my-4 w-full border-gray-300" />
          <h2 className="text-lg text-center text-gray-700">
            결제 완료 화면은 잠시 후 자동으로 닫힙니다.
          </h2>
          <h1 className="text-5xl font-extrabold text-red-600">{countdown}</h1>
          <div className="w-full h-2 bg-gray-200 rounded-full mt-4">
            <div
              className="h-full bg-green-500 rounded-full transition-all duration-1000 ease-linear"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentComplete;
