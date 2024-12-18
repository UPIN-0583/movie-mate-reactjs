import React, { useState } from "react";
import { NowShowingMovieCard } from "../components/NowShowingMovieCard";
import { useGetMovies } from "../api/movie/useGetMovie";
import images from "../asset/NowShowingMovie0.jpg"; // Import đường dẫn ảnh mặc định

// Tạo danh sách các đường dẫn ảnh mặc định
const defaultImages = Array.from({ length: 16 }, (_, index) =>
    require(`../asset/NowShowingMovie${index}.jpg`)
);

const MovieListNS = () => {
  // Lấy dữ liệu phim từ backend
  const { data: movies, error, isFetching } = useGetMovies();

  // Quản lý số lượng phim hiển thị
  const [visibleMovies, setVisibleMovies] = useState(12);

  // Xử lý nút "Xem thêm"
  const handleSeeMore = () => {
    setVisibleMovies(visibleMovies + 4);
  };

  if (isFetching) {
    return <div className="text-white">Đang tải dữ liệu...</div>;
  }

  if (error) {
    return <div className="text-red-500">Lỗi: {error.message}</div>;
  }


    console.log(movies);



  return (
      <div className="bg-[#151515] min-h-screen flex flex-col">
        <div className="container w-[90%] mx-auto px-8 py-4 flex-1">
          {/* Tiêu đề */}
          <div className="flex justify-center items-center mt-4 mb-10 p-4 bg-blue-950 rounded-lg">
            <h2 className="text-white text-2xl font-bold">
              DANH SÁCH PHIM ĐANG CHIẾU
            </h2>
          </div>
          {/* Danh sách phim */}
          <div className="grid grid-cols-4 gap-x-1 gap-y-8 mb-8 justify-items-center">
            {movies.slice(0, visibleMovies).map((movie, index) => (
                <NowShowingMovieCard
                    key={movie.id}
                    movie={movie}
                    image={defaultImages[index % defaultImages.length]  } // Sử dụng ảnh theo chỉ số
                />
            ))}
          </div>
        </div>

        {/* Nút "Xem thêm" */}
        {visibleMovies < movies.length && (
            <div className="flex justify-center items-center mb-8">
              <button
                  onClick={handleSeeMore}
                  className="w-[200px] bg-blue-500 text-black font-bold py-2 px-6 rounded-sm hover:bg-blue-600 transition"
              >
                Xem thêm
              </button>
            </div>
        )}
      </div>
  );
};

export { MovieListNS };
