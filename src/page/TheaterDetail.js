import React, { useState } from "react";
import { TheaterSlider } from "../components/TheaterSlider";
import images from "../asset";

const TheaterDetail = () => {

  return (
    <div className="bg-[#151515] min-h-screen flex flex-col">
      <div className="container w-[90%] mx-auto px-8 py-4 flex-1">
        {/* Title section */}
        <div className="flex justify-center items-center mt-4 mb-10 p-4 bg-blue-950 rounded-lg">
          <h2 className="text-white text-2xl font-bold">
            THÔNG TIN RẠP CHIẾU PHIM
          </h2>
        </div>

        {/* Slider */}
        <TheaterSlider />

        {/* Tên rạp */}
        <h1 className="my-10 text-4xl font-semibold text-center text-white">
          MOVIEMATE NGUYỄN DU
        </h1>

        {/* Thông tin rạp chiếu */}
        <section className="mb-6 text-left">
          <h2 className="text-2xl font-bold text-white mb-5">THÔNG TIN CHI TIẾT</h2>
          <p className="text-white mt-2">
            <span className="font-bold">Địa chỉ </span> 116 Nguyễn Du, Quận 1,
            Tp.HCM
          </p>
          <p className="text-white mt-2">
            <span className="font-bold">Số điện thoại: </span> 1900 2224
          </p>
          <p className="text-white mt-2">
            <span className="font-bold">Giới thiệu: </span> Là rạp chiếu đầu
            tiên và đông khách nhất trong hệ thống, MovieMate Nguyễn Du chính
            thức đi vào hoạt động từ ngày 20/5/2005 và được xem là một trong
            những cụm rạp mang tiêu chuẩn quốc tế hiện đại bậc nhất đầu tiên
            xuất hiện tại Việt Nam. MovieMate Nguyễn Du là một trong những rạp
            chiếu phim tiên phong mang đến cho khán giả những trải nghiệm phim
            chiếu rạp tốt nhất. MovieMate Nguyễn Du gồm 5 phòng chiếu với hơn
            1000 chỗ ngồi, trong đó có 1 phòng chiếu phim 3D và 4 phòng chiếu
            phim 2D, với hơn 1000 chỗ ngồi được thiết kế tinh tế giúp khách hàng
            có thể xem những bộ phim hay một cách thoải mái và thuận tiện nhất.
          </p>
        </section>

        {/* Giá vé */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-left text-white">GIÁ VÉ</h2>
          <div className="flex items-center justify-center space-x-4 mt-4">
            <img
              src={images.TicketPrice}
              alt="Giá vé"
              className="w-2/3 rounded-lg shadow-md"
            />
          </div>
        </section>
        
      </div>
    </div>
  );
};
export { TheaterDetail };
