import React from "react";
import images from "../asset";
import { ROUTING_WATCHTRAILER_UC } from "../router/path";

const MovieDetailUC = () => {
  const handleWatchTrailerClick = () => {
    window.open(ROUTING_WATCHTRAILER_UC, "_blank"); // Mở đường dẫn trong tab mới
  };

  return (
    <div className="bg-[#151515] text-white min-h-screen">
      <div className="container mx-auto px-4 py-10 ">
        {/* Poster và Thông Tin Phim */}
        <div className="flex flex-col md:flex-row items-start gap-8 w-11/12 m-auto">
          {/* Poster Phim */}
          <div className="w-1/4 ms-8">
            <img
              src={images.UpComingMovie}
              alt="Movie Poster"
              className="rounded-lg shadow-lg border border-white"
            />
          </div>

          {/* Thông Tin Phim */}
          <div className="flex-1 md:flex md:justify-between md:items-start mt-10">
            <div className="md:w-2/3 text-left">
              <h1 className="text-4xl font-bold mb-4">Tiên Tri Tử Thần </h1>
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">
                  Hành Động
                </span>
                <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">
                  Tâm Lý
                </span>
              </div>

              <div className="flex items-center gap-4 mb-4">
                <p className=" bg-orange-200 text-black p-2 rounded-full w-12 text-center h-10">
                  PG
                </p>
                <span>13 (18+)</span>
                <img
                  className="bg-green-200 text-black p-2 rounded-full w-12 text-center h-10"
                  src={images.timeBlackIcon}
                  alt="time icon"
                />
                <span>1h 55m</span>
              </div>

              <div className="flex items-center text-2xl gap-1 mb-4">
                {[...Array(4)].map((_, i) => (
                  <img src={images.starYellowIcon} alt="star fill"></img>
                ))}
                <img src={images.starGrayIcon} alt="star no fill" />
                {/* Sao rỗng */}
              </div>

              <p className="mb-4 text-lg text-blue-500 font-bold">
                Nội dung chính
              </p>
              <p className="mb-4">
                Một kẻ lạ mặt Jun-woo dự báo cái chết sẽ đến với Jeong-yun trong
                6 tiếng sắp tới. Từ phớt lờ, đến hoang mang, và nhận ra hiểm họa
                gần kề, cô buộc phải đồng hành cùng kẻ tiên tri bí ẩn. Càng cố
                tìm hiểu cô lại nhận ra Jun-woo chính là manh mối duy nhất liên
                quan đến những vụ án sát nhân hàng loạt.
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
                <p className="ps-2">Xem Trailer</p>
              </button>
            </div>

            {/* Chi Tiết Bổ Sung */}
            <div className="mt-8 md:mt-0 w-1/3 text-left p-7 h-auto">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-blue-500">
                    Nhà sản xuất
                  </h3>
                  <p>Lee Yoon Seok</p>
                </div>
                <div>
                  <h3 className="font-semibold text-blue-500">Đạo diễn</h3>
                  <p>Lee Yoon Seok</p>
                </div>
                <div>
                  <h3 className="font-semibold text-blue-500">Diễn viên</h3>
                  <p>Jaehyun</p>
                  <p>Park Ju Hyun</p>
                  <p>Kwak Si Yang</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center mt-10">
          <div className="w-2/3 m-auto flex items-center justify-center space-x-4 bg-indigo-600 text-white py-3 rounded-lg font-bold">
            <img
              src={images.ticketIcon}
              alt="Ticket Icon"
              className="w-8 h-8"
            />
            <p>Hiện chưa có lịch chiếu</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { MovieDetailUC };
