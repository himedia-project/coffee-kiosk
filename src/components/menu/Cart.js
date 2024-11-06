import React from "react";
import { useDispatch, useSelector } from "react-redux";
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
    <div className="bg-white p-6 rounded-lg shadow-lg mt-5">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
        장바구니
      </h2>
      <div className="overflow-x-auto">
        {cartItems.length === 0 ? (
          <div className="text-center text-gray-400 mt-20 mb-20">
            {" "}
            장바구니에 상품이 없습니다.
          </div>
        ) : (
          <ul className="list-none p-0 flex space-x-4 m-2">
            {cartItems.map((item) => (
              <li
                key={`${item.id}-${item.temperature}-${item.density}`}
                className="flex-shrink-0 border border-gray-300 rounded-lg bg-white shadow-md transition-transform transform hover:scale-105 relative w-48"
              >
                <button
                  onClick={() =>
                    removeCartHandler(item.id, item.temperature, item.density)
                  }
                  className="absolute top-2 right-2 text-red-500 hover:text-red-700"
                >
                  ❌
                </button>
                <div className="flex flex-col items-center p-4">
                  <img
                    src={item.url}
                    alt={item.name}
                    className="w-24 h-auto mx-auto"
                  />
                  <h3 className="text-lg font-semibold mt-2">{item.name}</h3>
                  <div className="display inline-flex">
                    <button
                      className="mr-2"
                      onClick={() =>
                        removeCartHandler(
                          item.id,
                          item.temperature,
                          item.density
                        )
                      }
                    >
                      ➖{" "}
                    </button>
                    <p className="text-sm">수량: {item.quantity}</p>
                    <button
                      className="ml-2"
                      onClick={() => addToCartHandler(item)}
                    >
                      ➕
                    </button>
                  </div>
                  <p className="text-sm">가격: {itemPrice(item)} 원</p>
                  <p className="text-sm">
                    온도 선택:{" "}
                    {item.temperature === "hot" ? "뜨거운(HOT)" : "차가운(ICE)"}
                  </p>
                  <p className="text-sm">
                    옵션 선택: {handleChangeDensity(item.density)}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="mt-6">
        <button
          onClick={deleteAll}
          className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
        >
          전체삭제
        </button>
        <p className="mt-2 text-lg">총 수량: {totalQuantity()}</p>
        <p className="text-lg">주문 금액: {totalAmount} 원</p>
        <button
          onClick={() => onMoveToOrderList(cartItems)}
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          주문목록으로 이동
        </button>
      </div>
    </div>
  );
};

export default Cart;
