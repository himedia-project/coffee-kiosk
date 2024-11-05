import React, { useState } from "react";
import Category from "../../components/menu/Category";
import MenuItem from "../../components/menu/MenuItem";
import Header from "../../layouts/Header";

const MenuPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div>
      <Header />
      <Category setSelectedCategory={setSelectedCategory} />
      {selectedCategory ? (
        <MenuItem category={selectedCategory} />
      ) : (
        <p>카테고리를 선택하세요.</p>
      )}
    </div>
  );
};

export default MenuPage;
