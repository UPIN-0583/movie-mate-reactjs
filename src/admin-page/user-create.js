import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useCreateUser } from '../api/user/useCreateUser';
import { ROUTING_USER_MANAGEMENT } from "../router";  // Hook tạo người dùng

const UserCreate = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        reset
    } = useForm();
    const { mutate: createUser, isPending, error } = useCreateUser();  // Hook tạo người dùng
    const navigate = useNavigate();

    // Gửi dữ liệu lên server khi form được submit
    const onSubmit = (data) => {
        createUser(data, {
            onSuccess: () => {
                // Điều hướng đến trang User Management khi tạo thành công
                navigate(ROUTING_USER_MANAGEMENT);
                console.log('createUser data: ' + data);
            },
            onError: (err) => {
                // Xử lý lỗi nếu có
                console.error('Error creating user:', err);
            }
        });
    };

    return (
        <div className="bg-gray-800 p-4 rounded-md">
            <h2 className="text-gray-200 text-xl font-semibold mb-4">Add New User</h2>

            {error && (
                <div className="bg-red-500 text-white p-2 rounded mb-4">
                    Error: {error.message}
                </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)}>
                {/* Name */}
                <div className="mb-4">
                    <label htmlFor="name" className="text-gray-200">Name</label>
                    <input
                        type="text"
                        id="name"
                        {...register('name', { required: 'Name is required' })}
                        className="w-full p-2 mt-2 rounded bg-gray-700 text-gray-200"
                    />
                    {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                </div>

                {/* Email */}
                <div className="mb-4">
                    <label htmlFor="email" className="text-gray-200">Email</label>
                    <input
                        type="email"
                        id="email"
                        {...register('email', {
                            required: 'Email is required',
                            pattern: {
                                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                                message: 'Email is not valid'
                            }
                        })}
                        className="w-full p-2 mt-2 rounded bg-gray-700 text-gray-200"
                    />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                </div>

                {/* Phone */}
                <div className="mb-4">
                    <label htmlFor="phone" className="text-gray-200">Phone</label>
                    <input
                        type="text"
                        id="phone"
                        {...register('phone')}
                        className="w-full p-2 mt-2 rounded bg-gray-700 text-gray-200"
                    />
                </div>

                {/* Gender */}
                <div className="mb-4">
                    <label htmlFor="gender" className="text-gray-200">Gender</label>
                    <select
                        id="gender"
                        {...register('gender')}
                        className="w-full p-2 mt-2 rounded bg-gray-700 text-gray-200"
                    >
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                {/* Birthday */}
                <div className="mb-4">
                    <label htmlFor="birthday" className="text-gray-200">Birthday</label>
                    <input
                        type="date"
                        id="birthday"
                        {...register('birthday')}
                        className="w-full p-2 mt-2 rounded bg-gray-700 text-gray-200"
                    />
                </div>

                {/* Role */}
                <div className="mb-4">
                    <label htmlFor="role" className="text-gray-200">Role</label>
                    <input
                        type="text"
                        id="role"
                        {...register('role', { required: 'Role is required' })}
                        className="w-full p-2 mt-2 rounded bg-gray-700 text-gray-200"
                    />
                    {errors.role && <p className="text-red-500 text-sm">{errors.role.message}</p>}
                </div>

                {/* Status */}
                <div className="mb-4">
                    <label htmlFor="status" className="text-gray-200">Status</label>
                    <input
                        type="text"
                        id="status"
                        {...register('status')}
                        className="w-full p-2 mt-2 rounded bg-gray-700 text-gray-200"
                    />
                </div>

                {/* Password */}
                <div className="mb-4">
                    <label htmlFor="password" className="text-gray-200">Password</label>
                    <input
                        type="password"
                        id="password"
                        {...register('password', {
                            required: 'Password is required',
                            minLength: {
                                value: 6,
                                message: 'Password must be at least 6 characters long'
                            }
                        })}
                        className="w-full p-2 mt-2 rounded bg-gray-700 text-gray-200"
                    />
                    {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
                </div>

                <button
                    type="submit"
                    disabled={isPending}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-md"
                >
                    {isPending ? 'Saving...' : 'Add User'}
                </button>
            </form>
        </div>
    );
};

export { UserCreate };
