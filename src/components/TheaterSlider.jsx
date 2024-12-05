import React, { useState } from "react";
import images from "../asset";

const TheaterSlider = () => {
  // Dữ liệu các ảnh trong slider
  const imageTheater = [images.Theater, images.Theater1, images.Theater2];

  // Trạng thái hiện tại của ảnh
  const [currentIndex, setCurrentIndex] = useState(0);

  // Hàm chuyển tới ảnh tiếp theo
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imageTheater.length);
  };

  // Hàm quay lại ảnh trước đó
  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + imageTheater.length) % imageTheater.length
    );
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      <div className="relative flex items-center justify-center">
        {/* Nút mũi tên trái */}
        <button
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-3 rounded-full z-20 border-2 border-white"
          onClick={prevSlide}
        >
          {"<"}
        </button>

        {/* Slider: chỉ hiển thị ảnh chính */}
        <div className="w-full h-96 overflow-hidden flex justify-center items-center">
          {imageTheater.map((image, index) => (
            <div
              key={index}
              className={`absolute transition-all duration-500 ease-in-out ${
                index === currentIndex
                  ? "transform-none z-10"
                  : "transform scale-100 opacity-0"
              }`}
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%", 
                height: "100%",
              }}
            />
          ))}
        </div>

        {/* Nút mũi tên phải */}
        <button
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-3 rounded-full z-20 border-2 border-white "
          onClick={nextSlide}
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

export { TheaterSlider };
