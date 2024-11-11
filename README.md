# ☕️ Mega I's Coffee 키오스크 프로젝트
- 2024 하이미디어에서 진행한 "카페 키오스크"를 구현하는 그룹 프로젝트 
- 미션 기간: `2024-11-04 ~ 2024-11-11`
- 프로젝트 Docs -> https://rain-tank-b79.notion.site/2-React-11-04-11-11-12fcd31e8d3a80ae8882c56f06e8bf37?pvs=4

<br />

## 🧑🏻‍💻팀원 소개
| 팀장 | 팀원 | 팀원 |
|------|------|------|
| [mooh2jj](https://github.com/mooh2jj) | [jooys98](https://github.com/jooys98) | [Daniel980328](https://github.com/Daniel980328) |


<br>

## 🖥️ 동작 화면

![mega-is-coffee_Mobile_시연영상_20241109_resize](https://github.com/user-attachments/assets/04143d0a-c47f-4277-bdd1-bfdb83e1f272)




<br>

## 🔧️ 개발 환경
### Front-End

![](https://img.shields.io/badge/-ReactJs-61DAFB?logo=react&logoColor=white&style=flat)
![](https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white&style=flat)
![](https://camo.githubusercontent.com/a91f29fbfde227665b0cd5a447c0b035180e8a285bfef1ec8d91c8ba80fcaa20/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f547970657363726970742d3331373843363f7374796c653d666c6174266c6f676f3d54797065536372697074266c6f676f436f6c6f723d7768697465)
![](https://camo.githubusercontent.com/e3883202fdd9cb44fd6a62f35730342d5cd477c3d76a2140aa38aa87eac6b224/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d56697375616c25323053747564696f253230436f64652d3030374143433f7374796c653d666c6174266c6f676f3d56697375616c25323053747564696f253230436f6465266c6f676f436f6c6f723d7768697465)

- CRA (Create React App)
- TailwindCSS / Maturial UI
- React: `^18.3.1`
- react-redux: `^9.1.2`
- react-router-dom: `^6.27.0`
- "react-swipeable": `^7.0.2`
- @types/node: `^20.3.1`
- @types/react: `^18.2.13`
- @types/react-dom: `^18.2.6`
- fortawesome: `^6.6.0`
- react-dom: `^18.3.1`
- react-scripts: `5.0.1`


<br>

## ☸️ 상세 기능

```
✳️ 홈화면
🌟 카테고리 [ 커피(HOT), 커피(ICE), 에이드&티, 음료, 디저트 ]
🌟 커피 리스트
🌟 옵션상품 선택창 (상품명, 상품가격) 옵션 (뜨거운(HOT) / 차가운(ICE)) 
(농도(선택, 단일선택) 기본(+0원), 연하게(+0), 샷 추가(+500원), 2샷 추가(+1000원)) 
 => 취소, 주문담기
 

🌟 장바구니 => 남은 시간, 총금액, 전체삭제, 결제하기
🌟 디저트 옵션상품 선택창
 => 취소, 주문담기
 
⚙️ 주문정보 check창
 상품명   수량  가격
 
 총수량  #개 결제금액 #,###원
 => 취소, 다음
 
🌟 장소 선택
 매장 / 포장
 => 취소, 다음
 
⚙️ 카드 결제
 총결제금액  #,###원
 할부개월    일시불
 카드번호    ****_****_****_****
 => 취소, 승인 요청
 
⚙️ 결제 완료 화면 (5초)
 => 결제 완료되었습니다.
```

<br>

## 🗃️ 폴더구조

```bash
│  App.css
│  App.js
│  App.test.js
│  index.css
│  index.js
│  logo.svg
│  reportWebVitals.js
│  setupTests.js
│  store.js
│
├─components
│  │  Home.js
│  │
│  ├─menu
│  │      Cart.js
│  │      Category.js
│  │      MenuItem.js
│  │      
│  ├─modal
│  │      AlertModal.js
│  │      ConfirmModal.js
│  │      ItemOptionModal.js
│  │      OrderListModal.js
│  │
│  └─order
│          LocationSelect.js
│          OrderList.js
│          Payment.js
│          PaymentComplete.js
│
├─data
│      itemData.js
│
├─layouts
│      Header.js
│
├─pages
│  └─menu
│          MenuPage.js
│
├─slices
│      cartSlice.js
│
├─slick
│      Arrow.js
│      SlickSlider.css
│      SlickSlider.js
│
└─test
        Test.js
```

<br>

## 📕 라이브러리

```bash
# React Router
npm install react-router-dom

# Redux
npm install @reduxjs/toolkit react-redux

# Tailwind CSS
npm install -D tailwindcss
npx tailwindcss init

# DaisyUI (Tailwind CSS 플러그인)
npm install daisyui

# font awesome 
npm install @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons @fortawesome/fontawesome-svg-core

# Material-UI (MUI) -> Skeleton 은 여기서
npm install @mui/material @emotion/react @emotion/styled

# 스와이핑 기능
npm install react-swipeable@7.0.2

# 반응형 캐러셀(슬라이더) 기능을 제공
npm install slick-carousel@1.8.1
```

