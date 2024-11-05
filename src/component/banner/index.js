import React, { useState } from "react";

const movies = [
  {
    id: 1,
    title: "Doctor Strange",
    description: "Phù thủy tối thượng trong vũ trụ điên loạn",
    releaseDate: "19 tháng 2, 2022",
    backgroundImage: "https://i.imgur.com/VhkhULR.jpg",
    thumbnail: "https://i.imgur.com/VhkhULR.jpg",
    rating: 5,
  },
  {
    id: 2,
    title: "The Avengers",
    description: "Biệt đội siêu anh hùng mạnh nhất Trái Đất",
    releaseDate: "25 tháng 4, 2012",
    backgroundImage:
      "https://youthvietnam.vn/wp-content/uploads/2021/06/mau-poster-phim-viet-nam.jpg",
    thumbnail:
      "https://youthvietnam.vn/wp-content/uploads/2021/06/mau-poster-phim-viet-nam.jpg",
    rating: 4,
  },
  {
    id: 3,
    title: "Thor",
    description: "Thần Sấm - Chiến binh vũ trụ",
    releaseDate: "6 tháng 5, 2011",
    backgroundImage:
      "https://file.kenhsinhvien.vn/2018/04/07/conan-movie-22.jpg",
    thumbnail:
      "https://file.kenhsinhvien.vn/2018/04/07/conan-movie-22.jpg",
    rating: 4,
  },
  {
    id: 4,
    title: "Thor",
    description: "Thần Sấm - Chiến binh vũ trụ",
    releaseDate: "6 tháng 5, 2011",
    backgroundImage:
      "https://iv1.vnecdn.net/ngoisao/images/web/2023/05/18/trailer-phim-fast-x-1684393964.jpg?w=680&h=0&q=100&dpr=2&fit=crop&s=5h7NVXy6heBCGkt4XGnDGA",
    thumbnail:
      "https://iv1.vnecdn.net/ngoisao/images/web/2023/05/18/trailer-phim-fast-x-1684393964.jpg?w=680&h=0&q=100&dpr=2&fit=crop&s=5h7NVXy6heBCGkt4XGnDGA",
    rating: 4,
  },
];

const Banner = () => {
  const [selectedMovie, setSelectedMovie] = useState(movies[0]);

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(
          <span key={i} className="text-yellow-400">
            ★
          </span>
        );
      } else {
        stars.push(
          <span key={i} className="text-gray-300">
            ★
          </span>
        );
      }
    }
    return stars;
  };

  return (
    <div
      className="relative w-full h-[600px] bg-cover bg-center"
      style={{ backgroundImage: `url(${selectedMovie.backgroundImage})` }}
    >
      {/* Phần bên trái: Chi tiết phim */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-start justify-start pl-12 pr-8 py-10">
        <div className="text-white max-w-md space-y-4 text-left">
          {/* Xếp hạng sao */}
          <div className="flex items-center space-x-1 text-yellow-400 text-2xl mb-4">
            {renderStars(selectedMovie.rating)}
          </div>

          {/* Tiêu đề phim */}
          <h1 className="text-6xl font-bold leading-tight">
            {selectedMovie.title}
          </h1>

          {/* Mô tả phụ */}
          <h3 className="text-2xl italic font-light text-gray-300 mt-2">
            {selectedMovie.description}
          </h3>

          {/* Ngày phát hành */}
          <p className="text-yellow-400 text-lg font-medium mt-4">
            Phát hành vào ngày {selectedMovie.releaseDate}
          </p>

          {/* Mô tả chính */}
          <p className="text-gray-300 text-base leading-relaxed mt-4">
            Trong hành trình khám phá sức mạnh và thế giới tâm linh, bác sĩ phẫu
            thuật tài năng đã bị cuốn vào thế giới của ma thuật...
            <a href="#" className="text-blue-400 hover:underline ml-1">
              Đọc thêm
            </a>
          </p>

          {/* Các nút hành động */}
          <div className="flex space-x-4 mt-6 pt-20">
            <button className="flex items-center bg-white text-black px-5 py-3  w-[160px] h-[60px] rounded-full hover:bg-gray-300 transition">
              <span className="mr-2">🎬</span> Xem Trailer
            </button>
            <button className="flex items-center bg-yellow-500 text-black px-5 py-3 w-[160px] h-[60px] rounded-full hover:bg-yellow-600 transition">
              <span className="mr-2 pr-4">📅</span> Đặt vé
            </button>
          </div>
        </div>
      </div>

      {/* Phần bên phải: Thumbnail cuộn dọc */}
      <div className="absolute right-10 top-10 h-[500px] overflow-y-auto space-y-4 custom-scrollbar pr-4">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="relative cursor-pointer rounded-md overflow-hidden"
            onClick={() => setSelectedMovie(movie)}
          >
            {/* Hình ảnh của phim */}
            <img
              src={movie.thumbnail}
              alt={movie.title}
              className={`w-[230px] h-[150px] object-cover transition-transform bg-cover ${
                selectedMovie.id === movie.id ? "scale-105" : ""
              }`}
            />

            {/* Lớp phủ mờ khi được chọn hoặc hover */}
            <div
              className={`absolute inset-0 bg-black bg-opacity-40 ${
                selectedMovie.id === movie.id
                  ? "opacity-100"
                  : "opacity-0 hover:opacity-80"
              } transition-opacity`}
            ></div>

            {/* Viền màu vàng khi được chọn */}
            {selectedMovie.id === movie.id && (
              <div className="absolute inset-0 border-2 border-yellow-500 rounded-md"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export { Banner };
