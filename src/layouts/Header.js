import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="bg-green-600 text-white p-4 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold">
          <span className="material-icons">home</span> LYJ KIOSK
        </Link>
      </header>
    </>
  );
};

export default Header;
