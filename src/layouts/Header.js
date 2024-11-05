import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="bg-green-600 text-white p-4 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold">
          <img src="home.png" alt="Home" className="inline-block w-6 h-6" />{" "}
        </Link>
        <h1 className="text-2xl text-center font-bold flex-1">
          Mega I's Cafe KIOSK
        </h1>
      </header>
    </>
  );
};

export default Header;
