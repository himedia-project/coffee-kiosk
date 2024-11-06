import React from "react";

const CartList = ({ cartItems }) => {
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

  return (
    <div className="bg-white-100 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">장바구니</h2>
      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500">
          장바구니에 아이템이 없습니다.
        </p>
      ) : (
        <ul className="list-none p-0 flex flex-wrap justify-center">
          {cartItems.map((item) => (
            <li
              key={item.id}
              className="m-4 border border-gray-300 rounded-lg overflow-hidden w-48 bg-white shadow-md transition-transform transform hover:scale-105"
            >
              <img
                src={item.url}
                alt={item.name}
                className="w-full h-32 object-cover"
              />
              <div className="p-4">
                <span className="block text-lg font-semibold">{item.name}</span>
                <span className="text-sm text-gray-600">{item.price}원</span>
                <div className="text-sm text-gray-600 mt-2">
                  <span>수량: {item.quantity}</span>
                </div>
                <div className="text-sm text-gray-600">
                  <span>ㄴ</span>
                  <span>{handleChangeDensity(item.density)}</span>
                </div>
                <div className="text-sm text-gray-600">
                  <span>ㄴ</span>
                  <span>
                    {item.temperature === "hot" ? "뜨거운(HOT)" : "차가운(ICE)"}
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartList;
