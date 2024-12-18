import React, { useState } from "react";
import { SeatMap } from "../components/SeatMap";
import { ComboSelection } from "../components/ComboSelection";
import { Invoice } from "../components/Invoice";
import { MovieSchedule } from "../components/MovieSchedule";
import { MovieInfo } from "../components/MovieInfo";
import { ROUTING_WATCHTRAILER_NS } from "../router";
import images from "../asset";
import {useLocation} from "react-router-dom";
import {useGetMovieById} from "../api/movie/useGetMovieById";

const MovieDetailNS = () => {

  const { state } = useLocation();
  const movieId = state?.movieId;
  const poster = state?.poster; // Nhận đường dẫn ảnh từ state

  const daysOfWeek = [
    "Chủ Nhật",
    "Thứ Hai",
    "Thứ Ba",
    "Thứ Tư",
    "Thứ Năm",
    "Thứ Sáu",
    "Thứ Bảy",
  ];

  const formatDate = (date) => {
    const day = daysOfWeek[date.getDay()];
    const dayOfMonth = date.getDate();
    const month = date.getMonth() + 1;
    return `${day} ${dayOfMonth}/${month}`;
  };
// Sử dụng hook để lấy thông tin chi tiết phim
  const { data: movieDetails, isFetching, error } = useGetMovieById(movieId);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [selectedCombos, setSelectedCombos] = useState({});
  const [selectedSchedule, setSelectedSchedule] = useState(null);
  const [selectedCinema, setSelectedCinema] = useState("MovieMate Nguyễn Du");
  const [selectedTime, setSelectedTime] = useState("14:00");
  const [selectedDate, setSelectedDate] = useState(formatDate(new Date()));



// Xử lý trạng thái đang tải
  if (isFetching) {
    return <div className="text-white text-center">Đang tải dữ liệu...</div>;
  }

  const handleScheduleSelect = (schedule) => {
    setSelectedSchedule(schedule);
    setSelectedTime(schedule.time);
    setSelectedCinema(schedule.theater);
    setSelectedDate(schedule.date);
  };

  const handleSeatSelection = (seats) => setSelectedSeats(seats);

  const handleComboSelection = (id, qty) =>
    setSelectedCombos({ ...selectedCombos, [id]: qty });

  const handleWatchTrailerClick = () => {
    window.open(ROUTING_WATCHTRAILER_NS, "_blank");
  };

  return (
    <div className="bg-[#151515] text-white min-h-screen">
      <div className="container mx-auto px-4 py-10 ">
        {/* Poster và Thông Tin Phim */}
        <MovieInfo
            movie={movieDetails?.name || "Tên phim"}
            poster={poster}
            genres={movieDetails?.genres || []}
            rating={movieDetails?.classify || "N/A"}
            duration={movieDetails?.duration || "N/A"}
            description={movieDetails?.description || "Mô tả phim không có sẵn"}
            producer="Hà Khả Nguyên"
            director={movieDetails?.director || "Không rõ"}
            cast={movieDetails?.actor || []}
            onWatchTrailerClick={handleWatchTrailerClick}
        />

        {/* Lịch chiếu */}
        <div className="mt-10 w-11/12 m-auto">
          <MovieSchedule onScheduleSelect={handleScheduleSelect} />
        </div>

        {/* Sơ Đồ Ghế */}
        <div className="mt-10 w-11/12 m-auto ">
          <SeatMap onSeatSelect={handleSeatSelection} />
        </div>

        {/* Combo và hoá đơn */}
        <div className="mt-10 w-11/12 m-auto grid grid-cols-3 gap-6">
          <div className="col-span-2">
            <ComboSelection onComboSelect={handleComboSelection} />
          </div>
          <div className="col-span-1">
            <Invoice
              selectedSeats={selectedSeats}
              selectedCombos={selectedCombos}
              selectedCinema={selectedCinema}
              selectedMovie={movieDetails?.name}
              selectedTime={selectedTime}
              selectedDate={selectedDate}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export { MovieDetailNS };
