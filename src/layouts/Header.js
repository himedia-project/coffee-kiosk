import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <>
      <header className="bg-[#c5e1bb] text-[rgb(45,27,27)] p-4 relative flex items-center justify-center">
        <div className="absolute left-4 flex items-center">
          <Link to="/" className="text-xl font-bold flex items-center">
            {/* <img
              src="home.png"
              alt="Home"
              className="inline-block w-6 h-6 [filter:brightness(0)_saturate(100%)_invert(15%)_sepia(10%)_saturate(519%)_hue-rotate(314deg)_brightness(94%)_contrast(93%)]"
            /> */}
            <FontAwesomeIcon icon={faHome} className="w-6 h-6 text-[#2d1b1b]" />
            <p className="ml-2 mt-1 hidden sm:block">처음으로</p>
          </Link>
        </div>
        <div className="mt-2">
          <img className="w-[350px]" src="title.png" alt="LYJ KIOSK" />
        </div>
      </header>
    </>
  );
};

export default Header;
