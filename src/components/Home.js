import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-green-500 text-white p-6">
      <img src="cafe_icon.png" alt="LYJ KIOSK" className="w-24 mb-6" />
      <h1 className="text-3xl font-bold">기다리지 말고 간편하게</h1>
      <h2 className="text-xl mb-4">키오스크에서 "주문하세요!"</h2>
      <button className="bg-white text-green-500 py-2 px-4 rounded-lg shadow-md hover:bg-gray-200">
        <Link to="/menu">화면을 터치해 주세요</Link>
      </button>
    </div>
  );
};

export default Home;
