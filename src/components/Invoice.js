import React, { useState, useEffect } from "react";
import { useMovies } from "../context/MovieContext";
import { Link } from "react-router-dom";
import { ROUTING_ORDER_PAYMENT } from "../router";
import {useCreateOrder} from "../api/order/useCreateOrder";

const Invoice = ({
                     selectedSeats,
                     selectedCombos,
                     selectedCinema,
                     selectedMovie,
                     selectedTime,
                     selectedDate,
                 }) => {
    const { movies } = useMovies(); // Lấy dữ liệu từ MovieContext
    const [ordercode, setOrdercode] = useState("");



    // Hàm tạo mã order code ngẫu nhiên 12 ký tự số
    const generateOrderCode = () => {
        const randomCode = Array.from({ length: 12 }, () =>
            Math.floor(Math.random() * 10)
        ).join(""); // Sinh chuỗi 12 ký tự số
        setOrdercode(randomCode);
    };

    // Tạo mã order code khi component mount
    useEffect(() => {
        generateOrderCode();
    }, []);

    const totalSeatsPrice = selectedSeats.length * 50000; // Giá mỗi ghế 50,000 VND

    const combos = movies.combos;
    const totalComboPrice = Object.entries(selectedCombos).reduce(
        (total, [id, qty]) => {
            const combo = combos.find((combo) => combo.id === parseInt(id)); // Tìm combo theo id
            return combo ? total + combo.price * qty : total; // Nếu tìm thấy combo, tính giá
        },
        0
    );

    const totalPrice = totalSeatsPrice + totalComboPrice;

    // Gọi hook useCreateOrder
    const { mutate: createOrder } = useCreateOrder({
        onSuccess: (response) => {
            console.log("Order created successfully:", response);
        },
        onError: (error) => {
            console.error("Failed to create order:", error.response.data);
        },
    });

    const currentDate = new Date();
    const isoDate = currentDate.toISOString().slice(0, 10);

    const user = JSON.parse(localStorage.getItem("user")); // Lấy và parse dữ liệu từ localStorage
    const userId = user.id;
    const handleCreateOrder = () => {


        console.log({
            ordercode,
            isoDate,
            totalPrice,
            userId
        });
        // Gọi mutate từ useCreateOrder
        createOrder({
            order_code: ordercode,    // Đổi tên từ ordercode thành order_code
            order_date: isoDate,      // Đổi tên từ isoDate thành order_date
            total_amount: totalPrice, // Đổi tên từ totalPrice thành total_amount
            user_id: userId,
        });
    };

    return (
        <div className="bg-[#27282D] rounded-lg p-6">
            <h4 className="text-white font-bold text-2xl mb-4 py-2">Hóa đơn</h4>
            <div className="space-y-2">
                <p className="text-yellow-400 text-lg text-left">
                    <strong>Mã Đơn Hàng</strong>
                </p>
                <p className="text-white text-lg font-medium text-left">
                    {ordercode || "Đang tạo mã đơn hàng..."}
                </p>

                <p className="text-yellow-400 text-lg text-left">
                    <strong>Rạp chiếu</strong>
                </p>
                <p className="text-white text-lg font-medium text-left">
                    {selectedCinema || "Chưa chọn rạp"}
                </p>

                <p className="text-yellow-400 text-lg text-left">
                    <strong>Phim</strong>
                </p>
                <p className="text-white text-lg font-medium text-left">
                    {selectedMovie || "Chưa chọn phim"}
                </p>

                <p className="text-yellow-400 text-lg text-left">
                    <strong>Thời gian</strong>
                </p>
                <p className="text-white text-lg font-medium text-left">
                    {selectedTime || selectedDate
                        ? `${selectedTime} ${selectedDate}`
                        : "Chưa chọn thời gian"}
                </p>
                <div className="flex">
                    <div className="flex-1">
                        <p className="text-yellow-400 text-lg text-left">
                            <strong>Ghế:</strong>
                        </p>
                        <p className="text-white text-lg font-medium text-left">
                            {selectedSeats.length > 0
                                ? selectedSeats.join(", ")
                                : "Chưa chọn ghế"}
                        </p>
                    </div>
                    <div className="flex-1">
                        <p className="text-yellow-400 text-lg text-left">
                            <strong>Combo:</strong>
                        </p>
                        {Object.entries(selectedCombos).map(([id, qty]) =>
                            qty > 0 ? (
                                <p
                                    key={id}
                                    className="text-white text-lg font-medium text-left"
                                >
                                    {qty} {combos.find((combo) => combo.id === parseInt(id)).name}
                                </p>
                            ) : null
                        )}
                    </div>
                </div>

                <hr className="border-dashed border border-white" />
                <div className="flex justify-between items-center text-lg font-semibold text-white">
                    <p className="text-yellow-400">TỔNG TIỀN:</p>
                    <p>{totalPrice.toLocaleString()} VND</p>
                </div>
            </div>

            <Link
                to={ROUTING_ORDER_PAYMENT}
                state={{
                    ordercode, // Gửi mã order qua state
                    selectedSeats,
                    selectedCombos,
                    selectedCinema,
                    selectedTime,
                    selectedDate,
                    totalPrice,
                    selectedMovie,
                }}
            >
                <button
                    type="submit"
                    className="bg-yellow-400 text-black font-bold py-2 px-4 rounded-lg w-full mt-4"
                    onClick={handleCreateOrder}
                >
                    Đặt vé
                </button>
            </Link>
        </div>
    );
};

export { Invoice };
