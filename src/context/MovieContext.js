import React, { createContext, useContext, useState } from "react";
import moviesData from "../data/MovieData";

// Tạo Context
const MovieContext = createContext();

// Provider để chia sẻ dữ liệu phim trong toàn ứng dụng
export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState(moviesData);

  // Bạn có thể thêm các hàm update dữ liệu nếu cần
  const updateMovies = (category, newMovies) => {
    setMovies(prevMovies => ({ ...prevMovies, [category]: newMovies }));
  };

  return (
    <MovieContext.Provider value={{ movies, updateMovies }}>
      {children}
    </MovieContext.Provider>
  );
};

// Custom Hook để dễ dàng sử dụng Context
export const useMovies = () => {
  return useContext(MovieContext);
};
