import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Cart from "./components/menu/Cart";
import Category from "./components/menu/Category";
import LocationSelect from "./components/order/LocationSelect";
import OrderList from "./components/order/OrderList";
import Payment from "./components/order/Payment";
import MenuPage from "./pages/menu/MenuPage";
import { useState } from "react";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  const [orderItems, setOrderItems] = useState([]);
  return (
    <>
      {/* 테스트용 컴포넌트, 개발시 디자인프레임워크 체크용 */}
      {/* <Test /> */}
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<MenuPage category="coffee" />} />
          </Routes>{" "}
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
