import React, { useState, useEffect } from "react";
import Category from "../../components/menu/Category";
import MenuItem from "../../components/menu/MenuItem";
import Header from "../../layouts/Header";

const MenuPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    setSelectedCategory("커피"); // 기본 카테고리 설정
  }, []); // 컴포넌트가 처음 마운트될 때만 실행

  return (
    <div>
      <Header />
      <Category
        setSelectedCategory={setSelectedCategory}
        selectedCategory={selectedCategory}
      />
      {selectedCategory ? (
        <MenuItem category={selectedCategory} />
      ) : (
        <p>카테고리를 선택하세요.</p>
      )}
    </div>
  );
};

export default MenuPage;
