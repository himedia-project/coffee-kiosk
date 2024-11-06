import React, { useState, useEffect } from "react";
import Category from "../../components/menu/Category";
import MenuItem from "../../components/menu/MenuItem";
import CartList from "../../components/menu/CartList";
import Header from "../../layouts/Header";

const initialCartItems = [
  {
    id: 15,
    name: "헤이즐넛아메리카노",
    price: 2500,
    url: "https://img.79plus.co.kr/megahp/manager/upload/menu/20240610110133_1717984893137_AqJAuHaq0t.jpg",
    temperature: "hot",
    density: "light",
    densityPrice: 1000,
    quantity: 3,
  },

  {
    id: 16,
    name: "큐브라뗴",
    price: 3800,
    url: "https://img.79plus.co.kr/megahp/manager/upload/menu/20240610132523_1717993523193_4mNdkfnxvz.jpg",
    temperature: "hot",
    density: "double",
    densityPrice: 1000,
    quantity: 2,
  },
  {
    id: 17,
    name: "콜드브루오리지널",
    price: 3800,
    url: "https://img.79plus.co.kr/megahp/manager/upload/menu/20240610132948_1717993788811_j_eYzA1Esd.jpg",
    temperature: "ice",
    density: "extra",
    densityPrice: 2000,
    quantity: 1,
  },
  {
    id: 18,
    name: "꿀아메리카노",
    price: 3800,
    url: "https://img.79plus.co.kr/megahp/manager/upload/menu/20240610133054_1717993854434_bTty_9u3br.jpg",
    temperature: "ice",
    density: "basic",
    densityPrice: 1000,
    quantity: 1,
  },
];

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
        <>
          <MenuItem category={selectedCategory} />
          <CartList cartItems={initialCartItems} />
        </>
      ) : (
        <p>카테고리를 선택하세요.</p>
      )}
    </div>
  );
};

export default MenuPage;
