import React from 'react';
import images from '../asset'

const Navigate = () => {
    return (
        <div className="flex items-center justify-center space-x-4 bg-gray-900 p-4 rounded-lg">
            {/* Các nút lựa chọn */}
            <button className="flex-1 w-32 items-center justify-center px-4 py-2 border border-gray-400 rounded-full text-yellow-400 font-bold text-sm">
                1. Chọn Rạp
            </button>
            <button className="flex-1 w-32 items-center justify-center px-4 py-2 border border-gray-400 rounded-full text-yellow-400 font-bold text-sm">
                2. Chọn Phim
            </button>
            <button className="flex-1 w-32 items-center justify-center px-4 py-2 border border-gray-400 rounded-full text-yellow-400 font-bold text-sm">
                3. Chọn Ngày
            </button>
            <button className="flex-1 w-32 items-center justify-center px-4 py-2 border border-gray-400 rounded-full text-yellow-400 font-bold text-sm">
                4. Chọn Suất
            </button>

            {/* Nút Đặt vé nhanh */}
            <button className="flex items-center justify-center px-4 py-2 bg-yellow-400 text-black font-bold text-sm rounded-full">
                <img
                    src={images.bookingIcon}
                    alt="Booking"
                    className="w-6 h-6"
                />
                <div className='ms-2'>Đặt vé nhanh</div>
            </button>
        </div>
    );
};

export {Navigate};
