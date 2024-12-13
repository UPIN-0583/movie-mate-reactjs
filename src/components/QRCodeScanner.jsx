// src/components/QRCodeScanner.js
import React from "react";
import images from "../asset";

const QRCodeScanner = () => {
  return (
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
  );
};

export { QRCodeScanner };
