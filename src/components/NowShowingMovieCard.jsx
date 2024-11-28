import React from "react";
import images from "../asset";
import { useNavigate } from "react-router-dom";
import { ROUTING_WATCHTRAILER_NS } from "../router/path";
import { ROUTING_MOVIEDETAIL_NS } from "../router/path";

const NowShowingMovieCard = ({ movie }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(ROUTING_MOVIEDETAIL_NS); // Điều hướng tới trang chi tiết phim
  };

  const handleWatchTrailerClick = () => {
    window.open(ROUTING_WATCHTRAILER_NS, "_blank"); // Mở đường dẫn trailer trong tab mới
  };

  return (
    <div className="bg-transparent border border-gray-500 text-white rounded-lg w-64 shadow-lg">
      <div className="relative">
        {/* Poster phim */}
        <div className="relative w-55 h-80 rounded-lg overflow-hidden">
          <img
            src={movie.poster}
            alt="Movie Poster"
            className="w-full h-full object-cover rounded-lg "
          />
        </div>

        {/* Đánh giá */}
        <div className="absolute top-2 right-2 bg-black bg-opacity-50 px-2 py-1 rounded-md flex items-center">
          <span className="text-yellow-400 text-sm mr-1">{movie.rating}</span>
        </div>

        {/* Thời lượng phim */}
        <div className="absolute bottom-2 left-2 bg-black bg-opacity-50 px-2 py-1 rounded-md flex items-center">
          <img src={images.timeIcon} alt="Time" className="w-4 h-4" />
          <span className="text-white text-sm ps-1">{movie.time}</span>
        </div>

        {/* Hiệu ứng Hover */}
        <div
          className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300"
          onClick={handleClick}
        >
          <button
            className="bg-yellow-400 text-black font-bold py-2 px-4 rounded-lg mb-2 flex items-center justify-center text-lg w-36 "
            onClick={(e) => {
              e.stopPropagation(); // Ngăn sự kiện lan đến thẻ cha
              handleClick(); // Gọi hàm điều hướng
            }}
          >
            <img src={images.bookingIcon} alt="Booking" className="w-6 h-6" />
            <p className="ps-2">Đặt vé</p>
          </button>
          <button
            className="bg-transparent border border-white text-white font-bold py-2 px-4 rounded-lg flex items-center justify-center w-36 text-white font-bold py-2 px-4 rounded-lg flex items-center text-sm w-36"
            onClick={(e) => {
              e.stopPropagation(); // Ngăn sự kiện lan đến thẻ cha
              handleWatchTrailerClick(); // Mở trailer
            }}
          >
            <img src={images.trailerIcon} alt="Trailer" className="w-6 h-6" />
            <p className="ps-2">Xem Trailer</p>
          </button>
        </div>
      </div>

      {/* Tên phim */}
      <div className="items-center p-2">
        <h3 className="font-bold text-sm">{movie.title}</h3>
      </div>
    </div>
  );
};

export { NowShowingMovieCard };
