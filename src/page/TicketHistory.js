import React from "react";
import { TicketCard } from "../components/TicketCard";
import { useMovies } from "../context/MovieContext";

const TicketHistory = () => {
  const { movies } = useMovies();

  const ticketDetails = movies.ticketDetails || [];
  const transactions = movies.transactions || [];

  return (
    <div className="bg-[#151515] text-white min-h-screen py-10">
      <div className="container w-[90%] mx-auto">
        {/* Title section */}
        <div className="flex justify-center items-center mt-4 mb-10 p-4 bg-blue-950 rounded-lg">
          <h2 className="text-white text-2xl font-bold">
            LỊCH SỬ MUA VÉ
          </h2>
        </div>

        <div className="flex flex-row gap-8">
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
