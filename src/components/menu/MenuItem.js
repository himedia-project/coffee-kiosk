import React, { useState } from "react";
import itemData from "../../data/itemData";
import { useDispatch ,useSelector } from "react-redux";
import { addToCart } from "../../store";
import ItemOptionModal from "../modal/ItemOptionModal";
import OrderListModal from "../modal/OrderListModal";
import LocationSelect from "../order/LocationSelect";
import Payment from "../order/Payment";

const MenuItem = ({ category }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isOpen, setIsOpen] = useState(false);


  const [selectedTemperature, setSelectedTemperature] = useState("hot"); // 기본값 설정
  const [selectedDensity, setSelectedDensity] = useState("basic");
  const dispatch = useDispatch();

  const totalAmount = () => {
    const basePrice = selectedItem.price;
    const densityPrice =
      selectedDensity === "extra"
        ? 500
        : selectedDensity === "double"
        ? 1000
        : 0;
    //선택된 농도가 extra면 500 => (1샷추가)
    //선택된 농도가 extra가 아니라면 1000 =>(2배 진하게)
    //앞의 두 조건이 둘다 거짓이라면 0
    return basePrice + densityPrice;
  };
  //densityPrice: 선택된 농도에 따른 추가금액


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
    setSelectedTemperature("hot"); // 모달 닫을 때 기본값으로 초기화
    setSelectedDensity("basic");
  };

 

  const addToCartHandler = () => {
    dispatch(addToCart({ 
      item: selectedItem, 
      temperature: selectedTemperature, 
      density: selectedDensity 
    }));
    closeModal();
    console.log("add");
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

      {isOpen && (
        <ItemOptionModal
          category={category}
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

export default MenuItem;
