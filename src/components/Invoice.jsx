import React from "react";

const combos = [
  { id: 1, name: "Combo Solo", price: 50000, description: "1 Bắp Ngọt 60oz, 1 Coke 32oz" },
  { id: 2, name: "Combo Couple", price: 115000, description: "1 Bắp Ngọt 60oz, 2 Coke 32oz" },
  { id: 3, name: "Combo Party", price: 209000, description: "1 Bắp Ngọt 60oz, 1 Coke 32oz, 1 Hotdog 250g" },
  { id: 4, name: "Combo Party", price: 229000, description: "2 Bắp Ngọt 60oz, 1 Coke 32oz, 1 Hotdog 250g" }
];

const Invoice = ({ selectedSeats, selectedCombos }) => {
  const totalSeatsPrice = selectedSeats.length * 50000; // Giá mỗi ghế 50,000 VND
  const totalComboPrice = Object.entries(selectedCombos).reduce(
    (total, [id, qty]) => total + combos.find((combo) => combo.id === parseInt(id)).price * qty,
    0
  );

  const totalPrice = totalSeatsPrice + totalComboPrice;

  return (
    <div className="bg-[#27282D] rounded-lg p-6">
      <h4 className="text-white font-bold text-2xl mb-4 py-2">Hóa đơn</h4>
      <div className="text-sm space-y-2">
        <p className="text-yellow-400 text-lg text-left"><strong>MovieMate Quốc Thanh</strong></p>
        <p className="text-white text-sm font-medium text-left">MovieMate Quốc Thanh</p>
        <p className="text-yellow-400 text-lg text-left"><strong>Phim</strong></p>
        <p className="text-white text-sm font-medium text-left">Domino: Lối Thoát Cuối Cùng</p>
        <p className="text-yellow-400 text-lg text-left"><strong>Thời gian</strong></p>
        <p className="text-white text-sm font-medium text-left">20 : 15 Chủ nhật 27/10/2024</p>
        <div className="flex">
          <p className="flex-1 text-left"><strong className="text-yellow-400 text-lg">Ghế:</strong> {selectedSeats.join(", ") || "Chưa chọn"} </p>
          <p className="flex-1 text-left"><strong className="text-yellow-400 text-lg">Combo:</strong></p>
        </div>
        
        {Object.entries(selectedCombos).map(([id, qty]) =>
          qty > 0 ? (
            <p key={id}>
              {qty}  {combos.find((combo) => combo.id === parseInt(id)).name}
            </p>
          ) : null
        )}
        <hr className="border-dashed border border-white" />
        <p><strong className="text-yellow-400">TỔNG TIỀN:</strong> {totalPrice.toLocaleString()} VND</p>
      </div>
      <button className="bg-yellow-400 text-black font-bold py-2 px-4 rounded-lg w-full mt-4">
        Đặt vé
      </button>
    </div>
  );
};

export {Invoice};
