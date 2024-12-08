import React, { useState } from "react";
import images from "../asset";

const Navigate = () => {
  const [selectedCinema, setSelectedCinema] = useState("");
  const [selectedMovie, setSelectedMovie] = useState("");
  const [selectedDay, setSelectedDay] = useState("");
  const [selectedShow, setSelectedShow] = useState("");

  // Các danh sách lựa chọn mẫu
  const cinemas = [
    "MovieMate Nguyễn Du",
    "MovieMate Quế Thanh",
    "MovieMate Hai Bà Trưng",
    "MovieMate Mỹ Tho",
  ];
  const movies = [
    "Ta Đã Yêu Nhau",
    "Quỷ Ăn Tạng Phần 2",
    "Venon: Kèo Cuối",
    "Lối Thoát Cuối Cùng",
  ];
  const days = [
    "Chủ Nhật, 27/10/2024",
    "Thứ Hai, 28/10/2024",
    "Thứ Ba, 29/10/2024",
    "Thứ Tư, 30/10/2024",
  ];
  const shows = ["17:30 PM", "18:00 PM", "19:15 PM", "20:15 PM"];

  return (
    <div className="bg-[#27282D] flex items-center justify-center space-x-4 p-4 rounded-lg">
      {/* Chọn Rạp */}
      <div className="flex-1">
        <select
          value={selectedCinema}
          onChange={(e) => setSelectedCinema(e.target.value)}
          className="bg-[#27282D] w-full border-4 border-white text-yellow-400 font-bold text-lg p-2 rounded-lg text-center"
        >
          <option value="" disabled hidden>
            1. Chọn rạp
          </option>
          {cinemas.map((cinema, index) => (
            <option key={index} value={cinema}>
              {cinema}
            </option>
          ))}
        </select>
      </div>

      {/* Chọn Phim */}
      <div className="flex-1">
        <select
          value={selectedMovie}
          onChange={(e) => setSelectedMovie(e.target.value)}
          className="bg-[#27282D] w-full border-4 border-white text-yellow-400 font-bold text-lg p-2 rounded-lg text-center"
        >
          <option value="" disabled hidden>
            2. Chọn phim
          </option>
          {movies.map((movie, index) => (
            <option key={index} value={movie}>
              {movie}
            </option>
          ))}
        </select>
      </div>

      {/* Chọn Ngày */}
      <div className="flex-1">
        <select
          value={selectedDay}
          onChange={(e) => setSelectedDay(e.target.value)}
          className="bg-[#27282D] w-full border-4 border-white text-yellow-400 font-bold text-lg p-2 rounded-lg text-center"
        >
          <option value="" disabled hidden>
            3. Chọn ngày
          </option>
          {days.map((day, index) => (
            <option key={index} value={day}>
              {day}
            </option>
          ))}
        </select>
      </div>

      {/* Chọn Suất */}
      <div className="flex-1">
        <select
          value={selectedShow}
          onChange={(e) => setSelectedShow(e.target.value)}
          className="bg-[#27282D] w-full border-4 border-white text-yellow-400 font-bold text-lg p-2 rounded-lg text-center"
        >
          <option value="" disabled hidden>
            4. Chọn suất
          </option>
          {shows.map((show, index) => (
            <option key={index} value={show}>
              {show}
            </option>
          ))}
        </select>
      </div>

      {/* Nút Đặt vé nhanh */}
      <button className="flex items-center justify-center px-4 py-2 bg-yellow-400 text-black font-bold text-lg rounded-lg border-4 border-yellow-400">
        <img src={images.bookingIcon} alt="Booking" className="w-6 h-6" />
        <div className="ms-2">Đặt vé nhanh</div>
      </button>
    </div>
  );
};

export { Navigate };
