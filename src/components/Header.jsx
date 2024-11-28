import { Link } from "react-router-dom";
import { ROUTING_HOME, ROUTING_LOGIN } from "../router/path";
import images from "../asset";

const Header = () => {
  return (
    <header className="bg-[#27282D] text-white py-4 px-8 flex items-center justify-between border-b border-white border-opacity-20">
      {/* Logo */}
      <Link to={ROUTING_HOME}>
        <div className="flex items-center space-x-2">
          <img src={images.logo} alt="MovieMate Logo" className="w-50 h-25" />
        </div>
      </Link>

      {/* Navigation Links */}
      <nav className="flex space-x-6">
        <Link to={ROUTING_HOME} className="hover:text-yellow-500">
          Trang chủ
        </Link>
        <a href="#" className="hover:text-yellow-500">
          Phim
        </a>
        <a href="#" className="hover:text-yellow-500">
          Khuyến mãi
        </a>
        <a href="#" className="hover:text-yellow-500">
          Rạp chiếu phim
        </a>
        <a href="#" className="hover:text-yellow-500">
          Review phim
        </a>
      </nav>

      {/* Search and Login */}
      <div className="flex items-center space-x-5">
        {/* Search Bar */}
        <div className="relative">
          <input
            type="text"
            placeholder="Tìm phim"
            className="bg-white text-gray-300 px-4 py-2 rounded-full pl-10 focus:outline-none focus:ring-2 focus:ring-black"
          />
          {/* Search Icon */}
          <i className="fa-solid fa-magnifying-glass text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2 text-lg"></i>
        </div>

        {/* Login Button */}
        <Link
          to={ROUTING_LOGIN}
          className="flex items-center space-x-1 hover:text-yellow-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.5 7.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM12 14.25a7.5 7.5 0 00-7.5 7.5h15a7.5 7.5 0 00-7.5-7.5z"
            />
          </svg>
          <span>Đăng nhập</span>
        </Link>
      </div>
    </header>
  );
};

export { Header };
