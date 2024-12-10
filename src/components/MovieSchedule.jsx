import React, { useState, useEffect } from "react";
import { useMovies } from "../context/MovieContext";

const MovieSchedule = ({ onScheduleSelect }) => {
  const { movies } = useMovies();

  const [startDate, setStartDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedCinema, setSelectedCinema] = useState("MovieMate Nguyễn Du");
  const [selectedTime, setSelectedTime] = useState("14:00");

  const daysOfWeek = [
    "Chủ Nhật",
    "Thứ Hai",
    "Thứ Ba",
    "Thứ Tư",
    "Thứ Năm",
    "Thứ Sáu",
    "Thứ Bảy",
  ];

  const times = movies.times || [];

  const cinemas = movies.cinemas || [];

  const formatDate = (date) => {
    const day = daysOfWeek[date.getDay()];
    const dayOfMonth = date.getDate();
    const month = date.getMonth() + 1;
    return `${day}\n${dayOfMonth}/${month}`;
  };

  const getDateRange = () => {
    const range = [];
    for (let i = -3; i <= 3; i++) {
      const newDate = new Date(startDate);
      newDate.setDate(startDate.getDate() + i);
      range.push(newDate);
    }
    return range;
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    // Gọi onScheduleSelect để truyền thông tin lịch chiếu
    onScheduleSelect({
      date: formatDate(date),
      time: selectedTime,
      theater: selectedCinema,
    });
  };

  // Hàm xử lý khi chọn rạp hoặc thời điểm
  const handleCinemaChange = (e) => {
    const cinema = e.target.value;
    setSelectedCinema(cinema);
    onScheduleSelect({
      date: formatDate(selectedDate),
      time: selectedTime,
      theater: cinema,
    });
  };

  const handleTimeChange = (e) => {
    const time = e.target.value;
    setSelectedTime(time);
    onScheduleSelect({
      date: formatDate(selectedDate),
      time: time,
      theater: selectedCinema,
    });
  };

  const shiftDateRange = (shift) => {
    const newDate = new Date(startDate);
    newDate.setDate(startDate.getDate() + shift);
    setStartDate(newDate);
  };

  return (
    <div className="bg-[#27282D] shadow-md rounded-xl p-6 flex items-center justify-center">
      <div className="flex items-center space-x-4">
        <h2 className="text-2xl font-bold text-blue-500">Lịch chiếu</h2>
      </div>
      <div className="flex items-center ml-10 mr-4">
        <button
          onClick={() => shiftDateRange(-1)}
          className="text-white hover:text-blue-500 transition text-xl font-bold"
        >
          {"<"}
        </button>
      </div>
      <div className="flex items-center space-x-2">
        {getDateRange().map((date, index) => (
          <button
            key={index}
            onClick={() => handleDateChange(date)}
            className={`${
              date.toDateString() === selectedDate.toDateString()
                ? "bg-blue-500 text-white font-semibold"
                : "text-white hover:bg-slate-500"
            } text-sm rounded-[32px] flex items-center justify-center w-16 h-20`}
          >
            <p className="text-center">{formatDate(date)}</p>
          </button>
        ))}
      </div>
      <div className="flex items-center mr-10 ml-4">
        <button
          onClick={() => shiftDateRange(1)}
          className="text-white hover:text-blue-500 transition text-xl font-bold"
        >
          {">"}
        </button>
      </div>

      <div className="flex flex-col items-center mx-14">
        <label className="text-blue-500 mb-2 text-left w-full font-bold">
          Chọn rạp:
        </label>
        <select
          value={selectedCinema}
          onChange={handleCinemaChange}
          className="bg-[#27282D] p-2 border rounded-lg"
        >
          {cinemas.map((cinema, index) => (
            <option key={index} value={cinema}>
              {cinema}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col items-center mx-8">
        <label className="text-blue-500 text-left mb-2 w-full font-bold">
          Thời điểm:
        </label>
        <select
          value={selectedTime}
          onChange={handleTimeChange}
          className="bg-[#27282D] p-2 border rounded-lg"
        >
          {times.map((time, index) => (
            <option key={index} value={time}>
              {time}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export { MovieSchedule };
