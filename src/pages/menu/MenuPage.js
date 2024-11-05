import React from "react";
import Header from "../../layouts/Header";
import Category from "../../components/menu/Category";
import ItemList from "../../components/ItemList";

const MenuPage = () => {
  return (
    <div>
      <h2>MenuPage</h2>
      <Header />
      <Category />
      <ItemList />
    </div>
  );
};

export default MenuPage;
