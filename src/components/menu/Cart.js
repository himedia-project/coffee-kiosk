import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  clearCart,
  removeFromCart,
  removeItem,
} from "../../slices/cartSlice";
import AlertModal from "../modal/AlertModal";
import ConfirmModal from "../modal/ConfirmModal";


const Cart = ({ onMoveToOrderList }) => {
  const onMoveToOrderListWithPrice = (cartItems) => {
  const orderItems = cartItems.map((item) => ({
    ...item,
    totalPrice: (item.price + (item.density === "extra" ? 500 : item.density === "double" ? 1000 : 0)) * item.quantity
  }));
  onMoveToOrderList(orderItems);
};

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

  const [confirmModal, setConfirmModal] = useState(false);

  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  //총 주문금액
  const dispatch = useDispatch();

  const [timeLeft, setTimeLeft] = useState(300);
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    if (timeLeft === 0) {
      window.location.href = "/"; // 홈 화면으로 리다이렉트
    }
    return () => clearInterval(timer);
  }, [timeLeft]);

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

  const removeItemHandler = (itemId, itemTemperature, itemDensity) => {
    dispatch(
      removeItem({
        id: itemId,
        temperature: itemTemperature,
        density: itemDensity,
      })
    );
    console.log("remove Item");
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

  const itemPrice = (item) => {
    const basePrice = item.price;
    const densityPrice =
      item.density === "extra" ? 500 : item.density === "double" ? 1000 : 0;

    return basePrice + densityPrice;
  };

  const totalQuantity = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const deleteAll = (e) => {
    e.preventDefault();
    // 장바구니 비우기 전 AlertModal 창 띄우기
    setConfirmModal(true);
  };

  // 장바구니 비우기 확인 함수
  const handleConfirm = () => {
    dispatch(clearCart());
    setConfirmModal(false);
  };

  return (
    <div className="bg-[#ffffff]">
      <div className="max-w-screen-md mx-auto bg-gray-50 min-h-screen">
        {/* 장바구니 타이틀 */}
        {confirmModal && (
          <ConfirmModal
            message="장바구니를 정말 비우시겠습니까?"
            onConfirm={handleConfirm}
            onCancel={() => setConfirmModal(false)}
          />
        )}

        <h2 className="text-2xl text-center font-bold p-4 text-gray-800 border-b bg-white top-0 z-10">
          장바구니
        </h2>

        {/* 장바구니 아이템 섹션 */}
        <div className="p-4">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-48 text-gray-400">
              <p className="text-lg">장바구니가 비어있습니다</p>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div
                  key={`${item.id}-${item.temperature}-${item.density}`}
                  className="bg-white rounded-lg p-4 shadow-sm flex items-center space-x-4"
                >
                  <img
                    src={item.url}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-md"
                  />

                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <h3 className="font-medium text-gray-800">{item.name}</h3>
                      <button
                        onClick={() =>
                          removeItemHandler(
                            item.id,
                            item.temperature,
                            item.density
                          )
                        }
                        className="text-gray-400 hover:text-red-500"
                      >
                        <span className="sr-only">삭제</span>×
                      </button>
                    </div>

                    {item.id >= 1 && item.id < 19 && (
                      <div className="text-sm text-gray-600 mt-1">
                        <p>
                          {item.temperature === "hot"
                            ? "뜨거운(HOT)"
                            : "차가운(ICE)"}
                        </p>
                        <p>{handleChangeDensity(item.density)}</p>
                      </div>
                    )}

                    <div className="flex justify-between items-center mt-3">
                      <div className="flex items-center space-x-3">
                        <button
                          className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center"
                          onClick={() =>
                            removeCartHandler(
                              item.id,
                              item.temperature,
                              item.density
                            )
                          }
                        >
                          <span className="text-gray-600">-</span>
                        </button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <button
                          className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center"
                          onClick={() => addToCartHandler(item)}
                        >
                          <span className="text-gray-600">+</span>
                        </button>
                      </div>
                      <p className="font-medium text-gray-800">
                        {(item.quantity * itemPrice(item)).toLocaleString()}원
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* 결제 정보 섹션 - 하단 고정 */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg">
          <div className="max-w-screen-md mx-auto">
            <div className="p-4 space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">남은 시간</span>
                <span className="text-red-600 font-medium">{timeLeft}초</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-gray-600">총 주문금액</span>
                <span className="text-lg font-bold">
                  {totalAmount.toLocaleString()}원
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-3">
                <button
                  onClick={(e) => deleteAll(e)}
                  className="px-4 py-3 rounded-lg bg-gray-200 text-gray-800 font-medium hover:bg-gray-300 transition-colors"
                >
                  전체삭제
                </button>
                <button
                  onClick={() => onMoveToOrderListWithPrice(cartItems)}
                  className="px-4 py-3 rounded-lg bg-[#c5e1bb] text-[#2d1b1b] font-medium hover:bg-[#b3d1a7] transition-colors"
                >
                  결제하기
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 하단 여백 - 고정된 결제 정보 섹션을 위한 공간 */}
        <div className="h-48"></div>
      </div>
    </div>
  );
};

export default Cart;
