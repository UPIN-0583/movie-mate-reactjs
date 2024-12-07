import React, { useState } from "react";
import { SeatMap } from "../components/SeatMap";
import { ComboSelection } from "../components/ComboSelection";
import { Invoice } from "../components/Invoice";
import { MovieSchedule } from "../components/MovieSchedule";
import { ROUTING_WATCHTRAILER_NS } from "../router";
import images from "../asset";

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
    <div className="bg-[#151515] text-white min-h-screen">
      <div className="container mx-auto px-4 py-10 ">
        {/* Poster và Thông Tin Phim */}
        <div className="flex flex-col md:flex-row items-start gap-8 w-11/12 m-auto">
          {/* Poster Phim */}
          <div className="w-1/4 ms-8">
            <img
              src={images.NowShowingMovie}
              alt="Movie Poster"
              className="rounded-lg shadow-lg border border-white"
            />
          </div>

          {/* Thông Tin Phim */}
          <div className="flex-1 md:flex md:justify-between md:items-start mt-10">
            <div className="md:w-2/3 text-left">
              <h1 className="text-4xl font-bold mb-4">Domino: Lối Thoát Cuối Cùng </h1>
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">Hành Động</span>
                <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">Tâm Lý</span>
              </div>

              <div className="flex items-center gap-4 mb-4">
                <p className=" bg-orange-200 text-black p-2 rounded-full w-12 text-center h-10">PG</p>
                <span>13 (18+)</span>
                <img className="bg-green-200 text-black p-2 rounded-full w-12 text-center h-10"
                  src={images.timeBlackIcon}
                  alt="time icon" />
                <span>1h 55m</span>
              </div>

              <div className="flex items-center text-2xl gap-1 mb-4">
                {[...Array(4)].map((_, i) => (
                  <img
                    src={images.starYellowIcon}
                    alt="star fill"
                  >
                  </img>
                ))}
                <img
                  src={images.starGrayIcon}
                  alt="star no fill" />{/* Sao rỗng */}
              </div>

              <p className="mb-4 text-lg text-indigo-600 font-bold">
                Nội dung chính
              </p>
              <p className="mb-4">
                Sau khi cha bị kẻ ác sát hại, từ người ngoài cuộc, An (Thuận Nguyễn) từng bước bị kéo vào cuộc chiến của các phe đảng xã hội đen. An một mình sẽ phải đối mặt với những nguy hiểm đe dọa đến cả tính mạng.
              </p>

              <button
                className="bg-transparent border border-white text-white font-bold py-2 px-4 rounded-lg flex items-center text-sm w-35"
                onClick={handleWatchTrailerClick}
              >
                <img
                  src={images.trailerIcon}
                  alt="Trailer"
                  className="w-6 h-6"
                />
                <p className='ps-2'>Xem Trailer</p>
              </button>
            </div>

            {/* Chi Tiết Bổ Sung */}
            <div className="mt-8 md:mt-0 w-1/3 text-left p-7 h-auto">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-indigo-600">Nhà sản xuất</h3>
                  <p>Nguyễn Phúc Huy Cương</p>
                </div>
                <div>
                  <h3 className="font-semibold text-indigo-600">Đạo diễn</h3>
                  <p>Nguyễn Phúc Huy Cương</p>
                </div>
                <div>
                  <h3 className="font-semibold text-indigo-600">Diễn viên</h3>
                  <p>Thuận Nguyễn</p>
                  <p>Quốc Cường</p>
                  <p>Henry Nguyễn</p>
                  <p>Huỳnh Anh Tuấn</p>
                  <p>Cát Hạ</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      <div className="mt-10 w-11/12 m-auto">
                <MovieSchedule/>
      </div>

        {/* Sơ Đồ Ghế */}
        <div className="mt-10 w-11/12 m-auto ">
          <SeatMap onSeatSelect={handleSeatSelection} />
        </div>
        
        {/* Combo và hoá đơn */}
        <div className="mt-10 w-11/12 m-auto grid grid-cols-3 gap-6">
          <div className="col-span-2">
            <ComboSelection onComboSelect={handleComboSelection} />
          </div>
          <div className="col-span-1">
            <Invoice selectedSeats={selectedSeats} selectedCombos={selectedCombos} />
          </div>
        </div>
      </div>
    </div>
  );
};

export { MovieDetailNS };
