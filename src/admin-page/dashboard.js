import React, { useEffect, useState } from "react";
import { fetchDashboardData } from "../api/dashboard";

const Dashboard = () => {
    const [dashboardData, setDashboardData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadData = async () => {
            try {
                const data = await fetchDashboardData();
                setDashboardData(data);
            } catch (err) {
                setError("Failed to load dashboard data");
            } finally {
                setLoading(false);
            }
        };
        loadData();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <h1 className="text-3xl font-semibold mb-6 text-gray-800">Admin Dashboard</h1>

            {/* Overview Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                {[
                    { title: "Total Users", value: dashboardData.totalUsers, color: "blue-500" },
                    { title: "Total Movies", value: dashboardData.totalMovies, color: "blue-500" },
                    { title: "Total Orders", value: dashboardData.totalOrders, color: "blue-500" },
                    { title: "Total Revenue", value: `${dashboardData.totalRevenue}đ`, color: "blue-500" },
                ].map((card, index) => (
                    <div key={index} className="bg-white p-4 shadow rounded">
                        <h2 className="text-lg font-semibold text-gray-700">{card.title}</h2>
                        <p className={`text-3xl font-bold text-${card.color}`}>{card.value}</p>
                    </div>
                ))}
            </div>

            {/* Recent Orders */}
            <div className="bg-white p-6 shadow rounded">
                <h2 className="text-2xl text-yellow-500 font-semibold mb-4">Recent Orders</h2>
                <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                        <tr className="text-yellow-500">
                            <th className="py-2 px-4 border-b">Order Code</th>
                            <th className="py-2 px-4 border-b">User</th>
                            <th className="py-2 px-4 border-b">Total Amount</th>
                            <th className="py-2 px-4 border-b">Order Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dashboardData.recentOrders.length > 0 ? (
                            dashboardData.recentOrders.map((order) => (
                                <tr key={order.id} className="hover:bg-gray-50 text-black">
                                    <td className="py-2 px-4 border-b text-center">{order.order_code}</td>
                                    <td className="py-2 px-4 border-b text-center">
                                        {order.user?.name || "N/A"}
                                    </td>
                                    <td className="py-2 px-4 border-b text-center">{order.total_amount}đ</td>
                                    <td className="py-2 px-4 border-b text-center">{order.order_date}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4" className="py-4 text-center text-gray-500">
                                    No recent orders available.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Dashboard;
