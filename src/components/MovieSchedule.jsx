import React, { useState } from "react";

const MovieSchedule = () => {
  const [startDate, setStartDate] = useState(new Date()); // Ngày bắt đầu của dãy ngày
  const [selectedDate, setSelectedDate] = useState(new Date()); // Ngày người dùng chọn
  const [selectedCinema, setSelectedCinema] = useState("MovieMate Quốc Thanh");
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

  const times = ["14:00", "16:00", "18:30", "20:45"];

  // Hàm định dạng ngày theo Day + Date/Month
  const formatDate = (date) => {
    const day = daysOfWeek[date.getDay()];
    const dayOfMonth = date.getDate();
    const month = date.getMonth() + 1;
    return `${day}\n${dayOfMonth}/${month}`; // Chia ngày và tháng xuống dòng
  };

  // Hàm lấy phạm vi 7 ngày (hiển thị ngày hiện tại và 3 ngày trước, 3 ngày sau)
  const getDateRange = () => {
    const range = [];
    // Lấy ngày bắt đầu và 6 ngày xung quanh (3 ngày trước và 3 ngày sau)
    for (let i = -3; i <= 3; i++) {
      const newDate = new Date(startDate);
      newDate.setDate(startDate.getDate() + i); // Cập nhật ngày theo phạm vi
      range.push(newDate);
    }
    return range;
  };

  // Hàm xử lý thay đổi ngày được chọn
  const handleDateChange = (date) => {
    setSelectedDate(date); // Cập nhật ngày khi người dùng chọn
  };

  // Hàm di chuyển phạm vi ngày (di chuyển 1 ngày về phía trước hoặc sau)
  const shiftDateRange = (shift) => {
    const newDate = new Date(startDate);
    newDate.setDate(startDate.getDate() + shift); // Chuyển 1 ngày về phía trước hoặc sau
    setStartDate(newDate); // Thay đổi ngày bắt đầu nhưng không làm thay đổi các ngày trong danh sách
  };

  return (
    
      <div className="bg-[#27282D] shadow-md rounded-xl p-6 flex items-center justify-center">
        <div className="flex items-center space-x-4">
          <h2 className="text-2xl font-bold text-blue-500 ">Lịch chiếu</h2>
        </div>
        <div className="flex items-center ml-10 mr-4">
          {/* Mũi tên trái */}
          <button
              onClick={() => shiftDateRange(-1)}
              className="text-white hover:text-blue-500 transition text-xl font-bold"
            >
              {"<"}
          </button>
        </div>
        
        {/* Mảng ngày (7 ngày) */}
        <div className="flex items-center space-x-2">
          {getDateRange().map((date, index) => (
            <button
              key={index}
              onClick={() => handleDateChange(date)}
              className={`${
                date.toDateString() === selectedDate.toDateString()
                  ? "bg-blue-500 text-white font-semibold" // Đánh dấu ngày được chọn
                  : "text-white hover:bg-slate-500"
              } text-sm rounded-[32px] flex items-center justify-center w-16 h-20`}
            >
              {/* Hiển thị ngày theo định dạng (Thứ Sáu\n25/10) */}
              <p className="text-center">{formatDate(date)}</p>
            </button>
          ))}
        </div>
        <div className="flex items-center mr-10 ml-4">
          {/* Mũi tên phải */}
          <button
            onClick={() => shiftDateRange(1)}
            className="text-white hover:text-blue-500 transition text-xl font-bold"
          >
            {">"}
          </button>
        </div>
        {/* Chọn rạp */}
        <div className="flex flex-col items-center mx-14">
          <label className="text-blue-500 mb-2 text-left w-full font-bold">Chọn rạp:</label>
            <select
              value={selectedCinema}
              onChange={(e) => setSelectedCinema(e.target.value)}
              className="bg-[#27282D] p-2 border rounded-lg"
            >
              <option value="MovieMate Quốc Thanh">MovieMate Quốc Thanh</option>
              <option value="MovieMate Nguyễn Du">MovieMate Nguyễn Du</option>
              <option value="MovieMater Phạm Hồng Thái">MovieMate Phạm Hồng Thái</option>
            </select>
        </div>

        {/* Chọn thời điểm */}
        <div className="flex flex-col items-center mx-8">
          <label className="text-blue-500 text-left mb-2 w-full font-bold">Thời điểm:</label>
          
          <select
            value={selectedTime}
            onChange={(e) => setSelectedTime(e.target.value)}
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
