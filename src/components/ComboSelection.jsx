import React, { useState } from "react";

const combos = [
  { id: 1, name: "Combo Solo", price: 50000, description: "1 Bắp Ngọt 60oz, 1 Coke 32oz" },
  { id: 2, name: "Combo Couple", price: 115000, description: "1 Bắp Ngọt 60oz, 2 Coke 32oz" },
  { id: 3, name: "Combo Party", price: 209000, description: "1 Bắp Ngọt 60oz, 1 Coke 32oz, 1 Hotdog 250g" },
];

const ComboSelection = ({ onComboSelect }) => {
  const [selectedCombos, setSelectedCombos] = useState({});

  const handleQuantityChange = (id, delta) => {
    const currentQty = selectedCombos[id] || 0;
    const newQty = Math.max(currentQty + delta, 0);
    setSelectedCombos({ ...selectedCombos, [id]: newQty });
    onComboSelect(id, newQty);
  };

  return (
    <div className="bg-gray-800 rounded-lg p-6">
      <h4 className="text-yellow-400 font-bold text-lg mb-4">Chọn bắp nước</h4>
      <div className="grid grid-cols-2 gap-4">
        {combos.map((combo) => (
          <div
            key={combo.id}
            className="bg-gray-700 p-4 rounded-lg flex flex-col items-start"
          >
            <h5 className="text-yellow-400 font-bold">{combo.name}</h5>
            <p className="text-sm text-gray-400">{combo.description}</p>
            <p className="text-lg font-bold mt-2">{combo.price.toLocaleString()} VND</p>
            <div className="flex items-center mt-2">
              <button
                className="bg-gray-500 text-white px-2 py-1 rounded"
                onClick={() => handleQuantityChange(combo.id, -1)}
              >
                -
              </button>
              <span className="mx-2">{selectedCombos[combo.id] || 0}</span>
              <button
                className="bg-yellow-400 text-black px-2 py-1 rounded"
                onClick={() => handleQuantityChange(combo.id, 1)}
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export {ComboSelection};
