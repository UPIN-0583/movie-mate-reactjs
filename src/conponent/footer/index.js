import {ROUTING_FACEBOOK, ROUTING_HOME, ROUTING_LINKDIN, ROUTING_TWITTER, ROUTING_YOUTUBE} from "../../router";
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-400 py-10 border-t border-white border-opacity-20">
            <div className="max-w-7xl mx-auto px-8">
                {/* Logo and Main Links */}
                <div className="flex flex-col items-center md:flex-row md:justify-between">
                    {/* Logo */}
                    <Link to={ROUTING_HOME}>
                        <div className="flex items-center space-x-2">
                            <div className="bg-indigo-600 p-2 rounded-md">
                                {/* Icon */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6 text-white"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 3v18m9-9H3"
                                    />
                                </svg>
                            </div>
                            <span className="text-xl font-bold">WATCHER</span>
                        </div>
                    </Link>

                    {/* Links */}
                    <div className="grid grid-cols-2 gap-8 md:grid-cols-4 text-center md:text-left">
                        <div>
                            <h3 className="text-gray-300 font-semibold mb-3">Product</h3>
                            <ul>
                                <li><a href="#" className="hover:text-yellow-500">Features</a></li>
                                <li><a href="#" className="hover:text-yellow-500">Pricing</a></li>
                                <li><a href="#" className="hover:text-yellow-500">Webinars</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-gray-300 font-semibold mb-3">Resources</h3>
                            <ul>
                                <li><a href="#" className="hover:text-yellow-500">Blog</a></li>
                                <li><a href="#" className="hover:text-yellow-500">User guides</a></li>
                                <li><a href="#" className="hover:text-yellow-500">Organization</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-gray-300 font-semibold mb-3">Company</h3>
                            <ul>
                                <li><a href="#" className="hover:text-yellow-500">About us</a></li>
                                <li><a href="#" className="hover:text-yellow-500">Contact us</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-gray-300 font-semibold mb-3">Plans & Pricing</h3>
                            <ul>
                                <li><a href="#" className="hover:text-yellow-500">Personal</a></li>
                                <li><a href="#" className="hover:text-yellow-500">Start up</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="mt-10 border-t border-gray-700 pt-8 flex flex-col md:flex-row items-center justify-between">
                    <p className="text-gray-500 text-sm">&copy; 2024 Brand, Inc.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-yellow-500">Privacy</a>
                        <a href="#" className="hover:text-yellow-500">Terms</a>
                        <a href="#" className="hover:text-yellow-500">Sitemap</a>
                    </div>
                </div>

                {/* Social Media Icons */}
                <div className="flex justify-center mt-8 space-x-4">
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
        </footer>
    );
}

export { Footer };
