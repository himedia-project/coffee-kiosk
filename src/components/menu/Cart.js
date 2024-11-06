import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { clearCart, removeFromCart } from "../../store";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  const totalAmount = useSelector((state) => state.cart.totalAmount);
  //총 주문금액
  const dispatch = useDispatch();

  // 장바구니에서 항목 삭제 함수
  const removeCartHandler = (itemId, itemTemperature, itemDensity) => {
    dispatch(
      removeFromCart({
        id: itemId,
        temperature: itemTemperature,
        density: itemDensity,
      })
    );
    console.log("remove");
  };

  //메뉴별 옵션 추가 된 금액
  const itemPrice = (item) => {
    const basePrice = item.price;
    const densityPrice = item.density === 'extra' ? 500 : item.density === 'double' ? 1000 : 0 
    
    return basePrice + densityPrice;
  };

  // 총 수량 체크 함수
  const totalQuantity = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const deleteAll = () =>{
   dispatch(clearCart());
  }
  
  return (
    <div>
      <h2>장바구니</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={`${item.id}-${item.temperature}-${item.density}`}>
            {item.name} - 수량: {item.quantity} <br />
            가격 : {itemPrice(item)} 원 <br />
            온도 선택 : {item.temperature}
            <br />
            옵션 선택 : {item.density}
            <br />
            <button onClick={() => removeCartHandler(item.id , item.temperature, item.density)}>삭제하기</button>
          </li>
        ))}
      </ul>
      <button onClick={deleteAll}>전체삭제</button>
      <p>총 수량: {totalQuantity()} </p>
      <p>주문 금액 : {totalAmount}</p>
      <Link to="/orders">주문 목록으로 이동</Link>
    </div>
  );
};

export default Cart;
