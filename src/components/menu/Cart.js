import React from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  // 여기에서 실제 장바구니 항목을 관리해야 합니다.
  return (
    <div>
      <h2>장바구니</h2>
      <ul>{/* 장바구니 항목을 여기에 표시 */}</ul>
      <Link to="/orders">주문 목록으로 이동</Link>
    </div>
  );
};

export default Cart;
