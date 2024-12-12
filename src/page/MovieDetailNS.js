import React, { useState } from "react";
import { SeatMap } from "../components/SeatMap";
import { ComboSelection } from "../components/ComboSelection";
import { Invoice } from "../components/Invoice";
import { MovieSchedule } from "../components/MovieSchedule";
import { MovieInfo } from "../components/MovieInfo";
import { ROUTING_WATCHTRAILER_NS } from "../router";
import images from "../asset";

const MovieDetailNS = () => {
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

  const [selectedSeats, setSelectedSeats] = useState([]);
  const [selectedCombos, setSelectedCombos] = useState({});
  const [selectedSchedule, setSelectedSchedule] = useState(null);
  const [selectedCinema, setSelectedCinema] = useState("MovieMate Nguyễn Du");
  const [selectedMovie, setSelectedMovie] = useState("Domino: Lối Thoát Cuối Cùng");
  const [selectedTime, setSelectedTime] = useState("14:00");
  const [selectedDate, setSelectedDate] = useState(formatDate(new Date()));

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
          movie={selectedMovie}
          poster={images.NowShowingMovie}
          genres={['Hành Động', 'Tâm Lý']}
          rating="PG"
          duration="1h 55m"
          description="Sau khi cha bị kẻ ác sát hại, từ người ngoài cuộc, An (Thuận Nguyễn) từng bước bị kéo vào cuộc chiến của các phe đảng xã hội đen. An một mình sẽ phải đối mặt với những nguy hiểm đe dọa đến cả tính mạng."
          producer="Nguyễn Phúc Huy Cương"
          director="Nguyễn Phúc Huy Cương"
          cast={['Thuận Nguyễn', 'Quốc Cường', 'Henry Nguyễn', 'Huỳnh Anh Tuấn', 'Cát Hạ']}
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
              selectedMovie={selectedMovie}
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
