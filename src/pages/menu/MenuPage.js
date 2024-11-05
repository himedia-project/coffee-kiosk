import { MenuItem } from "@mui/material";
import React from "react";
import Category from "../../components/menu/Category";
import Header from "../../layouts/Header";

const MenuPage = () => {
  return (
    <div>
      <Header />
      <Category />
      <MenuItem />
    </div>
  );
};

export default MenuPage;
