import React from "react";

const ItemList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {/* 카드 컴포넌트 예시 */}
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img src="image_url" alt="Item" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Item Title</h2>
          <p>Item Description</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
      {/* 추가 카드 컴포넌트는 여기에 반복 */}
    </div>
  );
};

export default ItemList;
