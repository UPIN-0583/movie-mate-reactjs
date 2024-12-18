import React, { useState } from "react";
import { useMovies } from "../context/MovieContext";
import images from "../asset";

const Banner = () => {

  const {movies} = useMovies();
  const banner = movies.banners || [];

  const [selectedMovie, setSelectedMovie] = useState(banner[0]);

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(
          <span key={i} className="text-yellow-400">
            ★
          </span>
        );
      } else {
        stars.push(
          <span key={i} className="text-gray-300">
            ★
          </span>
        );
      }
    }
    return stars;
  };

  return (
    <div
      className="relative w-full h-[600px] bg-cover bg-center rounded-lg border border-white"
      style={{ backgroundImage: `url(${selectedMovie.backgroundImage})` }}
    >
      {/* Phần bên trái: Chi tiết phim */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-start justify-start pl-12 pr-8 py-10 rounded-lg ">
        <div className="text-white max-w-md space-y-4 text-left">
          {/* Xếp hạng sao */}
          <div className="flex items-center space-x-1 text-yellow-400 text-2xl mb-4">
            {renderStars(selectedMovie.rating)}
          </div>

          {/* Tiêu đề phim */}
          <h1 className="text-5xl font-bold leading-tight">
            {selectedMovie.title}
          </h1>

          {/* Ngày phát hành */}
          <p className="text-yellow-400 text-lg font-medium mt-4">
            Phát hành vào ngày {selectedMovie.releaseDate}
          </p>

          {/* Mô tả chính */}
          <p className="text-gray-300 text-base leading-relaxed mt-4">
            {selectedMovie.description}
          </p>

          {/* Các nút hành động */}
          <div className="flex space-x-4 mt-6 pt-20">
            {/* Button Đặt vé */}
            <button className="bg-yellow-400 text-black font-bold py-2 px-4 rounded-lg mb-2 flex items-center justify-center text-lg w-40 h-12">
              <img src={images.bookingIcon} alt="Booking" className="w-6 h-6" />
              <p className="ps-2">Đặt vé</p>
            </button>

            {/* Button Xem Trailer */}
            <button className="bg-transparent border border-white text-white font-bold py-2 px-4 rounded-lg flex items-center justify-center text-sm w-40 h-12">
              <img src={images.trailerIcon} alt="Trailer" className="w-6 h-6" />
              <p className="ps-2">Xem Trailer</p>
            </button>
          </div>
        </div>
      </div>

      {/* Phần bên phải: Thumbnail cuộn dọc */}
      <div className="absolute right-10 top-10 h-[500px] overflow-y-auto space-y-4 custom-scrollbar pr-4">
        {banner.map((movie) => (
          <div
            key={movie.id}
            className="relative cursor-pointer rounded-md overflow-hidden"
            onClick={() => setSelectedMovie(movie)}
          >
            {/* Hình ảnh của phim */}
            <img
              src={movie.thumbnail}
              alt={movie.title}
              className={`w-[230px] h-[150px] object-cover transition-transform bg-cover ${
                selectedMovie.id === movie.id ? "scale-105" : ""
              }`}
            />

            {/* Lớp phủ mờ khi được chọn hoặc hover */}
            <div
              className={`absolute inset-0 bg-black bg-opacity-40 ${
                selectedMovie.id === movie.id
                  ? "opacity-100"
                  : "opacity-0 hover:opacity-80"
              } transition-opacity`}
            ></div>

            {/* Viền màu vàng khi được chọn */}
            {selectedMovie.id === movie.id && (
              <div className="absolute inset-0 border-2 border-yellow-500 rounded-md"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export { Banner };
