import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Test from "./test/Test";
import Category from "./components/Category";
import MenuItem from "./components/MenuItem";
import OptionSelect from "./components/OptionSelect";
import Cart from "./components/Cart";
import OrderList from "./components/OrderList";
import Payment from "./components/Payment";
import Home from "./components/Home";
import LocationSelect from "./components/LocationSelect";

function App() {
  return (
    <>
      {/* 테스트용 컴포넌트, 개발시 디자인프레임워크 체크용 */}
      {/* <Test /> */}
      <BrowserRouter>
        {" "}
        <Routes>
          {" "}
          <Route path="/" element={<Home />} />
          <Route path="/category" element={<Category />} />
          <Route path="/menu/:category" element={<MenuItem />} />
          <Route path="/options/:item" element={<OptionSelect />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/orders" element={<OrderList />} />
          <Route path="/location" element={<LocationSelect />} />{" "}
          {/* 장소 선택 경로 추가 */}
          <Route path="/payment" element={<Payment />} />
        </Routes>{" "}
      </BrowserRouter>
    </>
  );
}

export default App;
