import React from "react";
import { Link, useParams } from "react-router-dom";

const MenuItem = () => {
  const { category } = useParams();
  const itemData = {
    커피: [
      {
        id: 1,
        name: "아메리카노",
        price: 3000,
        url: "https://img.79plus.co.kr/megahp/manager/upload/menu/20240610105645_1717984605982_8i5CoHU2NV.jpg",
      },
      {
        id: 2,
        name: "연유라떼",
        price: 3500,
        url: "https://img.79plus.co.kr/megahp/manager/upload/menu/20240610132459_1717993499610_KiXcTR2q5P.jpg",
      },
      {
        id: 3,
        name: "바닐라라떼",
        price: 4000,
        url: "https://img.79plus.co.kr/megahp/manager/upload/menu/20240610104603_1717983963750_lApih2z1h0.jpg",
      },
      {
        id: 4,
        name: "에스프레소",
        price: 4000,
        url: "https://img.79plus.co.kr/megahp/manager/upload/menu/20240610105357_1717984437294_AduuhU3VyW.jpg",
      },
    ],
    "에이드&티": [
      {
        id: 5,
        name: "레몬 에이드",
        price: 4500,
        url: "https://img.79plus.co.kr/megahp/manager/upload/menu/20240610114557_1717987557279_GKXThr0HAc.jpg",
      },
      {
        id: 6,
        name: "블루레몬 에이드",
        price: 4000,
        url: "https://img.79plus.co.kr/megahp/manager/upload/menu/20240610132302_1717993382502_3JianCydlm.jpg",
      },
    ],
    음료: [
      {
        id: 7,
        name: "녹차라떼",
        price: 2000,
        url: "https://img.79plus.co.kr/megahp/manager/upload/menu/20240610112917_1717986557781__XIcwRbg0h.jpg",
      },
      {
        id: 8,
        name: "아이스초코",
        price: 3000,
        url: "https://img.79plus.co.kr/megahp/manager/upload/menu/20240610132420_1717993460739_Yi5zAd90Og.jpg",
      },
    ],
    디저트: [
      {
        id: 9,
        name: "브라우니 쿠키 머핀",
        price: 4500,
        url: "https://img.79plus.co.kr/megahp/manager/upload/menu/20240904232518_1725459918405_0rSgMhHWNZ.jpg",
      },
      {
        id: 10,
        name: "아이스 허니 와앙 슈",
        price: 2500,
        url: "https://img.79plus.co.kr/megahp/manager/upload/menu/20220701142420_1656653060846_ob6NNIwqms.jpg",
      },
      {
        id: 11,
        name: "플레인크로플",
        price: 3500,
        url: "https://img.79plus.co.kr/megahp/manager/upload/menu/20220701141927_1656652767760_yc4rsWS5yT.jpg",
      },
    ],
  };

  return (
    <div>
      <h2>{category} 메뉴</h2>
      <ul>
        {itemData[category]?.map((item) => (
          <li key={item.id}>
            <Link to={`/options/${item.id}`}>
              {item.name} |{" "}
              <img
                src={item.url}
                alt={item.name}
                style={{ width: "70px", height: "auto" }}
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuItem;
