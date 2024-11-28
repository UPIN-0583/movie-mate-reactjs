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
    <div className="bg-gray-800 rounded-lg p-6">
      <div className="bg-seatMap">
        <div className="w-full h-full mt-8 justify-items-center">
          <img src={images.screenIcon} alt="screen icon" />
          <p className="font-bold text-2xl">Màn hình</p>
        </div>

        <div className="grid grid-cols-17 gap-2 justify-center mt-[100px] ms-20 me-20">
          {/* Các hàng chữ cái A-J */}
          {["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"].map(
            (rowLabel, rowIndex) => (
              <div key={rowLabel} className="flex items-center">
                {/* Hiển thị chữ cái cho hàng ghế */}
                <div className="flex w-8 justify-center items-center text-lg font-semibold">
                  {rowLabel}
                </div>
                {/* Các ghế trong hàng */}
                {seats
                  .filter((_, index) => Math.floor(index / 15) === rowIndex) // Lọc ghế theo hàng
                  .map((seat, index) => (
                    <div
                      key={seat.id}
                      className="w-12 h-12 flex items-center justify-center rounded cursor-pointer mx-2 my-2"
                      onClick={() => handleSeatClick(seat.id)}
                      style={{
                        gridColumn: index, // Chỉ định cột cho các ghế, bắt đầu từ cột 2 (cột số 1 là cho chỉ mục)
                        gridRow: rowIndex, // Chỉ định hàng cho ghế, bắt đầu từ hàng thứ 0 để tránh hàng số
                      }}
                    >
                      {seat.status === "available" ? (
                        <img
                          src={images.seatWhiteIcon} // Đường dẫn đến file SVG của ghế còn trống
                          alt="available seat"
                          className="w-full h-full"
                        />
                      ) : seat.status === "selected" ? (
                        <img
                          src={images.seatYellowIcon} // Đường dẫn đến file SVG của ghế đã chọn
                          alt="selected seat"
                          className="w-full h-full"
                        />
                      ) : (
                        <img
                          src={images.seatGrayIcon} // Đường dẫn đến file SVG của ghế đã chiếm
                          alt="unavailable seat"
                          className="w-full h-full"
                        />
                      )}
                    </div>
                  ))}

                {/* Hiển thị chữ cái cho hàng ghế */}
                <div className="flex w-8 justify-center items-center text-lg font-semibold">
                  {rowLabel}
                </div>
              </div>
            )
          )}

          {/* Cột số từ 1 đến 15 */}
          <div className="flex justify-center items-center mt-2">
            <div className="w-8"></div> {/* Ô trống đầu */}
            {Array.from({ length: 15 }, (_, i) => (
              <div
                key={i}
                className="w-12 text-center text-lg font-semibold mx-2"
              >
                {i + 1} {/* Hiển thị các số từ 1 đến 15 */}
              </div>
            ))}
            <div className=" w-8"></div> {/* Ô trống cuối */}
          </div>
        </div>

        <div className="mt-4 flex space-x-4">
          <div className="flex items-center">
            <div className="w-6 h-6 bg-gray-700 rounded mr-2"></div>
            <p>Ghế trống</p>
          </div>
          <div className="flex items-center">
            <div className="w-6 h-6 bg-yellow-400 rounded mr-2"></div>
            <p>Ghế đang chọn</p>
          </div>
          <div className="flex items-center">
            <div className="w-6 h-6 bg-gray-500 rounded mr-2"></div>
            <p>Ghế đã đặt</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { SeatMap };
