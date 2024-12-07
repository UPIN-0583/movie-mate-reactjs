import React, { useState } from "react";
import { PromotionCard } from "./PromotionCard";
import { useNavigate } from "react-router-dom";
import { ROUTING_PROMOTIONLIST } from "../router/path";

const PromotionList = ({ promotions }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Chia các promotion thành từng nhóm (4 promotion mỗi slide)
  const groupPromotions = (promotions, groupSize) => {
    const result = [];
    for (let i = 0; i < promotions.length; i += groupSize) {
      result.push(promotions.slice(i, i + groupSize));
    }
    return result;
  };

  const promotionGroups = groupPromotions(promotions, 4); // Mỗi slide chứa tối đa 4 promotion

  // Xử lý khi bấm nút "trái"
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : promotionGroups.length - 1
    );
  };

  // Xử lý khi bấm nút "phải"
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < promotionGroups.length - 1 ? prevIndex + 1 : 0
    );
  };

  const navigate = useNavigate(); // Khởi tạo useNavigate

  // Hàm xử lý sự kiện nhấn nút "XEM THÊM"
  const handleSeeMore = () => {
    navigate(ROUTING_PROMOTIONLIST); // Chuyển hướng đến đường dẫn MovieListNS từ path.js
  };
  return (
    <div className="bg-transparent py-8">
      <div className="text-center font-bold text-white text-2xl mb-6">
        KHUYẾN MÃI
      </div>
      <div className="relative flex items-center justify-center mb-6">
        {/* Nút mũi tên trái */}
        <button
          onClick={handlePrev}
          className="left-1 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition"
        >
          {"<"}
        </button>

        {/* Danh sách slide */}
        <div className="w-full overflow-hidden relative">
          <div
            className="flex transition-transform duration-500"
            style={{
              transform: `translateX(-${
                currentIndex * (100 / promotionGroups.length)
              }%)`,
              width: `${promotionGroups.length * 100}%`, // Đảm bảo chiều rộng tổng
            }}
          >
            {promotionGroups.map((group, index) => (
              <div key={index} className="flex w-full  justify-center mx-2">
                {group.map((promotion, idx) => (
                  <div className="mx-6">
                    <PromotionCard promotion={promotion} />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Nút mũi tên phải */}
        <button
          onClick={handlePrev}
          className="right-1 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition"
        >
          {">"}
        </button>
      </div>

      {/* Nút Xem thêm */}
      <div className="text-center mt-8">
        <button
          className="w-[200px] bg-[#9CB2F5] text-black font-bold py-2 px-6 rounded-sm hover:bg-blue-600 transition"
          onClick={handleSeeMore}
        >
          XEM THÊM
        </button>
      </div>
    </div>
  );
};

export { PromotionList };
