import { createStore } from "redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";
//configureStore : 리덕스 기본 설정
//createSlice : 액션 + reducer를 함께 정의할 수 있음

const initialState = {
  //장바구니의 초기 상태 (빈배열)
  cartItems: [],
  totalAmount: 0,
};

const cartSlice = createSlice({
  //장바구니와 관련된 리듀서와 액션을 정의
  name: "cart", //슬라이스의 이름 정의
  initialState, // 위에서 선언한 초기 상태

  reducers: {
    // 상태를 변경하는 함수들을 선언



    
    //장바구니 추가 함수
    addToCart: (state, action) => {
      const { item, temperature, density } = action.payload;
      const existingItem = state.cartItems.find(
        (cartItem) =>
          cartItem.id === item.id &&
          cartItem.temperature === temperature &&
          cartItem.density === density
      );
      //state.cartItems : 장바구니 안의 아이템 목록
      //action.payload.id : 추가할 아이템의 id
      //.find : 중복을 확인하는 문법
      //추가할 아이템의 아이디와 장바구니에 이미 존재하는 아이템의 아이디를 비교함

      if (existingItem) {
        //existingItem 의 함수가 true 라면
        existingItem.quantity += 1; // 수량 증가
      } else {
        const newItem = {
          ...item,
          temperature,
          density,
          quantity: 1,
        };
        state.cartItems.push(newItem); // 새 아이템 추가
      } //...action.payload : 장바구니 추가 아이템의 정보를 가져옴
      //quantity: 1 추가된 아이템의 수량을 1로 설정해놓음

      state.totalAmount +=
        item.price +
        (density === "extra" ? 500 : density === "double" ? 1000 : 0);
    },

    removeFromCart: (state, action) => {
      const { id, temperature, density } = action.payload;

      const itemIndex = state.cartItems.findIndex(
        (item) =>
          item.id === id &&
          item.temperature === temperature &&
          item.density === density
      );

      if (itemIndex !== -1) {
        const deleteItem = state.cartItems[itemIndex];

        if (deleteItem.quantity > 1) {
          deleteItem.quantity -= 1; // 수량 감소
        } else {
          state.cartItems.splice(itemIndex, 1); // 수량이 1이면 장바구니에서 제거
        }

        // 총 금액 업데이트
        const densityPrice =
          deleteItem.density === "extra"
            ? 500
            : deleteItem.density === "double"
            ? 1000
            : 0;
        state.totalAmount -= deleteItem.price + densityPrice;
      }

     
    },

    clearCart : (state) => {
      state.cartItems =[];
      state.totalAmount=0;
    }
    
  }
});

//슬라이스에서 정의한 함수들을 내보내서 다른 컴포넌트에서 사용할 수 있게 한다
// 액션과 리듀서를 export
export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

// 스토어 생성
const store = configureStore({
  //상태관리 로직
  reducer: {
    cart: cartSlice.reducer,
  },
});

export default store;
