import React from "react";
import { Link } from "react-router-dom";

const OrderList = () => {
  // 여기에서 실제 주문 목록을 관리해야 합니다.
  return (
    <div>
      <h2>주문 목록</h2>
      <ul>{/* 주문 목록 항목을 여기에 표시 */}</ul>
      <Link to="/location">장소 선택으로 이동</Link> {/* 장소 선택 링크 추가 */}
    </div>
  );
};

export default OrderList;
