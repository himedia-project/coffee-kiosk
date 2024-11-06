import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, clearCart, removeFromCart } from "../../slices/cartSlice";

const Cart = ({ onMoveToOrderList }) => {
  const handleChangeDensity = (density) => {
    switch (density) {
      case "basic":
        return "기본";
      case "light":
        return "연하게";
      case "extra":
        return "진하게";
      default:
        return "2배 진하게";
    }
  };

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

  // 장바구니 항목 추가 함수
  const addToCartHandler = (item) => {
    dispatch(
      addToCart({
        item,
        temperature: item.temperature,
        density: item.density,
      })
    );
  };

  //메뉴별 옵션 추가 된 금액
  const itemPrice = (item) => {
    const basePrice = item.price;
    const densityPrice =
      item.density === "extra" ? 500 : item.density === "double" ? 1000 : 0;

    return basePrice + densityPrice;
  };

  // 총 수량 체크 함수
  const totalQuantity = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const deleteAll = () => {
    dispatch(clearCart());
  };

  return (
    <div className="bg-white-100 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">장바구니</h2>
      <ul className="list-none p-0 flex flex-wrap justify-start overflow-x-scroll">
        {cartItems.map((item) => (
          <li
            key={`${item.id}-${item.temperature}-${item.density}`}
            className="m-4 border border-gray-300 rounded-lg overflow-hidden w-48 bg-white shadow-md transition-transform transform hover:scale-105"
          >
            <img
              src={item.url}
              alt={item.name}
              className="w-full h-32 object-cover"
            />
            <div className="p-4">
              <button
                onClick={() =>
                  removeCartHandler(item.id, item.temperature, item.density)
                }
                className="absolute top-2 right-2 text-red-500"
              >
                ❌
              </button>
              {item.name} / 수량: {item.quantity} <br />
              가격 : {itemPrice(item)} 원 <br />
              온도 선택 :{" "}
              {item.temperature === "hot" ? "뜨거운(HOT)" : "차가운(ICE)"}
              <br />
              옵션 선택 : {handleChangeDensity(item.density)}
              <br />
              <button onClick={() => addToCartHandler(item)}>추가하기</button>
            </div>
          </li>
        ))}
      </ul>

      <button onClick={deleteAll}>전체삭제</button>
      <p>총 수량: {totalQuantity()} </p>
      <p>주문 금액 : {totalAmount}</p>
      <button onClick={() => onMoveToOrderList(cartItems)}>
        주문목록으로 이동
      </button>
    </div>
  );
};

export default Cart;
