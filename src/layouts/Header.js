import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="bg-green-600 text-white p-4 flex items-center justify-between">
        <div className="flex flex-row items-start">
          <Link to="/" className="text-xl font-bold flex items-center">
            <img src="home.png" alt="Home" className="inline-block w-6 h-6" />{" "}
            <p className="ml-2 mt-1">처음으로</p>
          </Link>
        </div>
        <h1 className="text-2xl text-center font-bold flex-1">
          Mega I's Cafe KIOSK
        </h1>
      </header>
    </>
  );
};

export default Header;
