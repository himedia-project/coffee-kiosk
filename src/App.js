import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import MenuPage from "./pages/menu/MenuPage";
import store from "./store";

function App() {
  return (
    <>
      {/* 테스트용 컴포넌트, 개발시 디자인프레임워크 체크용 */}
      {/* <Test /> */}
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<MenuPage />} />
          </Routes>{" "}
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
