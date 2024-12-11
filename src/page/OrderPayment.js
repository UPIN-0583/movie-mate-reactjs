import React from "react";
import images from "../asset";

const OrderPayment = () => {
    return (
        <div className="bg-[#151515] min-h-screen flex flex-col">
            <div className="container w-[90%] mx-auto px-8 py-4">

                {/* Title section */}
                <div className="flex justify-center items-center mt-4 mb-10 p-4 bg-blue-950 rounded-lg">
                    <h2 className="text-white text-2xl font-bold">THANH TOÁN ĐƠN HÀNG</h2>
                </div>

                {/* Content */}
                <div className="flex gap-8 w-full">
                    {/* Thông tin đơn hàng */}
                    <div className="bg-[#27282D] rounded-lg p-6 w-1/3 text-left">
                        <h2 className="text-2xl font-bold mb-4 text-white text-center p-2">Thông tin đơn hàng</h2>
                        <p className="text-lg font-semibold text-yellow-400 p-2">Nhà cung cấp:</p>
                        <p className="text-lg text-white pl-2">MovieMate Cinema</p>
                        <p className="text-lg font-semibold text-yellow-400 p-2">Mã đơn hàng:</p>
                        <p className="text-lg text-white pl-2">12345678910</p>
                        <p className="text-lg font-semibold text-yellow-400 p-2">Chi tiết đơn hàng:</p>
                        <p className="text-lg text-white pl-2">Mua vé xem phim Dimono: Lối thoát cuối cùng, Ghế G4 G5 G13 G14</p>
                        <hr className="my-4 border-gray-600" />
                        <div className="flex justify-between items-center text-lg font-semibold text-white px-2">
                            <p className="text-yellow-400">Thành tiền:</p>
                            <p>348.000 đ</p>
                        </div>
                        <button className="mt-4 bg-yellow-400 text-black font-bold py-2 px-4 rounded-lg w-full ">
                            Xác nhận đã thanh toán
                        </button>
                    </div>

                    {/* Quét mã QR */}
                    <div className="bg-[#27282D] rounded-lg p-6 w-2/3 text-center">
                        <h2 className="text-2xl font-bold mb-4 text-white text-center p-2">Quét QR để thanh toán</h2>
                        <p className="text-lg mb-2 text-white text-center">
                            Sử dụng App Mono hoặc ứng dụng camera
                        </p>
                        <p className="text-lg mb-2 text-white text-center">
                            hỗ trợ QR code để quét mã
                        </p>
                        <div className="bg-white p-2 inline-block rounded-2xl mt-6 border-4 border-black ">
                            <img
                                src={images.qrCode}
                                alt="QR Code"
                                className="w-60 h-60"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export { OrderPayment };
