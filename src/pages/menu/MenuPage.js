import React, { useState, useEffect } from "react";
import Category from "../../components/menu/Category";
import MenuItem from "../../components/menu/MenuItem";
import CartList from "../../components/menu/CartList";
import Header from "../../layouts/Header";
import ItemOptionModal from "../../components/modal/ItemOptionModal";
import OrderListModal from "../../components/modal/OrderListModal";
import LocationSelect from "../../components/order/LocationSelect";
import Payment from "../../components/order/Payment";

const initialCartItems = [
  {
    id: 15,
    name: "헤이즐넛아메리카노",
    price: 2500,
    url: "https://img.79plus.co.kr/megahp/manager/upload/menu/20240610110133_1717984893137_AqJAuHaq0t.jpg",
    temperature: "hot",
    density: "light",
    densityPrice: 1000,
    quantity: 3,
  },

  {
    id: 16,
    name: "큐브라뗴",
    price: 3800,
    url: "https://img.79plus.co.kr/megahp/manager/upload/menu/20240610132523_1717993523193_4mNdkfnxvz.jpg",
    temperature: "hot",
    density: "double",
    densityPrice: 1000,
    quantity: 2,
  },
  {
    id: 17,
    name: "콜드브루오리지널",
    price: 3800,
    url: "https://img.79plus.co.kr/megahp/manager/upload/menu/20240610132948_1717993788811_j_eYzA1Esd.jpg",
    temperature: "ice",
    density: "extra",
    densityPrice: 2000,
    quantity: 1,
  },
  {
    id: 18,
    name: "꿀아메리카노",
    price: 3800,
    url: "https://img.79plus.co.kr/megahp/manager/upload/menu/20240610133054_1717993854434_bTty_9u3br.jpg",
    temperature: "ice",
    density: "basic",
    densityPrice: 1000,
    quantity: 1,
  },
];

const MenuPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const [selectedItem, setSelectedItem] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isOrderOpen, setOrderOpen] = useState(false);
  const [isLocationOpen, setLocationOpen] = useState(false);
  const [isPaymentOpen, setPaymentOpen] = useState(false);
  const [orderItems, setOrderItems] = useState([]);

  useEffect(() => {
    setSelectedCategory("커피"); // 기본 카테고리 설정
  }, []); // 컴포넌트가 처음 마운트될 때만 실행

  const handleOrderTestClick = () => {
    setOrderOpen(true);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
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

  return (
    <div>
      <Header />
      <Category
        setSelectedCategory={setSelectedCategory}
        selectedCategory={selectedCategory}
      />
      {selectedCategory ? (
        <>
          <MenuItem
            category={selectedCategory}
            onItemClick={handleItemClick}
            onOrderTestClick={handleOrderTestClick}
          />
          <CartList cartItems={initialCartItems} />
        </>
      ) : (
        <p>카테고리를 선택하세요.</p>
      )}
      {isOpen && (
        <ItemOptionModal
          category={selectedCategory}
          selectedItem={selectedItem}
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

export default MenuPage;
