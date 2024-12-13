import React from "react";
import images from "../asset";
import { ROUTING_WATCHTRAILER_UC } from "../router/path";
import { MovieInfo } from "../components/MovieInfo";

const MovieDetailUC = () => {
  const handleWatchTrailerClick = () => {
    window.open(ROUTING_WATCHTRAILER_UC, "_blank"); // Mở đường dẫn trong tab mới
  };

  return (
    <div className="bg-[#151515] text-white min-h-screen">
      <div className="container mx-auto px-4 py-10 ">
        {/* Poster và Thông Tin Phim */}
        <MovieInfo
          movie="Tiên Tri Tử Thần"
          poster={images.UpComingMovie}
          genres={['Hành Động', 'Tâm Lý']}
          rating="PG"
          duration="1h 55m"
          description="Một kẻ lạ mặt Jun-woo dự báo cái chết sẽ đến với Jeong-yun trong 6 tiếng sắp tới. Từ phớt lờ, đến hoang mang, và nhận ra hiểm họa gần kề, cô buộc phải đồng hành cùng kẻ tiên tri bí ẩn. Càng cố tìm hiểu cô lại nhận ra Jun-woo chính là manh mối duy nhất liên quan đến những vụ án sát nhân hàng loạt."
          producer="Lee Yoon Seok"
          director="Lee Yoon Seok"
          cast={['Jaehyun', 'Park Ju Hyun', 'Kwak Si Yang']}
          onWatchTrailerClick={handleWatchTrailerClick}
        />

        {/* Lịch chiếu */}
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
