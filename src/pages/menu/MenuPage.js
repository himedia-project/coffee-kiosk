import React, { useEffect, useState } from "react";
import Cart from "../../components/menu/Cart";
import Category from "../../components/menu/Category";
import MenuItem from "../../components/menu/MenuItem";
import AlertModal from "../../components/modal/AlertModal";
import ConfirmModal from "../../components/modal/ConfirmModal";
import ItemOptionModal from "../../components/modal/ItemOptionModal";
import OrderListModal from "../../components/modal/OrderListModal";
import LocationSelect from "../../components/order/LocationSelect";
import Payment from "../../components/order/Payment";
import Header from "../../layouts/Header";

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

  const [confirmModal, setConfirmModal] = useState(false);
  const [isEmptyCartModal, setIsEmptyCartModal] = useState(false);
  const [handleConfirmAction, setHandleConfirmAction] = useState(null);

  useEffect(() => {
    setSelectedCategory("커피"); // 기본 카테고리 설정
  }, []); // 컴포넌트가 처음 마운트될 때만 실행

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

  // 상품이 비어있을 때 알림창 닫기
  const closeItemsEmptyAlertModal = () => {
    setIsEmptyItems(false);
  };

  const soldOutItemAlertModal = () => {
    // 품절 알림창 닫기
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

  // 장바구니 비우기 확인 모달 함수
  const showConfirmModal = (confirmAction) => {
    setConfirmModal(true);
    setHandleConfirmAction(() => confirmAction);
  };

  // 장바구니 비우기 확인 함수
  const handleConfirm = () => {
    if (handleConfirmAction) {
      handleConfirmAction();
    }
    setConfirmModal(false);
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
          <div className="bg-gray-100">
            <MenuItem
              category={selectedCategory}
              onItemClick={handleItemClick}
            />
          </div>
          <Cart
            onMoveToOrderList={handleOrderComplete}
            onShowConfirmModal={showConfirmModal}
            onShowEmptyCartModal={() => setIsEmptyCartModal(true)}
          />
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
      {/* 모달들을 MenuPage 레벨로 이동 */}
      {confirmModal && (
        <ConfirmModal
          message="장바구니를 정말 비우시겠습니까?"
          onConfirm={handleConfirm}
          onCancel={() => setConfirmModal(false)}
        />
      )}
      {isEmptyCartModal && (
        <AlertModal
          message="장바구니가 비어있습니다!"
          closeModal={() => setIsEmptyCartModal(false)}
        />
      )}
    </div>
  );
};

export default MenuPage;
