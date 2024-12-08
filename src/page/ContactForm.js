import React from "react";

const ContactForm = () => {
    return (
        <div className="min-h-screen bg-[#151515] flex items-center justify-center px-4">
            <div className="max-w-lg w-full bg-[#1E1E1E] rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold text-white text-center mb-4">
                    LIÊN HỆ VỚI CHÚNG TÔI
                </h2>
                <form className="space-y-4">
                    {/* Họ và Tên */}
                    <div>
                        <label className="block text-base font-medium text-white mb-2 text-left">
                            Họ và tên
                        </label>
                        <input
                            type="text"
                            placeholder="Họ và tên"
                            className="w-full px-4 py-2 rounded bg-gray-700 bg-opacity-50 text-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        />
                    </div>
                    {/* Email */}
                    <div>
                        <label className="block text-base font-medium text-white mb-2 text-left">
                            Email
                        </label>
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full px-4 py-2 rounded bg-gray-700 bg-opacity-50 text-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        />
                    </div>
                    {/* Số điện thoại */}
                    <div>
                        <label className="block text-base font-medium text-white mb-2 text-left">
                            Số điện thoại
                        </label>
                        <input
                            type="text"
                            placeholder="Số điện thoại"
                            className="w-full px-4 py-2 rounded bg-gray-700 bg-opacity-50 text-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        />
                    </div>
                    {/* Nội dung */}
                    <div>
                        <label className="block text-base font-medium text-white mb-2 text-left">
                            Thông tin liên hệ hoặc phản ánh
                        </label>
                        <textarea
                            placeholder="Thông tin liên hệ hoặc phản ánh"
                            className="w-full px-4 py-2 rounded bg-gray-700 bg-opacity-50 text-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 h-28"
                        ></textarea>
                    </div>
                    {/* Button Gửi */}
                    <button
                        type="submit"
                        className="w-full py-2 bg-yellow-500 text-gray-900 font-semibold rounded-lg hover:bg-yellow-600 transition duration-300"
                    >
                        GỬI NGAY
                    </button>
                </form>
            </div>
        </div>
    );
};

export { ContactForm };
