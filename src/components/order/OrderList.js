import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const dummyData = [
  { name: "딸기라떼", quantity: 1, price: 3500 },
  { name: "(HOT) 아메리카노", quantity: 1, price: 1500 },
  { name: "사과생크림와플", quantity: 1, price: 3500 },
] // 말 그대로 시험용 더미 데이터


const OrderList = ({ setOrderItems }) => {
  const navigate = useNavigate();

  const handleClick = () => { 
    setOrderItems(dummyData); // dummyData를 orderItems로 설정 
    navigate("/payment"); // 결제 페이지로 이동 
    };

  return (
    <div>
      <h2>주문 목록</h2>
      <ul>
        {dummyData.map((item, index) => ( //함수 이름 바꿔야 됨
          <li key={index}>
            {item.name} - 수량: {item.quantity}, 가격: {item.price}원
          </li>
        ))}
      </ul>
      
      <Link to="/location" onClick={handleClick}>장소 선택으로 이동</Link> 
    </div>
  );
};

export default OrderList;
