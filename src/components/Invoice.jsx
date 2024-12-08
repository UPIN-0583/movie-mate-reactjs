import React from "react";
import { useMovies } from "../context/MovieContext";

const Invoice = ({
  selectedSeats,
  selectedCombos,
  selectedCinema,
  selectedMovie,
  selectedTime,
  selectedDate,
}) => {
  const { movies } = useMovies(); // Lấy dữ liệu từ MovieContext

  const totalSeatsPrice = selectedSeats.length * 50000; // Giá mỗi ghế 50,000 VND

  const combos = movies.combos;
  const totalComboPrice = Object.entries(selectedCombos).reduce(
    (total, [id, qty]) => {
      const combo = combos.find((combo) => combo.id === parseInt(id)); // Tìm combo theo id
      return combo ? total + combo.price * qty : total; // Nếu tìm thấy combo, tính giá
    },
    0
  );

  const totalPrice = totalSeatsPrice + totalComboPrice;

  return (
    <div className="bg-[#27282D] rounded-lg p-6">
      <h4 className="text-white font-bold text-2xl mb-4 py-2">Hóa đơn</h4>
      <div className="space-y-2">
        <p className="text-yellow-400 text-lg text-left">
          <strong>Rạp chiếu</strong>
        </p>
        <p className="text-white text-lg font-medium text-left">
          {selectedCinema || "Chưa chọn rạp"}
        </p>

        <p className="text-yellow-400 text-lg text-left">
          <strong>Phim</strong>
        </p>
        <p className="text-white text-lg font-medium text-left">
          {selectedMovie || "Chưa chọn phim"}
        </p>

        <p className="text-yellow-400 text-lg text-left">
          <strong>Thời gian</strong>
        </p>
        <p className="text-white text-lg font-medium text-left">
          {selectedTime || selectedDate
            ? `${selectedTime} ${selectedDate}`
            : "Chưa chọn thời gian"}
        </p>
        <div className="flex">
          <div className="flex-1">
            <p className="text-yellow-400 text-lg text-left">
              <strong>Ghế:</strong>
            </p>
            <p className="text-white text-lg font-medium text-left">
              {selectedSeats.length > 0
                ? selectedSeats.join(", ")
                : "Chưa chọn ghế"}
            </p>
          </div>
          <div className="flex-1">
            <p className="text-yellow-400 text-lg text-left">
              <strong>Combo:</strong>
            </p>
            {Object.entries(selectedCombos).map(([id, qty]) =>
              qty > 0 ? (
                <p
                  key={id}
                  className="text-white text-lg font-medium text-left"
                >
                  {qty} {combos.find((combo) => combo.id === parseInt(id)).name}
                </p>
              ) : null
            )}
          </div>
        </div>

        <hr className="border-dashed border border-white" />
        <p>
          <strong className="text-yellow-400">TỔNG TIỀN:</strong>{" "}
          {totalPrice.toLocaleString()} VND
        </p>
      </div>

      <button className="bg-yellow-400 text-black font-bold py-2 px-4 rounded-lg w-full mt-4">
        Đặt vé
      </button>
    </div>
  );
};

export { Invoice };
