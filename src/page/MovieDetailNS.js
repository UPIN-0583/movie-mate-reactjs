import React, { useState } from "react";
import { SeatMap} from "../component/SeatMap";
import { ComboSelection} from "../component/ComboSelection";
import { Invoice} from "../component/Invoice";
import { ROUTING_WATCHTRAILER_NS } from "../router";

const MovieDetailNS = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [selectedCombos, setSelectedCombos] = useState({});

  const handleSeatSelection = (seats) => setSelectedSeats(seats);
  const handleComboSelection = (id, qty) =>
    setSelectedCombos({ ...selectedCombos, [id]: qty });

  const handleWatchTrailerClick = () => {
    window.open(ROUTING_WATCHTRAILER_NS, "_blank"); // Mở đường dẫn trong tab mới
  };

  return (
    <div className="bg-black text-white min-h-screen">
      <div className="container mx-auto px-4 py-10">
        {/* Poster và Thông Tin Phim */}
        <div className="flex flex-col md:flex-row items-start gap-8">
          {/* Poster Phim */}
          <div className="w-full md:w-1/3 lg:w-1/4">
            <img
              src="path_to_movie_poster.jpg"
              alt="Tiên Tri Tử Thần Poster"
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Thông Tin Phim */}
          <div className="flex-1 md:flex md:justify-between md:items-start">
            <div className="md:w-2/3 text-left">
              <h1 className="text-4xl font-bold mb-4">Tiên Tri Tử Thần</h1>
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">Hành Động</span>
                <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">Tâm Lý</span>
              </div>

              <div className="flex items-center gap-4 mb-4">
                <span className="text-pink-500 font-semibold text-lg">P</span>
                <span>13 (18+)</span>
                <span>1h 55m</span>
              </div>

              <div className="flex items-center text-2xl gap-1 mb-4">
                {[...Array(4)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
                <span className="text-gray-500">★</span> {/* Sao rỗng */}
              </div>

              <p className="mb-4">
                Một kẻ lạ mặt Jun-woo dự báo cái chết sẽ đến với Jeong-yun trong 6 tiếng sắp tới.
                Cô buộc phải hành động để tránh cái chết. Càng cố tìm hiểu, cô lại nhận ra Jun-woo
                chính là mắt xích duy nhất liên quan đến những vụ án sát nhân hàng loạt.
              </p>

              <button
                className="bg-transparent border border-white text-white font-bold py-2 px-4 rounded-lg flex items-center"
                onClick={handleWatchTrailerClick}
              >
                <span className="material-icons mr-2">play_circle</span>
                Xem Trailer
              </button>
            </div>

            {/* Chi Tiết Bổ Sung */}
            <div className="mt-8 md:mt-0 w-1/3 text-left p-7 h-auto">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-indigo-600">Nhà sản xuất</h3>
                  <p>Lee Yoon Seok</p>
                </div>
                <div>
                  <h3 className="font-semibold text-indigo-600">Đạo diễn</h3>
                  <p>Lee Yoon Seok</p>
                </div>
                <div>
                  <h3 className="font-semibold text-indigo-600">Diễn viên</h3>
                  <p>Jaehyun</p>
                  <p>Park Ju Hyun</p>
                  <p>Kwak Si Yang</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sơ Đồ Ghế và Combo */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          <SeatMap onSeatSelect={handleSeatSelection} />
          <ComboSelection onComboSelect={handleComboSelection} />
          <Invoice selectedSeats={selectedSeats} selectedCombos={selectedCombos} />
        </div>
      </div>
    </div>
  );
};

export { MovieDetailNS };
