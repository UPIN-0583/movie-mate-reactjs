import React, { useState } from 'react';
import images from '../asset';
import {Link, useLocation, useNavigate} from "react-router-dom";
import {ROUTING_MOVIEDETAIL_NS, ROUTING_SIGNUP} from "../router";
import { useLoginUser } from "../api/user/useLoginUser";

const LoginPage = () => {
    const [username, setUsername] = useState(''); // Dùng username thay vì email, để có thể kiểm tra cả email và số điện thoại
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const location = useLocation();
    // Lấy URL cần chuyển hướng sau khi đăng nhập từ state
    const redirectTo = location.state?.redirectTo || "/";
    const movieId = location.state?.movieId;
    const poster = location.state?.poster;

    // Sử dụng hook useLoginUser
    const { mutate: loginUser, data, isPending, error: loginError } = useLoginUser();

    const handleLogin = (e) => {
        e.preventDefault();

        // Xóa lỗi trước đó
        setError("");

        // Gọi hàm login với dữ liệu chuẩn
        loginUser(
            { email_or_phone: username, password },
            {
                onSuccess: (data) => {
                    console.log("Đăng nhập thành công", data);
                    localStorage.setItem("user", JSON.stringify(data.data));
                    window.dispatchEvent(new Event("storage"));

                    // Điều hướng đến trang trước đó nếu có
                    if (redirectTo === ROUTING_MOVIEDETAIL_NS) {
                        navigate(redirectTo, { state: { movieId, poster } });
                        return;
                    }

                    if (data?.data?.user_role === "user") {
                        navigate("/");
                    } else if (data?.data?.user_role === "admin") {
                        navigate("/admin");
                    } else {
                        setError("Không xác định được vai trò của người dùng.");
                    }
                },
                onError: (err) => {
                    setError("Đăng nhập thất bại." || err.response?.data?.message);
                    console.error("Lỗi đăng nhập:", err.response?.data);
                },
            }
        );
    };

    return (
        <div className="bg-[#151515] py-16 flex flex-col items-center justify-center">
            <div className="max-w-4xl w-full bg-[#1E1E1E] bg-opacity-90 p-8 rounded-lg shadow-lg flex flex-row">
                {/* Hình ảnh bên trái */}
                <div className="flex-1">
                    <img
                        src={images.login}
                        alt="Login visual"
                        className="w-full h-full object-cover rounded-l-lg"
                    />
                </div>

                {/* Form đăng nhập bên phải */}
                <div className="flex-1 p-8 pr-0 flex flex-col justify-center">
                    <h2 className="text-3xl font-bold text-white mb-6 text-left">Đăng nhập</h2>

                    <form className="space-y-4">
                        {/* Tài khoản */}
                        <input
                            type="text"
                            placeholder="Nhập email hoặc số điện thoại"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
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

                        {/* Hiển thị thông báo lỗi */}
                        <p className="text-red-500">{error}</p>

                        {/* Nút Đăng nhập */}
                        <button
                            type="submit"
                            className="w-full py-2 bg-yellow-500 text-gray-900 font-semibold rounded-lg hover:bg-yellow-600 transition duration-300"
                            onClick={handleLogin}
                            disabled={isPending} // Disable nút khi đang xử lý
                        >
                            {isPending ? 'Đang xác thực...' : 'Đăng nhập'}
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
