import React, { useState } from "react";
import {UpComingMovieCard} from "./UpComingMovieCard"

const UpComingMovieList = ({ movies }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Chia các movie thành từng nhóm (4 movie mỗi slide)
    const groupMovies = (movies, groupSize) => {
        const result = [];
        for (let i = 0; i < movies.length; i += groupSize) {
            result.push(movies.slice(i, i + groupSize));
        }
        return result;
    };

    const movieGroups = groupMovies(movies, 4); // Mỗi slide chứa tối đa 4 movie    

    // Xử lý khi bấm nút "trái"
    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex > 0 ? prevIndex - 1 : movieGroups.length - 1
        );
    };

    // Xử lý khi bấm nút "phải"
    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex < movieGroups.length - 1 ? prevIndex + 1 : 0
        );
    };

    return (
        <div className="bg-gray-900 py-8">
            <div className="text-center font-bold text-white text-2xl mb-6">
                PHIM SẮP CHIẾU
            </div>
            <div className="relative flex items-center justify-center mb-6">
                {/* Nút mũi tên trái */}
                <button
                    onClick={handlePrev}
                    className="left-1 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition"
                >
                    {"<"}
                </button>

                  {/* Danh sách slide */}
                <div className="w-full overflow-hidden relative">
                    <div
                        className="flex transition-transform duration-500"
                        style={{
                            transform: `translateX(-${currentIndex * (100 / movieGroups.length)}%)`,
                            width: `${movieGroups.length * 100}%`, // Đảm bảo chiều rộng tổng
                        }}
                    >
                        {movieGroups.map((group, index) => (
                            <div
                                key={index}
                                className="flex w-full  justify-around mx-2"
                            >
                                {group.map((movie, idx) => (
                                    <UpComingMovieCard movie={movie}/>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Nút mũi tên phải */}
                <button
                    onClick={handleNext}
                    className="right-1 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition"
                >
                    {">"}
                </button>
            </div>

            {/* Nút Xem thêm */}
            <div className="text-center mt-4">
                <button className="w-[200px] bg-blue-500 text-black font-bold py-2 px-6 rounded-sm hover:bg-blue-600 transition">
                    XEM THÊM
                </button>
            </div>
        </div>
    );
};

export { UpComingMovieList};
