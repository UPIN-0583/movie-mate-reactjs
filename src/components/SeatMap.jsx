import React, { useState } from "react";
import images from "../asset";

const SeatMap = ({ onSeatSelect }) => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  // Tạo danh sách ghế
  const rows = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
  const seats = rows.flatMap((rowLabel) =>
    Array.from({ length: 15 }, (_, index) => ({
      id: `${rowLabel}${index + 1}`, // Tạo tên ghế như A1, A2, ..., J15
      row: rowLabel,
      number: index + 1,
      status: selectedSeats.includes(`${rowLabel}${index + 1}`) ? "selected" : "available",
    }))
  );

  const handleSeatClick = (seat) => {
    if (selectedSeats.includes(seat.id)) {
      // Hủy chọn ghế
      const updatedSeats = selectedSeats.filter((s) => s !== seat.id);
      setSelectedSeats(updatedSeats);
      onSeatSelect(updatedSeats); // Truyền danh sách ghế đã chọn về MovieDetailNS
    } else {
      // Chọn ghế
      const updatedSeats = [...selectedSeats, seat.id];
      setSelectedSeats(updatedSeats);
      onSeatSelect(updatedSeats); // Truyền danh sách ghế đã chọn về MovieDetailNS
    }
  };

  return (
    <div className="bg-[#27282D] rounded-xl p-6">
      <div className="bg-seatMap">
        <div className="w-full h-full mt-8 justify-items-center">
          <img src={images.screenIcon} alt="screen icon" />
          <p className="font-bold text-2xl">Màn hình</p>
        </div>

        <div className="grid grid-cols-17 gap-2 justify-center mt-12 ms-20 me-20 pb-5">
          {/* Các hàng chữ cái A-J */}
          {rows.map((rowLabel, rowIndex) => (
            <div key={rowLabel} className="flex items-center">
              {/* 3 cột ghế đầu */}
              {seats
                .filter(
                  (seat) =>
                    seat.row === rowLabel &&
                    seat.number >= 1 &&
                    seat.number <= 3
                )
                .map((seat) => (
                  <div
                    key={seat.id}
                    className="w-12 h-12 flex items-center justify-center rounded cursor-pointer mx-2 my-2"
                    onClick={() => handleSeatClick(seat)}
                  >
                    {seat.status === "available" ? (
                      <img
                        src={images.seatWhiteIcon}
                        alt="available seat"
                        className="w-full h-full"
                      />
                    ) : seat.status === "selected" ? (
                      <img
                        src={images.seatYellowIcon}
                        alt="selected seat"
                        className="w-full h-full"
                      />
                    ) : (
                      <img
                        src={images.seatGrayIcon}
                        alt="unavailable seat"
                        className="w-full h-full"
                      />
                    )}
                  </div>
                ))}

              {/* 1 cột chữ cái cho hàng ghế */}
              <div className="flex w-8 justify-center items-center text-lg font-semibold">
                {rowLabel}
              </div>

              {/* 9 cột ghế giữa */}
              {seats
                .filter(
                  (seat) =>
                    seat.row === rowLabel &&
                    seat.number >= 4 &&
                    seat.number <= 12
                )
                .map((seat) => (
                  <div
                    key={seat.id}
                    className="w-12 h-12 flex items-center justify-center rounded cursor-pointer mx-2 my-2"
                    onClick={() => handleSeatClick(seat)}
                  >
                    {seat.status === "available" ? (
                      <img
                        src={images.seatWhiteIcon}
                        alt="available seat"
                        className="w-full h-full"
                      />
                    ) : seat.status === "selected" ? (
                      <img
                        src={images.seatYellowIcon}
                        alt="selected seat"
                        className="w-full h-full"
                      />
                    ) : (
                      <img
                        src={images.seatGrayIcon}
                        alt="unavailable seat"
                        className="w-full h-full"
                      />
                    )}
                  </div>
                ))}

              {/* 1 cột chữ cái cho hàng ghế */}
              <div className="flex w-8 justify-center items-center text-lg font-semibold">
                {rowLabel}
              </div>

              {/* 3 cột ghế cuối */}
              {seats
                .filter(
                  (seat) =>
                    seat.row === rowLabel && seat.number >= 13 && seat.number <= 15
                )
                .map((seat) => (
                  <div
                    key={seat.id}
                    className="w-12 h-12 flex items-center justify-center rounded cursor-pointer mx-2 my-2"
                    onClick={() => handleSeatClick(seat)}
                  >
                    {seat.status === "available" ? (
                      <img
                        src={images.seatWhiteIcon}
                        alt="available seat"
                        className="w-full h-full"
                      />
                    ) : seat.status === "selected" ? (
                      <img
                        src={images.seatYellowIcon}
                        alt="selected seat"
                        className="w-full h-full"
                      />
                    ) : (
                      <img
                        src={images.seatGrayIcon}
                        alt="unavailable seat"
                        className="w-full h-full"
                      />
                    )}
                  </div>
                ))}
            </div>
          ))}

          <div className="flex items-center mt-2">
            {Array.from({ length: 3 }, (_, i) => {
              return (
                <div
                  key={i}
                  className="w-12 text-center text-lg font-semibold mx-2 "
                >
                  {i + 1}
                </div>
              );
            })}
            <div className="w-8">{/* Hiển thị ô trống */}</div>
            {Array.from({ length: 9 }, (_, i) => {
              return (
                <div
                  key={i}
                  className="w-12 text-center text-lg font-semibold mx-2"
                >
                  {i + 4}
                </div>
              );
            })}
            <div className="w-8">{/* Hiển thị ô trống */}</div>
            {Array.from({ length: 3 }, (_, i) => {
              return (
                <div
                  key={i}
                  className="w-12 text-center text-lg font-semibold mx-2"
                >
                  {i + 13}
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-4 flex justify-center space-x-40 pb-8">
          <div className="flex items-center">
            <img
              src={images.seatWhiteIcon}
              alt="available seat"
              className="w-12 h-12"
            />
            <p className="text-lg">Ghế trống</p>
          </div>
          <div className="flex items-center">
            <img
              src={images.seatYellowIcon}
              alt="selected seat"
              className="w-12 h-12"
            />
            <p className="text-lg">Ghế đang chọn</p>
          </div>
          <div className="flex items-center">
            <img
              src={images.seatGrayIcon}
              alt="selected seat"
              className="w-12 h-12"
            />
            <p className="text-lg">Ghế đã đặt</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { SeatMap };
