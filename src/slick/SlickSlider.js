import React from "react";
import Slider from "react-slick/lib/slider";
import MenuItem from "../components/menu/MenuItem";
import itemData from "../data/itemData";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SlickSlider.css";


  const settings = {
    dots: true, //하단에 있는 페이지 동그라미
    infinite: false, //무한 스크롤 x
    speed: 500, //넘기는 속도
    slidesToShow: 6,
    slidesToScroll: 6,
    nextArrow: (
        <div
          style={{
            display: 'block',
            background: 'blue',
            padding: '10px',
            cursor: 'pointer',
            borderRadius: '50%',
          }}
        >
          ▶
        </div>
      ),
      prevArrow: (
        <div
          style={{
            display: 'block',
            background: 'red',
            padding: '10px',
            cursor: 'pointer',
            borderRadius: '50%',
          }}
        >
          ◀
        </div>
      ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
const SlickSlider = ({category}) =>{
    // console.log("category :",category);
const coffeeItems = itemData[category];
  return (
    <Slider {...settings}>
      {coffeeItems.map((item) => (
        <div key={item.id} className="slider-item">
          <img src={item.url} alt={item.name} />
          <h3>{item.name}</h3>
          <p>{item.price}원</p>
        </div>
      ))}
    </Slider>
  );
};

export default SlickSlider;
