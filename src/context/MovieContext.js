import React, { createContext, useContext, useState } from "react";
import moviesData from "../data/MovieData";

// Tạo Context
const MovieContext = createContext();

// Provider để chia sẻ dữ liệu phim trong toàn ứng dụng
export const MovieProvider = ({ children }) => {
  const [movies] = useState(moviesData);

  return (
    <MovieContext.Provider value={{ movies}}>
      {children}
    </MovieContext.Provider>
  );
};

// Custom Hook để dễ dàng sử dụng Context
export const useMovies = () => {
  return useContext(MovieContext);
};
