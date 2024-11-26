import { ROUTING_FACEBOOK, ROUTING_HOME, ROUTING_LINKDIN, ROUTING_TWITTER, ROUTING_YOUTUBE } from "../router";
import { Link } from "react-router-dom";
import images from "../asset"

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-400 py-10 border-t border-white border-opacity-20">
            <div className="max-w-7xl mx-auto px-8">
                {/* Logo and Main Links */}
                <div className="flex justify-center mb-10">
                    <Link to={ROUTING_HOME}>
                        <div className="flex items-center">
                            <img src={images.logo} alt="MovieMate Logo" className="w-50 h-25" />
                        </div>
                    </Link>
                </div>

                {/* Footer Links */}
                <div className="flex justify-center mb-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 text-center md:text-left">
                        <div className="max-w-xs w-32">
                            <h3 className="text-gray-300 font-semibold mb-2 ">MOVIEMATE</h3>
                            <ul className="space-y-1 ">
                                <li><a href="#" className="hover:text-yellow-500">Giới thiệu</a></li>
                                <li><a href="#" className="hover:text-yellow-500">Liên hệ</a></li>
                                <li><a href="#" className="hover:text-yellow-500">Tuyển dụng</a></li>
                            </ul>
                        </div>
                        <div className="max-w-xs w-32">
                            <h3 className="text-gray-300 font-semibold mb-2 ">TÀI KHOẢN</h3>
                            <ul className="space-y-1 ">
                                <li><a href="#" className="hover:text-yellow-500">Đăng nhập</a></li>
                                <li><a href="#" className="hover:text-yellow-500">Đăng ký</a></li>
                            </ul>
                        </div>
                        <div className="max-w-xs w-32">
                            <h3 className="text-gray-300 font-semibold mb-2 ">XEM PHIM</h3>
                            <ul className="space-y-1">
                                <li><a href="#" className="hover:text-yellow-500">Phim đang chiếu</a></li>
                                <li><a href="#" className="hover:text-yellow-500">Phim sắp chiếu</a></li>
                            </ul>
                        </div>
                        <div className="max-w-xs w-34">
                            <h3 className="text-gray-300 font-semibold mb-2 ">HỆ THỐNG RẠP</h3>
                            <ul className="space-y-1">
                                <li><a href="#" className="hover:text-yellow-500">Moviemate Nguyễn Du</a></li>
                                <li><a href="#" className="hover:text-yellow-500">Moviemate Quế Thanh</a></li>
                                <li><a href="#" className="hover:text-yellow-500">Moviemate Hải Bà Trưng</a></li>
                                <li><a href="#" className="hover:text-yellow-500">Moviemate Mỹ Tho</a></li>
                            </ul>
                        </div>
                    </div>
                </div>


                {/* Footer Bottom */}
                <div className="mt-10 border-t border-gray-700 pt-4 flex items-center justify-between text-gray-500 text-sm">
                    <div className="flex space-x-6 mx-auto">
                        <p>&copy; 2024 Brand, Inc.</p>
                        <a href="#" className="hover:text-yellow-500">Chính sách bảo mật</a>
                        <a href="#" className="hover:text-yellow-500">Hỏi đáp</a>
                    </div>

                    {/* Social Media Icons */}
                    <div className="flex space-x-4">
                        <Link to={ROUTING_TWITTER} className="text-gray-500 hover:text-blue-400">
                            <i className="fab fa-twitter"></i>
                        </Link>
                        <Link to={ROUTING_FACEBOOK} className="text-gray-500 hover:text-blue-600">
                            <i className="fab fa-facebook"></i>
                        </Link>
                        <Link to={ROUTING_LINKDIN} className="text-gray-500 hover:text-blue-500">
                            <i className="fab fa-linkedin"></i>
                        </Link>
                        <Link to={ROUTING_YOUTUBE} className="text-gray-500 hover:text-red-600">
                            <i className="fab fa-youtube"></i>
                        </Link>
                    </div>
                </div>

            </div>
        </footer>
    );
}

export { Footer };
