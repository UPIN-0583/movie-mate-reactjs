import React from "react";
import { Link } from "react-router-dom";
import {ROUTING_HOME, ROUTING_TICKET_HISTORY} from "../router"
import {toast} from "react-toastify";

const OrderDetails = ({ orderData }) => {
  // Lấy các dữ liệu từ props (orderData)
  const { supplier, orderId, orderDetails, totalAmount } = orderData;

  return (
    <div className="bg-[#27282D] rounded-lg p-6 w-1/3 text-left">
      <h2 className="text-2xl font-bold mb-4 text-white text-center p-2">
        Thông tin đơn hàng
      </h2>
      <p className="text-lg font-semibold text-yellow-400 p-2">Nhà cung cấp:</p>
      <p className="text-lg text-white pl-2">{supplier}</p>
      <p className="text-lg font-semibold text-yellow-400 p-2">Mã đơn hàng:</p>
      <p className="text-lg text-white pl-2">{orderId}</p>
      <p className="text-lg font-semibold text-yellow-400 p-2">
        Chi tiết đơn hàng:
      </p>
      <p className="text-lg text-white pl-2">{orderDetails}</p>
      <hr className="my-4 border-gray-600" />
      <div className="flex justify-between items-center text-lg font-semibold text-white px-2">
        <p className="text-yellow-400">Thành tiền:</p>
        <p>{totalAmount}</p>
      </div>
      <Link
        to = {ROUTING_HOME}
        onClick={() => toast.success("Đặt vé thành công!")}
      >
        <button className="mt-4 bg-yellow-400 text-black font-bold py-2 px-4 rounded-lg w-full ">
          Xác nhận đã thanh toán
        </button>
      </Link>
    </div>
  );
};

export { OrderDetails };
