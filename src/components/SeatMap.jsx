import React, { useState } from "react";
import images from "../asset";

const SeatMap = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatClick = (seat) => {
    if (selectedSeats.includes(seat)) {
      // Hủy chọn ghế
      setSelectedSeats(selectedSeats.filter((s) => s !== seat));
    } else {
      // Chọn ghế
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  const seats = Array.from({ length: 150 }, (_, index) => ({
    id: `G${index + 1}`,
    status: selectedSeats.includes(`G${index + 1}`) ? "selected" : "available",
  }));




  return (
    <div className="bg-[#27282D] rounded-xl p-6">
      <div className="bg-seatMap">
        <div className="w-full h-full mt-8 justify-items-center">
          <img src={images.screenIcon} alt="screen icon" />
          <p className="font-bold text-2xl">Màn hình</p>
        </div>

        <div className="grid grid-cols-17 gap-2 justify-center mt-12 ms-20 me-20 pb-5">
          {/* Các hàng chữ cái A-J */}
          {["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"].map(
            (rowLabel, rowIndex) => (
              <div key={rowLabel} className="flex items-center">
                
                {/* 3 cột ghế đầu */}
                {seats
                  .filter(
                    (_, index) =>
                      Math.floor(index / 15) === rowIndex && index % 15 < 3
                  )
                  .map((seat, index) => (
                    <div
                      key={seat.id}
                      className="w-12 h-12 flex items-center justify-center rounded cursor-pointer mx-2 my-2"
                      onClick={() => handleSeatClick(seat.id)}
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
                    (_, index) =>
                      Math.floor(index / 15) === rowIndex &&
                      index % 15 >= 3 &&
                      index % 15 < 12
                  )
                  .map((seat, index) => (
                    <div
                      key={seat.id}
                      className="w-12 h-12 flex items-center justify-center rounded cursor-pointer mx-2 my-2"
                      onClick={() => handleSeatClick(seat.id)}
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
                    (_, index) =>
                      Math.floor(index / 15) === rowIndex && index % 15 >= 12
                  )
                  .map((seat, index) => (
                    <div
                      key={seat.id}
                      className="w-12 h-12 flex items-center justify-center rounded cursor-pointer mx-2 my-2"
                      onClick={() => handleSeatClick(seat.id)}
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
            )
          )}


          <div className="flex  items-center mt-2">
            {Array.from({ length:3 }, (_, i) => {
              return (
                <div
                  key={i}
                  className="w-12 text-center text-lg font-semibold mx-2 "
                >
                  {i + 1}
                </div>
              );
            })}       
            <div className="w-8">
              {/* Hiển thị ô trống */}
            </div>
            {Array.from({ length:9 }, (_, i) => {
              return (
                <div
                  key={i}
                  className="w-12 text-center text-lg font-semibold mx-2"
                >
                  {i + 4}
                </div>
              );
            })} 
            <div className="w-8">
              {/* Hiển thị ô trống */}
            </div>
            {Array.from({ length:3 }, (_, i) => {
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
