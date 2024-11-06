import React from "react";

const CartList = ({ cartItems }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">장바구니</h2>
      {cartItems.length === 0 ? (
        <p>장바구니에 아이템이 없습니다.</p>
      ) : (
        <ul className="list-none p-0">
          {cartItems.map((item) => (
            <li
              key={item.id}
              className="flex justify-between items-center border-b py-2"
            >
              <div className="flex items-center">
                <img
                  src={item.url}
                  alt={item.name}
                  className="w-12 h-12 mr-2"
                />
                <span>{item.name}</span>
              </div>
              <span>{item.price}원</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartList;
