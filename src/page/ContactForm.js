import React from "react";

const ContactForm = () => {
    return (
        <div className="min-h-screen bg-[#151515] flex items-center justify-center px-4">
            <div className="max-w-lg w-full bg-[#1E1E1E] rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">
                    LIÊN HỆ VỚI CHÚNG TÔI
                </h2>
                <form className="space-y-4">
                    {/* Họ và Tên */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Họ và tên
                        </label>
                        <input
                            type="text"
                            placeholder="Họ và tên"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                        />
                    </div>
                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                        />
                    </div>
                    {/* Số điện thoại */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Số điện thoại
                        </label>
                        <input
                            type="text"
                            placeholder="Số điện thoại"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                        />
                    </div>
                    {/* Nội dung */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Thông tin liên hệ hoặc phản ánh
                        </label>
                        <textarea
                            placeholder="Thông tin liên hệ hoặc phản ánh"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-yellow-400 focus:outline-none h-28"
                        ></textarea>
                    </div>
                    {/* Button Gửi */}
                    <button
                        type="submit"
                        className="w-full bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
                    >
                        GỬI NGAY
                    </button>
                </form>
            </div>
        </div>
    );
};

export { ContactForm };
