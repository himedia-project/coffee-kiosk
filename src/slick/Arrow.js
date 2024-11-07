import React from "react";
import SlickSlider from "./SlickSlider";

import React from 'react';

// 오른쪽(다음) 화살표 컴포넌트
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'blue' }}
      onClick={onClick}
    />
  );
}

// 왼쪽(이전) 화살표 컴포넌트
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'red' }}
      onClick={onClick}
    />
  );
}

export default Arrow;