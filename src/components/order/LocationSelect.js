import React from "react";
import { Link } from "react-router-dom";

const locations = ["매장", "포장"];

const LocationSelect = () => {
  return (
    <div>
      <h2>장소 선택</h2>
      <ul>
        {locations.map((location) => (
          <li key={location}>
            <Link to="/payment">{location}</Link> {/* 결제 페이지로 이동 */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LocationSelect;
