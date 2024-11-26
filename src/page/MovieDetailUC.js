import React from "react";
import images from "../asset";
import { ROUTING_WATCHTRAILER_UC } from "../router/path";



const MovieDetailUC = () => {

    const handleWatchTrailerClick = () => {
        window.open(ROUTING_WATCHTRAILER_UC, "_blank"); // Mở đường dẫn trong tab mới
    };

    return (
      <div className="container mx-auto px-4 py-10 text-white bg-black m-0">
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
  
          {/* Thông Tin Phim và Chi Tiết Bổ Sung */}
          <div className="flex-1 md:flex md:justify-between md:items-start">
            {/* Thông Tin Phim */}

            <div className="md:w-2/3 text-left">
              <h1 className="text-4xl font-bold mb-4 text-white">Tiên Tri Tử Thần</h1>
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">Hành Động</span>
                <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">Tâm Lý</span>
              </div>

              <div className="flex items-center gap-4 mb-4">
                <span className="text-pink-500 font-semibold text-lg">P</span>
                <span>13 (18+)</span>
                <span className=""></span>
                <span>1h 55m</span>
              </div>

              <div className="flex items-center text-2xl gap-1 mb-4">
                {/* Đánh Giá Sao */}
                {[...Array(4)].map((_, i) => (
                  <span key={i} className=" text-yellow-400">★</span>
                ))}
                <span className="text-gray-500">★</span> {/* Sao rỗng */}
              </div>
              

              <p className="text-white mb-4 text-left">
                Một kẻ lạ mặt Jun-woo dự báo cái chết sẽ đến với Jeong-yun trong 6 tiếng sắp tới. Từ hoảng loạn, cô buộc phải hành động để tránh cái chết. Càng cố tìm hiểu, cô lại nhận ra Jun-woo chính là mắt xích duy nhất liên quan đến những vụ án sát nhân hàng loạt.
              </p>
              <button 
                        className="bg-transparent border border-white text-white font-bold py-2 px-4 rounded-lg flex items-center text-sm w-35"
                        onClick={(e) => {
                            e.stopPropagation(); // Ngăn sự kiện lan đến thẻ cha
                            handleWatchTrailerClick(); // Mở trailer
                        }}
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
            <div className="mt-8 md:mt-0 w-1/3 text-white text-left p-7 h-auto">
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
  
        {/* Thông Tin Lịch Chiếu */}
        <div className="mt-8">
          <button className="w-2/3 align-middle bg-indigo-600 text-gray-300 py-3 rounded-lg cursor-default font-semibold">
            &#9888; Hiện chưa có lịch chiếu
          </button>
        </div>
      </div>
    );
  };
  
  export  {MovieDetailUC};
  
  
  
