// src/components/Header.jsx
import React from 'react';

const AdminHeader = () => {
    return (
        <div className="flex items-center justify-end p-4 bg-gray-900 text-gray-200">
            <div className="mx-4 flex items-center cursor-pointer">
                <img
                    src="https://via.placeholder.com/32"
                    alt="profile"
                    className="rounded-full w-8 h-8 object-cover"
                />
                <span className="ml-2">profile</span>
            </div>
        </div>
    );
};

export {AdminHeader};
