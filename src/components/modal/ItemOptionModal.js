import React from "react";

const ItemOptionModal = ({
  category,
  selectedItem,
  closeModal,
  onAddToCart,
}) => {
  const isCoffee = category === "커피";
  console.log("ItemOptionModal category: ", category);

  const handleAddToCart = () => {
    onAddToCart(selectedItem); // 장바구니에 추가하는 함수 호출
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-5 rounded-lg shadow-lg w-96">
        {isCoffee ? (
          <>
            <h3 className="text-xl font-bold mb-4">{selectedItem.name}</h3>
            <p className="text-lg">{selectedItem.price}원</p>
            <div className="mt-4">
              <h4 className="font-semibold">뜨거운 (HOT) / 차가운 (ICE)</h4>
              <div>
                <label>
                  <input type="radio" name="temperature" value="hot" /> 뜨거운
                  (HOT)
                </label>
                <label className="ml-4">
                  <input type="radio" name="temperature" value="ice" /> 차가운
                  (ICE)
                </label>
              </div>
            </div>
            <div className="mt-4">
              <h4 className="font-semibold">농도 (선택, 단일 선택)</h4>
              <div>
                <label>
                  <input type="radio" name="density" value="basic" /> 기본
                  (+0원)
                </label>
                <label className="ml-4">
                  <input type="radio" name="density" value="light" /> 연하게
                  (+0원)
                </label>
                <label className="ml-4">
                  <input type="radio" name="density" value="extra" /> 진하게
                  (+500원)
                </label>
                <label className="ml-4">
                  <input type="radio" name="density" value="double" /> 2배
                  진하게 (+1000원)
                </label>
              </div>
            </div>
          </>
        ) : (
          <div className="mt-4 flex flex-col items-center">
            <p>선택하신 상품의 옵션을 선택해주세요.</p>
            <img
              src={selectedItem.url}
              alt={selectedItem.name}
              className="w-24 h-auto mb-2"
            />{" "}
            <h3 className="text-xl font-bold mb-4">{selectedItem.name}</h3>
            <p className="text-lg">{selectedItem.price}원</p>
            {/* 이미지 추가 */}
          </div>
        )}

        <div className="mt-4 flex justify-between">
          <button
            onClick={closeModal}
            className="bg-gray-300 text-gray-800 px-4 py-2 rounded"
          >
            취소
          </button>
          <button
            onClick={handleAddToCart}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            주문담기
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemOptionModal;
