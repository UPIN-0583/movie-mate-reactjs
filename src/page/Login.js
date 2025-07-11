
import React, { useState } from 'react';
import images from '../asset';
import { Link, useNavigate } from "react-router-dom";
import { ROUTING_SIGNUP } from "../router";

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    // Giả lập dữ liệu người dùng
    const mockUserData = {
        email: 'Nguyen@gmail.com',
        password: '123456',
        name: 'Nguyên',
    };

    const handleLogin = (e) => {
        e.preventDefault();

        // Kiểm tra thông tin đăng nhập (giả lập)
        if (email === mockUserData.email && password === mockUserData.password) {
            // Lưu thông tin người dùng vào localStorage
            localStorage.setItem('user', JSON.stringify(mockUserData));
            // Phát sự kiện storage
            window.dispatchEvent(new Event("storage"));
            navigate('/'); // Chuyển hướng về trang chủ sau khi đăng nhập thành công
        } else {
            setError('Vui lòng kiểm tra lại email và mật khẩu.');
        }
    };

    return (
        <div className="bg-[#151515] py-16 flex flex-col items-center justify-center ">
            <div className="max-w-4xl w-full bg-[#1E1E1E] bg-opacity-90 p-8 rounded-lg shadow-lg flex flex-col md:flex-row">
                {/* Hình ảnh bên trái */}
                <div className="flex-1 hidden md:block">
                    <img
                        src={images.login}
                        alt="Login visual"
                        className="w-full h-full object-cover rounded-l-lg"
                    />
                </div>

                {/* Form đăng nhập bên phải */}
                <div className="flex-1 p-8 pr-0 flex flex-col justify-center">
                    <h2 className="text-3xl font-bold text-white mb-6 text-center md:text-left">Đăng nhập</h2>

                    <form className="space-y-4">
                        {/* Tài khoản */}
                        <input
                            type="text"
                            placeholder="Nhập email hoặc số điện thoại"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 rounded bg-gray-700 bg-opacity-50 text-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        />

                        {/* Mật khẩu */}
                        <input
                            type="password"
                            placeholder="Nhập mật khẩu"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 rounded bg-gray-700 bg-opacity-50 text-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        />

                        {/* Checkbox Lưu mật khẩu */}
                        <div className="flex items-center justify-between text-gray-300">
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    className="mr-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                                />
                                <label>Lưu mật khẩu</label>
                            </div>
                            <a href="#" className="text-yellow-400 hover:underline">Quên mật khẩu?</a>
                        </div>

                        <p className="text-red-500">{error}</p>

                        {/* Nút Đăng nhập */}
                        <button
                            type="submit"
                            className="w-full py-2 bg-yellow-500 text-gray-900 font-semibold rounded-lg hover:bg-yellow-600 transition duration-300"
                            onClick={handleLogin}
                        >

                            Đăng nhập
                        </button>

                        {/* Đăng nhập với Google */}
                        <button
                            type="button"
                            className="w-full py-2 bg-white text-gray-900 font-semibold rounded-lg border border-gray-300 hover:bg-gray-100 transition duration-300 flex items-center justify-center space-x-2"
                        >
                            <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="Google logo" />
                            <span>Đăng nhập với Google</span>
                        </button>
                    </form>

                    {/* Đăng ký mới */}
                    <p className="text-center text-gray-300 mt-4">
                        Bạn chưa có tài khoản?{' '}
                        <Link to={ROUTING_SIGNUP} className="text-yellow-400 hover:underline">
                            Đăng ký ngay
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export { LoginPage };
