import React from "react";

const combos = [
  { id: 1, name: "Combo Solo", price: 50000, description: "1 Bắp Ngọt 60oz, 1 Coke 32oz" },
  { id: 2, name: "Combo Couple", price: 115000, description: "1 Bắp Ngọt 60oz, 2 Coke 32oz" },
  { id: 3, name: "Combo Party", price: 209000, description: "1 Bắp Ngọt 60oz, 1 Coke 32oz, 1 Hotdog 250g" },
];

const Invoice = ({ selectedSeats, selectedCombos }) => {
  const totalSeatsPrice = selectedSeats.length * 50000; // Giá mỗi ghế 50,000 VND
  const totalComboPrice = Object.entries(selectedCombos).reduce(
    (total, [id, qty]) => total + combos.find((combo) => combo.id === parseInt(id)).price * qty,
    0
  );

  const totalPrice = totalSeatsPrice + totalComboPrice;

  return (
    <div className="bg-gray-800 rounded-lg p-6">
      <h4 className="text-yellow-400 font-bold text-lg mb-4">Hóa đơn</h4>
      <div className="text-sm space-y-2">
        <p><strong>Ghế:</strong> {selectedSeats.join(", ") || "Chưa chọn"} </p>
        <p><strong>Combo:</strong></p>
        {Object.entries(selectedCombos).map(([id, qty]) =>
          qty > 0 ? (
            <p key={id}>
              {combos.find((combo) => combo.id === parseInt(id)).name}: {qty} x {combos.find((combo) => combo.id === parseInt(id)).price.toLocaleString()} VND
            </p>
          ) : null
        )}
        <p><strong>Tổng tiền:</strong> {totalPrice.toLocaleString()} VND</p>
      </div>
      <button className="bg-yellow-400 text-black font-bold py-2 px-4 rounded-lg w-full mt-4">
        Đặt vé
      </button>
    </div>
  );
};

export {Invoice};
