import React from "react";
import { TicketCard } from "../components/TicketCard";
import images from "../asset";

const TicketHistory = () => {
  const ticketDetails = {
    title: "Lối Thoát Cuối Cùng",
    poster: images.NowShowingMovie,
    duration: "2h 29m",
    genre: "Hành động, tâm lý",
    time: "20:15 PM",
    date: "18/06/2024",
    room: "Phòng 4",
    seats: "Ghế H7, H8",
    price: "210.000 VNĐ",
    theater: "Moviemate Nguyễn Du",
    address: "116 Nguyễn Du, Quận 1, Tp.HCM",
    barcode: "78889377726",
  };

  const transactions = [
    {
      date: "18/06/2024",
      orderId: "78889377726",
      movieName: "Lối thoát cuối cùng",
      amount: "210.000 VNĐ",
    },
    ...Array(6).fill({
      date: "16/06/2024",
      orderId: "18257917519",
      movieName: "Cái Giá Của Hạnh Phúc",
      amount: "120.000 VNĐ",
    }),
  ];

  return (
    <div className="bg-[#151515] text-white min-h-screen py-10">
      <div className="container w-[90%] mx-auto">
        {/* Title section */}
        <div className="flex justify-center items-center mt-4 mb-10 p-4 bg-blue-950 rounded-lg">
          <h2 className="text-white text-2xl font-bold">
            THÔNG TIN KHÁCH HÀNG
          </h2>
        </div>

        <div className="flex gap-8">
          {/* Thẻ vé chi tiết */}
          <div className="w-1/3">
            <TicketCard ticketDetails={ticketDetails} />
          </div>

          {/* Bảng lịch sử giao dịch */}
          <div className="w-2/3 bg-[#1E1E1E] p-6 rounded-xl shadow">
            <table className="table-auto w-full text-left mt-2 rou">
              <thead>
                <tr>
                  <th className="px-4 py-2 text-yellow-500">Ngày Giao Dịch</th>
                  <th className="px-4 py-2 text-yellow-500">Mã Đơn Hàng</th>
                  <th className="px-4 py-2 text-yellow-500">Tên Phim</th>
                  <th className="px-4 py-2 text-yellow-500">Số Tiền</th>
                  <th className="px-4 py-2 text-yellow-500">Chi Tiết</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((transaction, index) => (
                  <tr key={index}>
                    <td className="px-4 py-2">{transaction.date}</td>
                    <td className="px-4 py-2">{transaction.orderId}</td>
                    <td className="px-4 py-2">{transaction.movieName}</td>
                    <td className="px-4 py-2">{transaction.amount}</td>
                    <td className="px-4 py-2 text-yellow-500 hover:underline">
                      <a href="#">Chi tiết</a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export { TicketHistory };
