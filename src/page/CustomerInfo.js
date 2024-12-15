import React from 'react';
import images from '../asset';


const CustomerInfo = () => {
  return (
    <div className="bg-[#151515] min-h-screen text-white py-10">
      <div className="container w-[90%] mx-auto ">
        {/* Title section */}
        <div className="flex justify-center items-center mt-4 mb-10 p-4 bg-blue-950 rounded-lg">
          <h2 className="text-white text-2xl font-bold">
            THÔNG TIN CÁ NHÂN
          </h2>
        </div>

        <div className="grid grid-cols-3 gap-8">
          {/* Thông tin khách hàng */}
          <div className="bg-[#1E1E1E] p-6 rounded-xl shadow ">
            <img
              src={images.avatar}
              alt="User Avatar"
              className="rounded-full w-32 mx-auto"
            />
            <h3 className="text-xl text-center mt-4">Nguyễn Anh Nguyên</h3>
            <p className="text-center mt-2">Tổng chi tiêu: 0 đ</p>
            <div className="mt-10">
              <p>
                Hotline hỗ trợ:{" "}
                <a href="tel:19001508" className="text-yellow-500">
                  1900 1508
                </a>
              </p>
              <p>
                Email:{" "}
                <a href="mailto:hotro@moviemate.vn" className="text-yellow-500">
                  hotro@moviemate.vn
                </a>
              </p>
            </div>
          </div>

          {/* Form cập nhật thông tin */}
          <div className="col-span-2 bg-[#1E1E1E] p-6 rounded-xl shadow ">
            <form>
              <div className="grid grid-cols-2 gap-6 mb-4">
                <div>
                  <label className="block mb-2 text-left text-yellow-500">
                    Họ và tên
                  </label>
                  <input
                    type="text"
                    value="Nguyễn Anh Nguyên"
                    className="w-full px-4 py-2 rounded bg-gray-700 bg-opacity-50 text-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-left text-yellow-500">
                    Ngày sinh
                  </label>
                  <input
                    type="date"
                    value="2007-10-17"
                    className="w-full px-4 py-2 rounded bg-gray-700 bg-opacity-50 text-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6 mb-4">
                <div>
                  <label className="block mb-2 text-left text-yellow-500">Email</label>
                  <input
                    type="email"
                    value="anhnguyen@gmail.com"
                    className="w-full px-4 py-2 rounded bg-gray-700 bg-opacity-50 text-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-left text-yellow-500">Số điện thoại</label>
                  <input
                    type="text"
                    value="0983974465"
                    className="w-full px-4 py-2 rounded bg-gray-700 bg-opacity-50 text-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6 mb-4">
                <div>
                  <label className="block mb-2 text-left text-yellow-500">Giới tính</label>
                  <div className="flex items-center space-x-8">
                    <label>
                      <input type="radio" name="gender" value="Nam" checked />
                      Nam
                    </label>
                    <label className="ml-10">
                      <input type="radio" name="gender" value="Nữ" />
                      Nữ
                    </label>
                  </div>
                </div>

                <div>
                  <div className="mt-2 flex justify-end">
                    <button className="bg-yellow-500 text-black px-6 py-2 font-semibold rounded hover:bg-yellow-600">
                      Cập nhật
                    </button>
                  </div>
                </div>

              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export { CustomerInfo };
