import React, { useEffect, useState } from "react";
import Cart from "../../components/menu/Cart";
import Category from "../../components/menu/Category";
import MenuItem from "../../components/menu/MenuItem";
import ItemOptionModal from "../../components/modal/ItemOptionModal";
import OrderListModal from "../../components/modal/OrderListModal";
import LocationSelect from "../../components/order/LocationSelect";
import Payment from "../../components/order/Payment";
import Header from "../../layouts/Header";
import AlertModal from "../../components/modal/AlertModal";
import itemData from "../../data/itemData";



const MenuPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isOrderOpen, setOrderOpen] = useState(false);
  const [isLocationOpen, setLocationOpen] = useState(false);
  const [isPaymentOpen, setPaymentOpen] = useState(false);
  const [orderItems, setOrderItems] = useState([]);
  const [isEmptyItems, setIsEmptyItems] = useState(false);
  const [isSoldOutItem, setIsSoldOutItem] = useState(false);

  useEffect(() => {
    setSelectedCategory("커피"); // 기본 카테고리 설정
  }, []); // 컴포넌트가 처음 마운트될 때만 실행

  const items = itemData[selectedCategory] || [];

  const handleItemClick = (item) => {
    if (item.soldOut === true) {
      setIsSoldOutItem(true);
    } else {
      setSelectedItem(item);
      setIsOpen(true);
    }
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
    if (items.length === 0) {
      setIsEmptyItems(true);
    } else {
      setOrderItems(items);
      setOrderOpen(true);
    }
  };

  const closeItemsEmptyAlertModal = () => {
    setIsEmptyItems(false);
  };

  const soldOutItemAlertModal = () => {
    //
    setIsSoldOutItem(false);
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
          <Cart onMoveToOrderList={handleOrderComplete} />
        </>
      ) : (
        <p>카테고리를 선택하세요.</p>
      )}
      {isSoldOutItem && (
        <AlertModal
          message={"품절된 상품입니다!"}
          closeModal={soldOutItemAlertModal}
        />
      )}
      {isEmptyItems && (
        <AlertModal
          message={"상품이 비었습니다!"}
          closeModal={closeItemsEmptyAlertModal}
        />
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
          onNext={handleNextToLocation}
          closeModal={closeOrderListModal}
          dummyData={orderItems}
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
