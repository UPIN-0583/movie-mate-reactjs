// src/pages/OrderPayment.js
import React from "react";
import { OrderDetails } from "../components/OrderDetails";
import { QRCodeScanner } from "../components/QRCodeScanner";

const OrderPayment = () => {
  // Dữ liệu đơn hàng
  const orderData = {
    supplier: "MovieMate Cinema",
    orderId: "12345678910",
    orderDetails: "Mua vé xem phim Dimono: Lối thoát cuối cùng, Ghế G4 G5 G13 G14",
    totalAmount: "348.000"
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
