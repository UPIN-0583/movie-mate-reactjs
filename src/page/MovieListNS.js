import React, { useState, useEffect } from "react";
import { NowShowingMovieCard } from "../component/NowShowingMovieCard";
import { useMovies } from "../context/MovieContext";

const MovieListNS = () => {
  // Lấy dữ liệu phim từ MovieContext
  const { movies } = useMovies();
  const nowShowingMovies = movies.nowShowing || []; // Lấy dữ liệu phim "Đang Chiếu"

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
