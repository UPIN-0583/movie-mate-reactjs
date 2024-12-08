import React, { useState } from "react";
import images from "../asset";

const movies = [
  {
    id: 1,
    title: "Thế chiến 1917",
    description:
      "1917 dựa trên một câu chuyện có thật của ông nội Mendes, kể về hai chàng lính trẻ người Anh trong đỉnh điểm Thế chiến I được giao nhiệm vụ chuyển một thông điệp đến Tiểu đoàn 2, với nội dung cảnh báo về cuộc phục kích của quân đội Đức nếu họ thực hiện một cuộc tấn công đã lên kế hoạch từ trước.",
    releaseDate: "19 tháng 2, 2022",
    backgroundImage: images.Poster,
    thumbnail: images.Poster,
    rating: 5,
  },
  {
    id: 2,
    title: "Kẻ Hành Pháp Zero",
    description:
      "Trước Hội nghị Thượng đỉnh tại Edge of Ocean ở Vịnh Tokyo, một vụ nổ xảy ra khiến nhiều nhân viên bị thương và Mori Kogoro bị buộc tội oan. Conan phát hiện thủ phạm là công tố viên Kusakabe Makoto, người âm mưu tấn công Tokyo bằng con nhộng từ tàu Hakuchō.",
    releaseDate: "13 tháng 4 năm 2018",
    backgroundImage: images.Poster1,
    thumbnail: images.Poster1,
    rating: 4,
  },
  {
    id: 3,
    title: "Avengers: Hồi kết",
    description:
      "Phim khởi đầu sau sự kiện Infinity War năm 2018, Clint Barton (Hawkeye) cùng vợ con đi dã ngoại trong thời gian bị quản thúc. Ngay khi anh rời mắt khỏi gia đình mình một lát, họ tan biến thành tro bụi do là nạn nhân của sự kiện Búng tay.",
    releaseDate: "6 tháng 5, 2011",
    backgroundImage: images.Poster2,
    thumbnail: images.Poster2,
    rating: 4,
  },
  {
    id: 4,
    title: "Fast & Furious",
    description:
      "Dominic Dom Toretto và nhóm của anh được Tổ chức giao nhiệm vụ đánh cắp một con chip máy tính ở Rome, Ý. Dom và vợ anh, Letty Ortiz, ở nhà cùng cậu con trai Little B trong khi những người còn lại, bao gồm Roman Pearce, Tej Parker, Han Lue và Ramsey, đến Rome.",
    releaseDate: "6 tháng 5, 2011",
    backgroundImage: images.Poster3,
    thumbnail: images.Poster3,
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
      className="relative w-full h-[600px] bg-cover bg-center rounded-lg border border-white"
      style={{ backgroundImage: `url(${selectedMovie.backgroundImage})` }}
    >
      {/* Phần bên trái: Chi tiết phim */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-start justify-start pl-12 pr-8 py-10 rounded-lg ">
        <div className="text-white max-w-md space-y-4 text-left">
          {/* Xếp hạng sao */}
          <div className="flex items-center space-x-1 text-yellow-400 text-2xl mb-4">
            {renderStars(selectedMovie.rating)}
          </div>

          {/* Tiêu đề phim */}
          <h1 className="text-5xl font-bold leading-tight">
            {selectedMovie.title}
          </h1>

          {/* Ngày phát hành */}
          <p className="text-yellow-400 text-lg font-medium mt-4">
            Phát hành vào ngày {selectedMovie.releaseDate}
          </p>

          {/* Mô tả chính */}
          <p className="text-gray-300 text-base leading-relaxed mt-4">
            {selectedMovie.description}
          </p>

          {/* Các nút hành động */}
          <div className="flex space-x-4 mt-6 pt-20">
            {/* Button Đặt vé */}
            <button className="bg-yellow-400 text-black font-bold py-2 px-4 rounded-lg mb-2 flex items-center justify-center text-lg w-40 h-12">
              <img src={images.bookingIcon} alt="Booking" className="w-6 h-6" />
              <p className="ps-2">Đặt vé</p>
            </button>

            {/* Button Xem Trailer */}
            <button className="bg-transparent border border-white text-white font-bold py-2 px-4 rounded-lg flex items-center justify-center text-sm w-40 h-12">
              <img src={images.trailerIcon} alt="Trailer" className="w-6 h-6" />
              <p className="ps-2">Xem Trailer</p>
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
