import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="bg-[#c5e1bb] text-[#2d1b1b] p-4 relative flex items-center justify-center">
        <div className="absolute left-4">
          <Link to="/" className="text-xl font-bold flex items-center">
            <img
              src="home.png"
              alt="Home"
              className="inline-block w-6 h-6 [filter:brightness(0)_saturate(100%)_invert(15%)_sepia(10%)_saturate(519%)_hue-rotate(314deg)_brightness(94%)_contrast(93%)]"
            />{" "}
            <p className="ml-2 mt-1">처음으로</p>
          </Link>
        </div>
        <img className="w-[350px] h-auto" src="title.png" alt="LYJ KIOSK" />
      </header>
    </>
  );
};

export default Header;
