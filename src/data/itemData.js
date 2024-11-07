const itemData = {
  커피: [
    {
      id: 1,
      name: "아메리카노",
      price: 2500,
      url: "https://img.79plus.co.kr/megahp/manager/upload/menu/20240610105645_1717984605982_8i5CoHU2NV.jpg",
      soldOut: true,
    },
    {
      id: 2,
      name: "바닐라 아메리카노",
      price: 2700,
      url: "https://img.79plus.co.kr/megahp/manager/upload/menu/20240610133038_1717993838652__Ax_Xwuz6T.jpg",
      soldOut: true,
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
      price: 2000,
      url: "https://img.79plus.co.kr/megahp/manager/upload/menu/20240610105357_1717984437294_AduuhU3VyW.jpg",
    },

    {
      id: 5,
      name: "메가리카노",
      price: 3000,
      url: "https://img.79plus.co.kr/megahp/manager/upload/menu/20240610132223_1717993343456_4KESgpG57t.jpg",
    },

    {
      id: 6,
      name: "연유라떼",
      price: 3900,
      url: "https://img.79plus.co.kr/megahp/manager/upload/menu/20240610132459_1717993499610_KiXcTR2q5P.jpg",
    },

    {
      id: 7,
      name: "할메가커피",
      price: 2500,
      url: "https://img.79plus.co.kr/megahp/manager/upload/menu/20240610113252_1717986772176_6c36zo5yuf.jpg",
      isNew: true,
    },

    {
      id: 8,
      name: "티라미수라뗴",
      price: 3800,
      url: "https://img.79plus.co.kr/megahp/manager/upload/menu/20240610132847_1717993727622_rgN3k3NGOE.jpg",
    },
    {
      id: 9,
      name: "카라멜마끼아또",
      price: 3800,
      url: "https://img.79plus.co.kr/megahp/manager/upload/menu/20240610105805_1717984685954_T1qos0ocDV.jpg",
      isRecommended: true,
    },

    {
      id: 10,
      name: "카페모카",
      price: 3800,
      url: "https://img.79plus.co.kr/megahp/manager/upload/menu/20240610105838_1717984718108_ZB6aalHqIU.jpg",
      isRecommended: true,
    },

    {
      id: 11,
      name: "카페라떼",
      price: 3000,
      url: "https://img.79plus.co.kr/megahp/manager/upload/menu/20240610105821_1717984701991_RUKCqSZ_HO.jpg",
    },

    {
      id: 12,
      name: "카푸치노",
      price: 3500,
      url: "https://img.79plus.co.kr/megahp/manager/upload/menu/20240610105852_1717984732750_WEt0KXVcnQ.jpg",
    },

    {
      id: 13,
      name: "콜드브루라떼",
      price: 3500,
      url: "https://img.79plus.co.kr/megahp/manager/upload/menu/20240610105923_1717984763591_cKSGllWUzt.jpg",
    },

    {
      id: 14,
      name: "헤이즐넛 라떼",
      price: 3500,
      url: "https://img.79plus.co.kr/megahp/manager/upload/menu/20240610110117_1717984877061_sLiVRNPq6J.jpg",
    },

    {
      id: 15,
      name: "헤이즐넛아메리카노",
      price: 3000,
      url: "https://img.79plus.co.kr/megahp/manager/upload/menu/20240610110133_1717984893137_AqJAuHaq0t.jpg",
      isNew: true,
    },

    {
      id: 16,
      name: "큐브라뗴",
      price: 3800,
      url: "https://img.79plus.co.kr/megahp/manager/upload/menu/20240610132523_1717993523193_4mNdkfnxvz.jpg",
    },
    {
      id: 17,
      name: "콜드브루오리지널",
      price: 3800,
      url: "https://img.79plus.co.kr/megahp/manager/upload/menu/20240610132948_1717993788811_j_eYzA1Esd.jpg",
    },
    {
      id: 18,
      name: "꿀아메리카노",
      price: 3800,
      url: "https://img.79plus.co.kr/megahp/manager/upload/menu/20240610133054_1717993854434_bTty_9u3br.jpg",
    },
  ],

  "에이드&티": [
    {
      id: 19,
      name: "레몬 에이드",
      price: 4500,
      url: "https://img.79plus.co.kr/megahp/manager/upload/menu/20240610114557_1717987557279_GKXThr0HAc.jpg",
      soldOut: true,
    },
    {
      id: 20,
      name: "블루레몬 에이드",
      price: 4000,
      url: "https://img.79plus.co.kr/megahp/manager/upload/menu/20240610132302_1717993382502_3JianCydlm.jpg",
      soldOut: true,
    },
    {
      id: 21,
      name: "자몽에이드",
      price: 4000,
      url: "https://img.79plus.co.kr/megahp/manager/upload/menu/20240610132602_1717993562754_oDf7jybQYy.jpg",
    },
    {
      id: 22,
      name: "레드오렌지자몽주스",
      price: 4500,
      url: "https://img.79plus.co.kr/megahp/manager/upload/menu/20240610114724_1717987644333_VifgWYO47n.jpg",
    },
    {
      id: 23,
      name: "샤인머스켓그린주스",
      price: 4500,
      url: "https://img.79plus.co.kr/megahp/manager/upload/menu/20240610114703_1717987623930_VIj7O6_wB4.jpg",
      isRecommended: true,
    },
    {
      id: 24,
      name: "딸기주스",
      price: 4500,
      url: "https://img.79plus.co.kr/megahp/manager/upload/menu/20240610114741_1717987661472_LqJw6WITHO.jpg",
    },
    {
      id: 25,
      name: "딸기바나나주스",
      price: 4800,
      url: "https://img.79plus.co.kr/megahp/manager/upload/menu/20240610114817_1717987697259_APSvRawmJi.jpg",
      isRecommended: true,
    },
    {
      id: 26,
      name: "라임모히또",
      price: 3800,
      url: "https://img.79plus.co.kr/megahp/manager/upload/menu/20240610132145_1717993305587_JyUa7vPj3s.jpg",
      isNew: true,
    },
    {
      id: 27,
      name: "청포도에이드",
      price: 4000,
      url: "https://img.79plus.co.kr/megahp/manager/upload/menu/20240610115123_1717987883226_DMMQB84jmS.jpg",
    },
    {
      id: 28,
      name: "유니콘매직에이드(블루)",
      price: 4800,
      url: "https://img.79plus.co.kr/megahp/manager/upload/menu/20240610132317_1717993397182_4Pp9UsAoPT.jpg",
      isNew: true,
    },
    {
      id: 29,
      name: "체리콕",
      price: 3800,
      url: "https://img.79plus.co.kr/megahp/manager/upload/menu/20240610132612_1717993572374_TDYT0F41KY.jpg",
    },
    {
      id: 30,
      name: "메가에이드",
      price: 4500,
      url: "https://img.79plus.co.kr/megahp/manager/upload/menu/20240610115027_1717987827980_oPj14Xi9y1.jpg",
    },
  ],
  음료: [
    {
      id: 31,
      name: "녹차라떼",
      price: 3000,
      url: "https://img.79plus.co.kr/megahp/manager/upload/menu/20240610112917_1717986557781__XIcwRbg0h.jpg",
      soldOut: true,
    },
    {
      id: 32,
      name: "아이스초코",
      price: 3000,
      url: "https://img.79plus.co.kr/megahp/manager/upload/menu/20240610132420_1717993460739_Yi5zAd90Og.jpg",
      soldOut: true,
    },
    {
      id: 33,
      name: "딸기라뗴",
      price: 3500,
      url: "https://img.79plus.co.kr/megahp/manager/upload/menu/20240610132103_1717993263530_CsdWhPUY2U.jpg",
    },
    {
      id: 34,
      name: "고구마라떼",
      price: 3800,
      url: "https://img.79plus.co.kr/megahp/manager/upload/menu/20240610104240_1717983760778_agCooQEUb4.jpg",
    },
    {
      id: 35,
      name: "곡물라떼",
      price: 3800,
      url: "https://img.79plus.co.kr/megahp/manager/upload/menu/20240610104323_1717983803197_Dpwa_RK4_F.jpg",
    },
    {
      id: 36,
      name: "토피넛라뗴",
      price: 3800,
      url: "https://img.79plus.co.kr/megahp/manager/upload/menu/20240610105954_1717984794244_2JeEMNYiCL.jpg",
      isRecommended: true,
    },
    {
      id: 37,
      name: "오레오초코라떼",
      price: 4000,
      url: "https://img.79plus.co.kr/megahp/manager/upload/menu/20240610132638_1717993598875_AQ4q6GUaJD.jpg",
      isRecommended: true,
    },
    {
      id: 38,
      name: "흑당버블밀크티라떼",
      price: 4400,
      url: "https://img.79plus.co.kr/megahp/manager/upload/menu/20240610112956_1717986596859_dSAYDVVaV2.jpg",
    },
    {
      id: 39,
      name: "흑당버블라떼",
      price: 4200,
      url: "https://img.79plus.co.kr/megahp/manager/upload/menu/20240610113023_1717986623453_FuG0kt97Jg.jpg",
      isNew: true,
    },
    {
      id: 40,
      name: "로얄밀크티라떼",
      price: 4000,
      url: "https://img.79plus.co.kr/megahp/manager/upload/menu/20240610115251_1717987971895_crJlbiHg7t.jpg",
    },
  ],
  디저트: [
    {
      id: 41,
      name: "브라우니 쿠키 머핀",
      price: 4500,
      url: "https://img.79plus.co.kr/megahp/manager/upload/menu/20240904232518_1725459918405_0rSgMhHWNZ.jpg",
      soldOut: true,
    },
    {
      id: 42,
      name: "아이스 허니 와앙 슈",
      price: 2500,
      url: "https://img.79plus.co.kr/megahp/manager/upload/menu/20220701142420_1656653060846_ob6NNIwqms.jpg",
      soldOut: true,
    },
    {
      id: 43,
      name: "플레인크로플",
      price: 3500,
      url: "https://img.79plus.co.kr/megahp/manager/upload/menu/20220701141927_1656652767760_yc4rsWS5yT.jpg",
    },
    {
      id: 44,
      name: "저당 우유 생크림 케익",
      price: 4200,
      url: "https://img.79plus.co.kr/megahp/manager/upload/menu/20241010005909_1728489549963_sapbSU5fVe.jpg",
    },
    {
      id: 45,
      name: "저당 초코 생크림 케익",
      price: 4200,
      url: "https://img.79plus.co.kr/megahp/manager/upload/menu/20241010010058_1728489658554_zE3o8OF1hC.jpg",
    },
    {
      id: 46,
      name: "버터버터 마늘 크로크무슈",
      price: 3800,
      url: "https://img.79plus.co.kr/megahp/manager/upload/menu/20240501232812_1714573692423_O61efAIADP.jpg",
      isRecommended: true,
    },
    {
      id: 47,
      name: "핫 치킨&딥치즈 치아바타",
      price: 3500,
      url: "https://img.79plus.co.kr/megahp/manager/upload/menu/20240313214620_1710333980384_G7J1lIUmNH.jpg",
      isRecommended: true,
    },
    {
      id: 48,
      name: "와앙 바닐라 슈크림빵",
      price: 3300,
      url: "https://img.79plus.co.kr/megahp/manager/upload/menu/20240313214935_1710334175847_YC9L2Jb8uU.jpg",
    },
    {
      id: 49,
      name: "버터버터 소보로 스콘",
      price: 3800,
      url: "https://img.79plus.co.kr/megahp/manager/upload/menu/20240417234259_1713364979611_htkqiRFQd_.jpg",
    },
    {
      id: 50,
      name: "아이스 딸기라떼 와앙 슈",
      price: 2900,
      url: "https://img.79plus.co.kr/megahp/manager/upload/menu/20240118003435_1705505675995_sUYErrd4SU.jpg",
    },
    {
      id: 51,
      name: "초코스모어쿠키",
      price: 2500,
      url: "https://img.79plus.co.kr/megahp/manager/upload/menu/20220701140929_1656652169641_bB76y9JSan.jpg",
      isNew: true,
    },
    {
      id: 52,
      name: "말차스모어쿠키",
      price: 2500,
      url: "https://img.79plus.co.kr/megahp/manager/upload/menu/20220701140755_1656652075467_VlgOHqEzNj.jpg",
      isNew: true,
    },
  ],
};

export default itemData;
