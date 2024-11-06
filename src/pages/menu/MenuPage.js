import React, { useEffect, useState } from "react";
import Cart from "../../components/menu/Cart";
import Category from "../../components/menu/Category";
import MenuItem from "../../components/menu/MenuItem";
import ItemOptionModal from "../../components/modal/ItemOptionModal";
import OrderListModal from "../../components/modal/OrderListModal";
import LocationSelect from "../../components/order/LocationSelect";
import Payment from "../../components/order/Payment";
import Header from "../../layouts/Header";

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
          <MenuItem category={selectedCategory} onItemClick={handleItemClick} />
          <Cart />
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
