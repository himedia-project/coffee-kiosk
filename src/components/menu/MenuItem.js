import React, { useState } from "react";
import itemData from "../../data/itemData";
import ItemOptionModal from "../modal/ItemOptionModal";
import OrderListModal from "../modal/OrderListModal";
import LocationSelect from "../order/LocationSelect";
import Payment from "../order/Payment";
import CartList from "./CartList";

const initialCartItems = [
  {
    id: 15,
    name: "헤이즐넛아메리카노",
    price: 2500,
    url: "https://img.79plus.co.kr/megahp/manager/upload/menu/20240610110133_1717984893137_AqJAuHaq0t.jpg",
  },

  {
    id: 16,
    name: "큐브라뗴",
    price: 3800,
    url: "https://img.79plus.co.kr/megahp/manager/upload/menu/20240610132523_1717993523193_4mNdkfnxvz.jpg",
  },
  {
    id: 17,
    name: "콜드브루오리지널",
    price: 3800,
    url: "https://img.79plus.co.kr/megahp/manager/upload/menu/20240610132948_1717993788811_j_eYzA1Esd.jpg",
  },
  {
    id: 18,
    name: "꿀아메리카노",
    price: 3800,
    url: "https://img.79plus.co.kr/megahp/manager/upload/menu/20240610133054_1717993854434_bTty_9u3br.jpg",
  },
];

const MenuItem = ({ category }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isOrderOpen, setOrderOpen] = useState(false);
  const [isLocationOpen, setLocationOpen] = useState(false);
  const [isPaymentOpen, setPaymentOpen] = useState(false);
  const [orderItems, setOrderItems] = useState([]);

  const [cartItems, setCartItems] = useState(initialCartItems); // 장바구니 아이템 상태 추가

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    // setOrderOpen(false);
    // setLocationOpen(false);
    // setPaymentOpen(false);
    setSelectedItem(null);
  };

  const closeOrderListModal = () => {
    setOrderOpen(false);
  };

  const closeLocationSelectModal = () => {
    setLocationOpen(false);
  };

  const closePaymentOpenModal = () => {
    setPaymentOpen(false);
  };

  const handleOrderTestClick = () => {
    setOrderOpen(true);
  };

  const handleOrderComplete = (items) => {
    setOrderItems(items);
    setOrderOpen(false);
    setLocationOpen(true);
  };

  const handleNextToLocation = () => {
    setOrderOpen(false);
    setLocationOpen(true);
  };

  const handleLocationSelect = () => {
    setLocationOpen(false);
    setPaymentOpen(true);
  };

  const handlePaymentComplete = () => {
    setPaymentOpen(false);
  };

  const handleAddToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]); // 아이템을 장바구니에 추가
    closeModal();
  };

  return (
    <div className="flex flex-col items-center text-center p-5 bg-gray-100 overflow-y-auto w-full h-[600px]">
      <h2 className="text-2xl font-bold mb-5">{category} 메뉴</h2>
      <button onClick={handleOrderTestClick}>주문 테스트 버튼</button>
      <ul className="flex flex-wrap justify-center list-none p-0 w-[1280px]">
        {itemData[category]?.map((item) => (
          <li
            key={item.id}
            className="m-2 border border-gray-300 rounded-lg overflow-hidden w-40 bg-white transition-transform transform hover:scale-105 cursor-pointer flex flex-col items-center"
            onClick={() => handleItemClick(item)}
          >
            <img
              src={item.url}
              alt={item.name}
              className="w-24 h-auto mx-auto"
            />
            <span className="text-lg mt-2">{item.name}</span>
            <span className="text-sm text-gray-600 mb-2">{item.price}원</span>
          </li>
        ))}
      </ul>
      <div className="mt-auto">
        {" "}
        {/* Ensure CartList is at the bottom */}
        <CartList cartItems={cartItems} /> {/* 장바구니 리스트 렌더링 */}
      </div>
      {isOpen && (
        <ItemOptionModal
          category={category}
          selectedItem={selectedItem}
          onAddToCart={handleAddToCart}
          closeModal={closeModal}
        />
      )}
      {isOrderOpen && (
        <OrderListModal
          onComplete={handleOrderComplete}
          onNext={handleNextToLocation} // onNext 전달
          closeModal={closeOrderListModal}
        />
      )}
      {isLocationOpen && (
        <LocationSelect
          onSelect={handleLocationSelect}
          closeModal={closeLocationSelectModal}
        />
      )}
      {isPaymentOpen && (
        <Payment
          orderItems={orderItems}
          onComplete={handlePaymentComplete}
          closeModal={closePaymentOpenModal}
        />
      )}
    </div>
  );
};

export default MenuItem;
