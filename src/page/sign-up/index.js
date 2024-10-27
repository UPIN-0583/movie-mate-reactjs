import React from 'react';
import signUpImage from './sign-up.jpg';
import {ROUTING_LOGIN} from "../../router";
import {Link} from "react-router-dom";

const SignUpPage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 relative">
            {/* Tấm ảnh nền */}
            <div
                className="absolute inset-0 z-0 bg-contain bg-center my-1"
                style={{
                    backgroundImage: `url(${signUpImage})`,
                    backgroundRepeat: 'no-repeat',
                    opacity: 0.4, // Độ trong suốt của ảnh nền
                }}
            ></div>

            {/* Form đăng ký */}
            <div className="relative z-10 bg-gray-800 bg-opacity-75 backdrop-blur-sm border border-gray-700 p-8 rounded-lg shadow-lg max-w-md w-full mx-4">
                <h2 className="text-2xl font-bold text-center text-white mb-6">Đăng ký</h2>

                <form className="space-y-4">
                    {/* Họ và tên */}
                    <input
                        type="text"
                        placeholder="Họ và tên"
                        className="w-full px-4 py-2 rounded bg-gray-700 bg-opacity-50 text-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    />

                    {/* Email */}
                    <input
                        type="email"
                        placeholder="Nhập Email"
                        className="w-full px-4 py-2 rounded bg-gray-700 bg-opacity-50 text-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    />

                    {/* Số điện thoại */}
                    <input
                        type="text"
                        placeholder="Nhập Số điện thoại"
                        className="w-full px-4 py-2 rounded bg-gray-700 bg-opacity-50 text-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    />

                    {/* Giới tính */}
                    <div className="flex items-center space-x-4 text-gray-300">
                        <label>Giới tính:</label>
                        <label className="flex items-center">
                            <input type="radio" name="gender" value="male" className="mr-2"/>
                            Nam
                        </label>
                        <label className="flex items-center">
                            <input type="radio" name="gender" value="female" className="mr-2"/>
                            Nữ
                        </label>
                    </div>

                    {/* Ngày sinh */}
                    <div className="flex space-x-4">
                        <select
                            className="w-1/3 px-4 py-2 rounded bg-gray-700 bg-opacity-50 text-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400">
                            <option>Ngày</option>
                        </select>
                        <select
                            className="w-1/3 px-4 py-2 rounded bg-gray-700 bg-opacity-50 text-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400">
                            <option>Tháng</option>
                        </select>
                        <select
                            className="w-1/3 px-4 py-2 rounded bg-gray-700 bg-opacity-50 text-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400">
                            <option>Năm</option>
                        </select>
                    </div>

                    {/* Mật khẩu */}
                    <input
                        type="password"
                        placeholder="Nhập Mật khẩu"
                        className="w-full px-4 py-2 rounded bg-gray-700 bg-opacity-50 text-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    />

                    {/* Nhập lại mật khẩu */}
                    <input
                        type="password"
                        placeholder="Nhập lại mật khẩu"
                        className="w-full px-4 py-2 rounded bg-gray-700 bg-opacity-50 text-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    />

                    {/* Checkbox đồng ý điều khoản */}
                    <div className="flex items-center text-gray-300">
                        <input
                            type="checkbox"
                            className="mr-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        />
                        <label>
                            Bằng việc đăng ký tài khoản tôi đồng ý với điều khoản dịch vụ và chính sách bảo mật của Watcher
                        </label>
                    </div>

                    {/* Nút Đăng ký */}
                    <button
                        type="submit"
                        className="w-full py-2 bg-yellow-500 text-gray-900 font-semibold rounded-lg hover:bg-yellow-600 transition duration-300"
                    >
                        Đăng ký
                    </button>

                    {/* Đường dẫn đến đăng nhập */}
                    <p className="text-center text-gray-300 mt-4">
                        Bạn đã có tài khoản?{' '}
                        <Link to={ROUTING_LOGIN} className="text-yellow-400 hover:underline">
                            Đăng nhập ngay
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export { SignUpPage };
