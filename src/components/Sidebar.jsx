// src/components/Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import {
    HomeIcon,
    UsersIcon,
    FilmIcon,      // Icon cho Movie
    UserGroupIcon, // Icon cho Room
    TicketIcon,    // Icon cho Ticket
    ShoppingCartIcon, // Icon cho Order
    DocumentTextIcon,
    Cog6ToothIcon
} from '@heroicons/react/24/outline';
import {ROUTING_DASHBOARD, ROUTING_MOVIE_MANAGEMENT, ROUTING_USER_MANAGEMENT} from "../router";

// Một item sidebar có thể được trừu tượng hóa:
const SidebarItem = ({ icon: Icon, label, to }) => (
    <Link to={to} className="flex items-center px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700 cursor-pointer rounded-md transition-colors">
        <Icon className="w-5 h-5 mr-3" />
        <span>{label}</span>
    </Link>
);

const Sidebar = () => {
    return (
        <div className="bg-gray-900 h-full w-64 flex flex-col">
            {/* Header */}
            <div className="p-4 text-white font-bold text-2xl">DashWind</div>

            {/* Nội dung sidebar */}
            <nav className="flex-1 px-2 mt-4 h-full flex flex-col justify-between">
                <div>
                    <SidebarItem icon={HomeIcon} label="Dashboard" to={ROUTING_DASHBOARD} />
                    <SidebarItem icon={UsersIcon} label="Users" to={ROUTING_USER_MANAGEMENT} />
                    <SidebarItem icon={FilmIcon} label="Movies" to={ROUTING_MOVIE_MANAGEMENT} />
                    <SidebarItem icon={UserGroupIcon} label="Rooms" to="/rooms" />
                    <SidebarItem icon={ShoppingCartIcon} label="Orders" to="/orders" />
                </div>
                
                <div className="mt-4">
                    <p className="text-gray-400 uppercase text-xs px-4 mb-2">Pages</p>
                    <SidebarItem icon={DocumentTextIcon} label="Documentation" to="/documentation" />
                    <SidebarItem icon={Cog6ToothIcon} label="Settings" to="/settings" />
                </div>
            </nav>
        </div>
    );
};


export { Sidebar };
