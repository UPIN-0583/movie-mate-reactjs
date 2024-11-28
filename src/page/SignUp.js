import React from 'react';
import { ROUTING_LOGIN } from "../router";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const SignUpPage = () => {
    const {
        register,
        watch,
        handleSubmit,
        formState: { errors }
    } = useForm({
        defaultValues: {
            gender: "male",         // Đặt giá trị mặc định là "male"
            termsAccepted: false    // Đặt giá trị mặc định là false
        }
    });



    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#151515] relative">
            {/* Tấm ảnh nền */}
            <div
                className="bg-signUp absolute inset-0 z-0 bg-contain bg-center rounded-lg w-[600px] border border-white m-auto"
            ></div>

            {/* Form đăng ký */}
            <div className="bg-[#151515] relative z-10 bg-opacity-75 backdrop-blur-sm border border-gray-700 p-8 rounded-lg shadow-lg max-w-md w-full mx-4">
                <h2 className="text-2xl font-bold text-center text-white mb-6">Đăng ký</h2>

                <form className="space-y-4">
                    {/* Họ và tên */}
                    <input
                        {...register("name", { required: "Vui lòng nhập họ và tên" })}
                        type="text"
                        placeholder="Họ và tên"
                        className="w-full px-4 py-2 rounded bg-gray-700 bg-opacity-50 text-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    />
                    {errors.name && <p className="text-red-500">{errors.name.message}</p>}

                    {/* Email */}
                    <input
                        {...register("email", {
                            required: "Vui lòng nhập email",
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                message: "Email không hợp lệ"
                            }
                        })}
                        type="email"
                        placeholder="Nhập Email"
                        className="w-full px-4 py-2 rounded bg-gray-700 bg-opacity-50 text-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    />
                    {errors.email && <p className="text-red-500">{errors.email.message}</p>}

                    {/* Số điện thoại */}
                    <input
                        {...register("phone", {
                            required: "Vui lòng nhập số điện thoại",
                            pattern: {
                                value: /^[0-9]+$/, // Chỉ cho phép các ký tự là chữ số
                                message: "Số điện thoại chỉ được chứa các ký tự chữ số"
                            }
                        })}
                        type="text"
                        placeholder="Nhập Số điện thoại"
                        className="w-full px-4 py-2 rounded bg-gray-700 bg-opacity-50 text-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    />
                    {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}

                    {/* Giới tính */}
                    <div className="flex items-center space-x-4 text-gray-300">
                        <label className="flex items-center">
                            <input {...register("gender", { required: true })} type="radio" value="male" className="mr-2" />
                            Nam
                        </label>
                        <label className="flex items-center">
                            <input {...register("gender", { required: true })} type="radio" value="female" className="mr-2" />
                            Nữ
                        </label>
                    </div>
                    {errors.gender && <p className="text-red-500">Vui lòng chọn giới tính</p>}

                    {/* Ngày sinh */}
                    <input
                        {...register("birthday", {
                            required: "Vui lòng chọn ngày sinh",
                            validate: value => {
                                const today = new Date();
                                const selectedDate = new Date(value);
                                return selectedDate <= today || "Ngày sinh không hợp lệ";
                            }
                        })}
                        type="date"
                        className="w-full px-4 py-2 rounded bg-gray-700 bg-opacity-50 text-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    />
                    {errors.birthday && <p className="text-red-500">{errors.birthday.message}</p>}

                    {/* Mật khẩu */}
                    <input
                        {...register("password", {
                            required: "Vui lòng nhập mật khẩu",
                            minLength: {
                                value: 6,
                                message: "Mật khẩu phải có ít nhất 6 ký tự"
                            },
                            validate: {
                                hasLetter: value => /[a-zA-Z]/.test(value) || "Mật khẩu phải có ít nhất một chữ cái",
                                hasNumber: value => /\d/.test(value) || "Mật khẩu phải có ít nhất một chữ số",
                                hasSpecialChar: value => /[!@#$%^&*(),.?":{}|<>]/.test(value) || "Mật khẩu phải có ít nhất một ký tự đặc biệt"
                            }
                        })}
                        type="password"
                        placeholder="Nhập Mật khẩu"
                        className="w-full px-4 py-2 rounded bg-gray-700 bg-opacity-50 text-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    />
                    {/* Hiển thị lỗi nếu có */}
                    {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                    {errors.password?.types?.hasLetter && <p className="text-red-500">{errors.password.types.hasLetter}</p>}
                    {errors.password?.types?.hasNumber && <p className="text-red-500">{errors.password.types.hasNumber}</p>}
                    {errors.password?.types?.hasSpecialChar && <p className="text-red-500">{errors.password.types.hasSpecialChar}</p>}

                    {/* Nhập lại mật khẩu */}
                    <input
                        {...register("rePassword", {
                            required: "Vui lòng nhập lại mật khẩu",
                            validate: (value) => value === watch("password") || "Mật khẩu không khớp"
                        })}
                        type="password"
                        placeholder="Nhập lại mật khẩu"
                        className="w-full px-4 py-2 rounded bg-gray-700 bg-opacity-50 text-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    />
                    {errors.rePassword && <p className="text-red-500">{errors.rePassword.message}</p>}

                    {/* Checkbox đồng ý điều khoản */}
                    <div className="flex items-center text-gray-300">
                        <input
                            {...register("termsAccepted", { required: "Bạn cần đồng ý với điều khoản dịch vụ." })}
                            type="checkbox"
                            className="mr-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        />
                        <label className='text-sm'>
                            Bằng việc đăng ký tài khoản tôi đồng ý với điều khoản dịch vụ và chính sách bảo mật của MovieMate
                        </label>
                    </div>
                    {errors.termsAccepted && <p className="text-red-500">{errors.termsAccepted.message}</p>}

                    {/* Nút Đăng ký */}
                    <button
                        type="submit"
                        className="w-full py-2 bg-yellow-500 text-gray-900 font-semibold rounded-lg hover:bg-yellow-600 transition duration-300"
                    >
                        Đăng ký
                    </button>

                    {/* Đường dẫn đến đăng nhập */}
                    <p className="text-center text-gray-300 mt-4">
                        Bạn đã có tài khoản?{' '}
                        <Link to={ROUTING_LOGIN} className="text-yellow-400 hover:underline">
                            Đăng nhập ngay
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export { SignUpPage };
