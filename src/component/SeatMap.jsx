import React, { useState } from "react";

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

  const seats = Array.from({ length: 100 }, (_, index) => ({
    id: `G${index + 1}`,
    status: selectedSeats.includes(`G${index + 1}`) ? "selected" : "available",
  }));

  return (
    <div className="bg-gray-800 rounded-lg p-6">
      <h4 className="text-yellow-400 font-bold text-lg mb-4">Sơ đồ ghế</h4>
      <div className="grid grid-cols-15 gap-2">
        {seats.map((seat) => (
          <div
            key={seat.id}
            className={`w-6 h-6 flex items-center justify-center rounded cursor-pointer
              ${seat.status === "available" ? "bg-gray-700" : ""}
              ${seat.status === "selected" ? "bg-yellow-400 text-black" : ""}
            `}
            onClick={() => handleSeatClick(seat.id)}
          >
            {seat.id}
          </div>
        ))}
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
  );
};

export {SeatMap};
