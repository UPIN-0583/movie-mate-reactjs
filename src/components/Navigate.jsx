import React, { useState } from "react";
import images from "../asset";
import { useMovies } from "../context/MovieContext";

const Navigate = () => {
  const [selectedCinema, setSelectedCinema] = useState("");
  const [selectedMovie, setSelectedMovie] = useState("");
  const [selectedDay, setSelectedDay] = useState("");
  const [selectedShow, setSelectedShow] = useState("");

  const { movies } = useMovies();

  // Lấy dữ liệu từ movies
  const movie = movies.movie || [];
  const days = movies.days || [];
  const cinemas = movies.cinemas || [];
  const times = movies.times || [];

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
          {movie.map((movie, index) => (
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
          {times.map((show, index) => (
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
