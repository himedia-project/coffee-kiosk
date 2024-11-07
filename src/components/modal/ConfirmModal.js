import React from "react";

const ConfirmModal = ({ message, onConfirm, onCancel }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-5 rounded-lg shadow-lg w-96">
        <h3 className="text-xl font-bold mb-4">알림</h3>
        <p className="text-lg">{message}</p>
        <div className="mt-4 flex justify-end">
          <button
            onClick={onConfirm}
            className="bg-gray-300 text-gray-800 px-4 py-2 rounded mr-2"
          >
            확인
          </button>
          <button
            onClick={onCancel}
            className="bg-gray-300 text-gray-800 px-4 py-2 rounded"
          >
            취소
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
