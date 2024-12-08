import React, { useState } from "react";
import { useMovies } from "../context/MovieContext";

const ComboSelection = ({ onComboSelect }) => {
  const { movies } = useMovies();  // Lấy dữ liệu từ MovieContext
  const [selectedCombos, setSelectedCombos] = useState({});

  const handleQuantityChange = (id, delta) => {
    const currentQty = selectedCombos[id] || 0;
    const newQty = Math.max(currentQty + delta, 0);
    setSelectedCombos({ ...selectedCombos, [id]: newQty });
    onComboSelect(id, newQty);
  };

  // Lấy dữ liệu Combo từ MovieContext
  const combos = movies.combos || [];  // Lấy combodata từ context, nếu không có thì dùng mảng rỗng

  return (
    <div className="bg-[#27282D] rounded-lg p-6">
      <h4 className="text-white font-bold text-2xl mb-4 py-2">Chọn bắp nước</h4>
      <div className="grid grid-cols-2 gap-4">
        {combos.map((combo) => (
          <div
          key={combo.id}
          className="bg-transparent border border-sm p-4 rounded-2xl flex flex-row items-start "
        >
          <div>
            <img className="w-36 h-36 mx-2 rounded-2xl border border-sm"
            src="" alt="" />
          </div>
          <div
            className="bg-transparent rounded-lg flex flex-col items-start ms-4"
          >
            <h5 className="text-yellow-400 font-bold">{combo.name}</h5>
            <p className="text-sm text-gray-400">{combo.description}</p>
            <p className="text-lg font-bold mt-2">{combo.price.toLocaleString()} VND</p>
            <div className="flex items-center mt-2">
              <button
                className="bg-blue-500 text-white font-bold rounded-full w-6 h-6 text-center"
                onClick={() => handleQuantityChange(combo.id, -1)}
              >
               {"-"}
              </button>
              <span className="mx-2 font-semibold w-4">{selectedCombos[combo.id] || 0}</span>
              <button
                className="bg-blue-500 text-white font-bold rounded-full w-6 h-6 text-center"
                onClick={() => handleQuantityChange(combo.id, 1)}
              >
                {"+"}
              </button>
            </div>
          </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export {ComboSelection};
