import React, { useState } from "react";
import images from "../asset";
import { NowShowingMovieCard } from "../component/NowShowingMovieCard";

const MovieListNS = () => {
  const nowShowingMovies = [
    { title: "Ngày Xưa Có Một Chuyện Tình", poster: images.NowShowingMovie1, rating: "⭐⭐⭐⭐⭐", time: "2h 4m" },
    { title: "Ngày Xưa Có Một Chuyện Tình", poster: images.NowShowingMovie2, rating: "⭐⭐⭐⭐⭐", time: "2h 4m" },
    { title: "Ngày Xưa Có Một Chuyện Tình", poster: images.NowShowingMovie3, rating: "⭐⭐⭐⭐⭐", time: "2h 4m" },
    { title: "Ngày Xưa Có Một Chuyện Tình", poster: images.NowShowingMovie4, rating: "⭐⭐⭐⭐⭐", time: "2h 4m" },
    { title: "Ngày Xưa Có Một Chuyện Tình", poster: images.NowShowingMovie5, rating: "⭐⭐⭐⭐⭐", time: "2h 4m" },
    { title: "Ngày Xưa Có Một Chuyện Tình", poster: images.NowShowingMovie6, rating: "⭐⭐⭐⭐⭐", time: "2h 4m" },
    { title: "Ngày Xưa Có Một Chuyện Tình", poster: images.NowShowingMovie7, rating: "⭐⭐⭐⭐⭐", time: "2h 4m" },
    { title: "Ngày Xưa Có Một Chuyện Tình", poster: images.NowShowingMovie8, rating: "⭐⭐⭐⭐⭐", time: "2h 4m" },
    { title: "Ngày Xưa Có Một Chuyện Tình", poster: images.NowShowingMovie9, rating: "⭐⭐⭐⭐⭐", time: "2h 4m" },
    { title: "Ngày Xưa Có Một Chuyện Tình", poster: images.NowShowingMovie10, rating: "⭐⭐⭐⭐⭐", time: "2h 4m" },
    { title: "Ngày Xưa Có Một Chuyện Tình", poster: images.NowShowingMovie11, rating: "⭐⭐⭐⭐⭐", time: "2h 4m" },
    { title: "Ngày Xưa Có Một Chuyện Tình", poster: images.NowShowingMovie12, rating: "⭐⭐⭐⭐⭐", time: "2h 4m" },
    { title: "Ngày Xưa Có Một Chuyện Tình", poster: images.NowShowingMovie13, rating: "⭐⭐⭐⭐⭐", time: "2h 4m" },
    { title: "Ngày Xưa Có Một Chuyện Tình", poster: images.NowShowingMovie14, rating: "⭐⭐⭐⭐⭐", time: "2h 4m" },
    { title: "Ngày Xưa Có Một Chuyện Tình", poster: images.NowShowingMovie15, rating: "⭐⭐⭐⭐⭐", time: "2h 4m" },
    { title: "Ngày Xưa Có Một Chuyện Tình", poster: images.NowShowingMovie16, rating: "⭐⭐⭐⭐⭐", time: "2h 4m" },
  ];

  // State to manage how many movies are shown
  const [visibleMovies, setVisibleMovies] = useState(12);

  // Handle "See More" button click
  const handleSeeMore = () => {
    setVisibleMovies(visibleMovies + 4); // Show 4 more movies each time
  };

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col">
      <div className="container mx-auto px-8 py-4 flex-1">
        {/* Title section */}
        <div className="flex justify-center items-center mt-4 mb-10 p-4 bg-blue-950 rounded-lg">
          <h2 className="text-white text-2xl font-bold">DANH SÁCH PHIM ĐANG CHIẾU</h2>
        </div>

        {/* Movie List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-1 gap-y-8 mb-8">
          {nowShowingMovies.slice(0, visibleMovies).map((movie, index) => (
            <NowShowingMovieCard key={index} movie={movie} />
          ))}
        </div>
      </div>

      {/* "Xem thêm" button section */}
      {visibleMovies < nowShowingMovies.length && (
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
