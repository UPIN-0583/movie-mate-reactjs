// src/pages/OrderPayment.js
import React from "react";
import { OrderDetails } from "../components/OrderDetails";
import { QRCodeScanner } from "../components/QRCodeScanner";
import {useLocation} from "react-router-dom";
import {useCreateOrder} from "../api/order/useCreateOrder";

const OrderPayment = () => {

  const location = useLocation();
  const {
    ordercode,
    selectedSeats,
    selectedCombos,
    selectedCinema,
    selectedMovie,
    selectedTime,
    selectedDate,
    totalPrice,
  } = location.state || {}; // Lấy dữ liệu từ state



  const numberToLetter = {
    1: "Combo Solo",
    2: "Combo Solo 2",
    3: "Combo Couple",
    4: "Combo Party",
  };

    // Xử lý selectedCombos
  const combosDetails = Object.entries(selectedCombos)
      .map(([combo, qty]) => {
        const convertedQty =  `${numberToLetter[combo]}`;
        return `${convertedQty} ${qty}`;
      })
      .join(", ");

// Dữ liệu đơn hàng
  const orderData = {
    supplier: `${selectedCinema}`,
    orderId: `${ordercode}`,
    orderDetails: `Mua vé xem phim ${selectedMovie}, Ghế ${selectedSeats.join(" ")}, ${
        combosDetails ? `Combo: ${combosDetails}, ` : ""
    }Tại rạp ${selectedCinema}, Thời gian ${selectedTime}, Ngày ${selectedDate}`,
    totalAmount: `${totalPrice} VNĐ`,
  };



  return (
    <div className="bg-[#151515] min-h-screen flex flex-col">
      <div className="container w-[90%] mx-auto px-8 py-4">

        {/* Title section */}
        <div className="flex justify-center items-center mt-4 mb-10 p-4 bg-blue-950 rounded-lg">
          <h2 className="text-white text-2xl font-bold">THANH TOÁN ĐƠN HÀNG</h2>
        </div>

        {/* Content */}
        <div className="flex gap-8 w-full">
          {/* Thông tin đơn hàng */}
          <OrderDetails orderData={orderData} />

          {/* Quét mã QR */}
          <QRCodeScanner />
        </div>
      </div>
    </div>
  );
};

export { OrderPayment };
