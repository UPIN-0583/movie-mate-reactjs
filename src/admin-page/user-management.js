import { useGetUsers } from "../api/user/useGetUser";
import { Link } from "react-router-dom";
import { ROUTING_USER_CREATE } from "../router";
import { useDeleteUser } from "../api/user/useDeleteUser";

const UserManagement = () => {
    const { data: UserList, isFetching, error } = useGetUsers(); // Lấy danh sách người dùng
    const { mutate: deleteUser, isPending, error: deleteError } = useDeleteUser(); // Hook xóa người dùng

    const handleDelete = (userId) => {
        if (window.confirm('Are you sure you want to delete this user?')) {
            deleteUser(userId, {
                onSuccess: () => {
                    // Sau khi xóa thành công, tự động cập nhật lại danh sách người dùng
                    console.log(`User ${userId} deleted successfully`);
                },
                onError: (err) => {
                    console.error('Error deleting user:', err);
                }
            });
        }
    };

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className="bg-white p-4 rounded-md">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-blue-500 text-xl font-semibold">User Management</h2>
                <Link to={ROUTING_USER_CREATE} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
                    Add New User
                </Link>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-left text-black">
                    <thead className="border-b border-gray-700  text-blue-500">
                    <tr>
                        <th className="py-2 px-4 border-b-2 border-black">Id</th>
                        <th className="py-2 px-4 border-b-2 border-black">Name</th>
                        <th className="py-2 px-4 border-b-2 border-black">Email</th>
                        <th className="py-2 px-4 border-b-2 border-black">Phone</th>
                        <th className="py-2 px-4 border-b-2 border-black">Gender</th>
                        <th className="py-2 px-4 border-b-2 border-black">Birthday</th>
                        <th className="py-2 px-4 border-b-2 border-black">Role</th>
                        <th className="py-2 px-4 border-b-2 border-black">Status</th>
                        <th className="py-2 px-4 border--2 border-black">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {isFetching ? (
                        <tr>
                            <td colSpan="9" className="py-2 text-center">
                                Loading...
                            </td>
                        </tr>
                    ) : (
                        UserList?.data?.map((user, index) => (
                            <tr key={user.id} className="bg-white">
                                <td className="py-2 px-4 border-y-2 border-black">{user.id}</td>
                                <td className="py-2 px-4 border-y-2 border-black">{user.name}</td>
                                <td className="py-2 px-4 border-y-2 border-black">{user.email}</td>
                                <td className="py-2 px-4 border-y-2 border-black">{user.phone}</td>
                                <td className="py-2 px-4 border-y-2 border-black">{user.gender}</td>
                                <td className="py-2 px-4 border-y-2 border-black">{user.birthday}</td>
                                <td className="py-2 px-4 border-y-2 border-black">{user.user_role}</td>
                                <td className="py-2 px-4 border-y-2 border-black">{user.user_status}</td>
                                <td className="py-2 px-4 border-y-2 border-black">
                                    <button
                                        className="text-red-500 hover:text-white transition-colors"
                                        onClick={() => handleDelete(user.id)}
                                        disabled={isPending} // Disable khi đang xóa
                                    >
                                        {isPending ? "Deleting..." : "🗑"}
                                    </button>
                                </td>
                            </tr>
                        ))
                    )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export { UserManagement };