import {
  ROUTING_HOME,
  ROUTING_LOGIN,
  ROUTING_SIGNUP,
  ROUTING_THEATER_DETAIL,
  ROUTING_MOVIELIST_NS,
  ROUTING_MOVIELIST_UC,
  ROUTING_CONTACT_FROM,
} from "../router/path";

import { Link } from "react-router-dom";
import images from "../asset";

const Footer = () => {
  return (
    <footer className="bg-[#27282D] text-gray-400 py-10 border-t border-white border-opacity-20">
      <div className="max-w-7xl mx-auto px-8">
        {/* Logo and Main Links */}
        <div className="flex justify-center mb-10">
          <Link to={ROUTING_HOME}>
            <div className="flex items-center">
              <img
                src={images.logo}
                alt="MovieMate Logo"
                className="w-50 h-25"
              />
            </div>
          </Link>
        </div>

        {/* Footer Links */}
        <div className="flex justify-center mb-6">
          <div className="grid grid-cols-2 md:grid-cols-4 text-center md:text-left">
            <div className="max-w-xs w-32">
              <h3 className="text-gray-300 font-semibold mb-2 ">MOVIEMATE</h3>
              <ul className="space-y-1 ">
                <li>
                  <Link to="" className="hover:text-yellow-500">
                    Giới thiệu
                  </Link>
                </li>
                <li>
                  <Link
                    to={ROUTING_CONTACT_FROM}
                    className="hover:text-yellow-500"
                  >
                    Liên hệ
                  </Link>
                </li>
                <li>
                  <Link to="" className="hover:text-yellow-500">
                    Tuyển dụng
                  </Link>
                </li>
              </ul>
            </div>
            <div className="max-w-xs w-32">
              <h3 className="text-gray-300 font-semibold mb-2 ">TÀI KHOẢN</h3>
              <ul className="space-y-1 ">
                <li>
                  <Link to={ROUTING_LOGIN} className="hover:text-yellow-500">
                    {" "}
                    Đăng nhập
                  </Link>
                </li>
                <li>
                  <Link to={ROUTING_SIGNUP} className="hover:text-yellow-500">
                    Đăng ký
                  </Link>
                </li>
              </ul>
            </div>
            <div className="max-w-xs w-32">
              <h3 className="text-gray-300 font-semibold mb-2 ">XEM PHIM</h3>
              <ul className="space-y-1">
                <li>
                  <Link
                    to={ROUTING_MOVIELIST_NS}
                    className="hover:text-yellow-500"
                  >
                    Phim đang chiếu
                  </Link>
                </li>
                <li>
                  <Link
                    to={ROUTING_MOVIELIST_NS}
                    className="hover:text-yellow-500"
                  >
                    Phim sắp chiếu
                  </Link>
                </li>
              </ul>
            </div>
            <div className="max-w-xs w-34">
              <h3 className="text-gray-300 font-semibold mb-2 ">
                HỆ THỐNG RẠP
              </h3>
              <ul className="space-y-1">
                <li>
                  <Link
                    to={ROUTING_THEATER_DETAIL}
                    className="hover:text-yellow-500"
                  >
                    Moviemate Nguyễn Du
                  </Link>
                </li>
                <li>
                  <Link
                    to={ROUTING_THEATER_DETAIL}
                    className="hover:text-yellow-500"
                  >
                    Moviemate Quế Thanh
                  </Link>
                </li>
                <li>
                  <Link
                    to={ROUTING_THEATER_DETAIL}
                    className="hover:text-yellow-500"
                  >
                    Moviemate Hai Bà Trưng
                  </Link>
                </li>
                <li>
                  <Link
                    to={ROUTING_THEATER_DETAIL}
                    className="hover:text-yellow-500"
                  >
                    Moviemate Mỹ Tho
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 border-t border-gray-700 pt-4 flex items-center justify-between text-gray-500 text-sm">
          <div className="flex space-x-6 mx-auto">
            <p>&copy; 2024 Brand, Inc.</p>
            <Link to="" className="hover:text-yellow-500">
              Chính sách bảo mật
            </Link>
            <Link to="" className="hover:text-yellow-500">
              Hỏi đáp
            </Link>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <Link to="" className="text-gray-500 hover:text-blue-400">
              <i className="fab fa-twitter"></i>
            </Link>
            <Link to="" className="text-gray-500 hover:text-blue-600">
              <i className="fab fa-facebook"></i>
            </Link>
            <Link to="" className="text-gray-500 hover:text-blue-500">
              <i className="fab fa-linkedin"></i>
            </Link>
            <Link to="" className="text-gray-500 hover:text-red-600">
              <i className="fab fa-youtube"></i>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
