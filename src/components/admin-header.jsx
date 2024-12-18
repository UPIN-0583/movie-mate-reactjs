// src/components/Header.jsx
import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import images from "../asset";
import {ROUTING_HOME} from "../router";

const AdminHeader = () => {
    const [iconHovered, setIconHovered] = useState(false);
    const navigate = useNavigate();

    const user = localStorage.getItem("user");
    console.log("localstore: ",user);
    const handleLogout = () => {
        localStorage.clear(); // Xóa toàn bộ dữ liệu trong localStorage
        navigate(ROUTING_HOME);
        return;
    };

    return (
        <div className="flex items-center justify-end p-4 bg-gray-900 text-gray-200">
            <div className="mx-4 flex items-center cursor-pointer">
                <div className="relative group">
                    <Link
                        to="#"
                        className="flex items-center space-x-1 hover:text-yellow-500"
                        onMouseEnter={() => setIconHovered(true)} // Khi hover vào icon, thay đổi state
                        onMouseLeave={() => setIconHovered(false)} // Khi rời khỏi icon, quay lại màu mặc định
                    >
                        <img
                            src={iconHovered ? images.userYellowIcon : images.userWhiteIcon}
                            alt="User Icon"
                        />
                        <span>Admin</span>
                    </Link>
                    <div
                        className="absolute top-14 left-1/2 transform -translate-x-1/2 hidden group-focus-within:block bg-[#2A2A2A] rounded-lg shadow-lg mt-2 w-44 p-3 space-y-4 z-10">
                        <button
                            to=""
                            className="block text-white hover:text-yellow-500"
                            onClick={handleLogout}
                        >
                            Đăng xuất
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export {AdminHeader};
