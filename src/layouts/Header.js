import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="bg-green-600 text-white p-4 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold">
          <img
            src="home_icon.png"
            alt="Home"
            className="inline-block w-6 h-6"
          />{" "}
          Mega I's Cafe KIOSK
        </Link>
      </header>
    </>
  );
};

export default Header;
