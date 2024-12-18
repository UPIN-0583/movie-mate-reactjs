// components/MovieInfo.js
import React from 'react';
import images from '../asset';

const MovieInfo = ({ 
  movie, 
  poster, 
  genres, 
  rating, 
  duration, 
  description, 
  producer, 
  director, 
  cast, 
  onWatchTrailerClick 
}) => {
  return (
    <div className="flex flex-row items-start gap-8 w-11/12 m-auto">
      {/* Poster Phim */}
      <div className="w-1/4 ms-8">
        <img
          src={poster}
          alt="Movie Poster"
          className="rounded-lg shadow-lg border border-white"
        />
      </div>

      {/* Thông Tin Phim */}
      <div className="flex flex-1  justify-between items-start mt-10">
        <div className="w-2/3 text-left">
          <h1 className="text-4xl font-bold mb-4">{movie}</h1>
          
          {/* Thể loại */}
          <div className="flex items-center gap-2 mb-4">
            {genres.map((genre, index) => (
              <span key={index} className="px-3 py-1 bg-gray-800 rounded-full text-sm">{genre}</span>
            ))}
          </div>

          {/* Thông tin thời gian, độ tuổi */}
          <div className="flex items-center gap-4 mb-4">
            <p className=" bg-orange-200 text-black p-2 rounded-full w-12 text-center h-10">{rating}</p>
            <span>13 (18+)</span>
            <img className="bg-green-200 text-black p-2 rounded-full w-12 text-center h-10"
              src={images.timeBlackIcon}
              alt="time icon" />
            <span>{duration}</span>
          </div>

          {/* Đánh giá sao */}
          <div className="flex items-center text-2xl gap-1 mb-4">
            {[...Array(4)].map((_, i) => (
              <img
                src={images.starYellowIcon}
                alt="star fill"
                key={i}
              />
            ))}
            <img
              src={images.starGrayIcon}
              alt="star no fill" />
          </div>

          {/* Nội dung chính */}
          <p className="mb-4 text-lg text-blue-500 font-bold">
            Nội dung chính
          </p>
          <p className="mb-4">
            {description}
          </p>

          {/* Trailer Button */}
          <button
            className="bg-transparent border border-white text-white font-bold py-2 px-4 rounded-lg flex items-center text-sm w-35"
            onClick={onWatchTrailerClick}
          >
            <img
              src={images.trailerIcon}
              alt="Trailer"
              className="w-6 h-6"
            />
            <p className='ps-2'>Xem Trailer</p>
          </button>
        </div>

        {/* Chi tiết bổ sung: Nhà sản xuất, Đạo diễn, Diễn viên */}
        <div className="w-1/3 text-left p-7 h-auto">
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-blue-500">Nhà sản xuất</h3>
              <p>{producer}</p>
            </div>
            <div>
              <h3 className="font-semibold text-blue-500">Đạo diễn</h3>
              <p>{director}</p>
            </div>
            <div>
              <h3 className="font-semibold text-blue-500">Diễn viên</h3>
              <p>{cast}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { MovieInfo };
