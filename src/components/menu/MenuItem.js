import React from "react";
import { Link } from "react-router-dom";
import itemData from "../../data/itemData";

const MenuItem = ({ category }) => {
  return (
    <div>
      <h2>{category} 메뉴</h2>
      <ul>
        {itemData[category]?.map((item) => (
          <li key={item.id}>
            <Link to={`/options/${item.id}`}>
              {item.name} |{" "}
              <img
                src={item.url}
                alt={item.name}
                style={{ width: "70px", height: "auto" }}
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuItem;
