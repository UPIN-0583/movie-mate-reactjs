import React from "react";
import images from "../asset"; // Giả sử bạn đã import các icon từ thư mục asset

const TicketCard = ({ ticketDetails }) => {
  return (
    <div className="bg-[#1E1E1E] p-6 rounded-xl shadow-lg max-w-sm mx-auto">
      {/* Title and Poster */}
      <div className="flex mb-4">
        <div className="w-1/3">
          <img
            src={ticketDetails.poster}
            alt="Poster"
            className="w-full h-auto rounded"
          />
        </div>
        <div className="w-2/3 pl-4">
          <h3 className="pt-5 text-xl font-bold text-white text-left">
            {ticketDetails.title}
          </h3>
          <div className="flex items-center text-sm text-white mt-2">
            <img src={images.clockIcon} alt="Clock Icon" className="mr-2" />
            <p>{ticketDetails.duration}</p>
          </div>
          <div className="flex items-center text-sm text-white">
            <img src={images.genreIcon} alt="Genre Icon" className="mr-2" />
            <p>{ticketDetails.genre}</p>
          </div>
        </div>
      </div>

      <div className="border-b border-gray-700 my-4"></div>

      {/* Time, Date, Room, and Seats */}
      <div className="flex mb-4">
        <div className="w-1/2 text-sm text-white">
          <div className="flex items-center mb-1">
            <img
              src={images.calendarIcon}
              alt="Calendar Icon"
              className="mr-2"
            />
            <div className="flex flex-col items-center">
              <p>{ticketDetails.time}</p>
              <p>{ticketDetails.date}</p>
            </div>
          </div>
        </div>

        <div className="w-1/2 text-sm text-white pl-4">
          <div className="flex items-center mb-1">
            <img src={images.seatIcon} alt="Seat Icon" className="mr-2" />
            <div className="flex flex-col items-center">
              <p>{ticketDetails.room}</p>
              <p>{ticketDetails.seats}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-b border-gray-700 my-4"></div>

      {/* Price, Theater, and Address */}
      <div className="mb-4">

        <div className="text-sm text-white">
          <div className="flex items-center mb-1">
            <img src={images.moneyIcon} alt="Money Icon" className="mr-2" />
            <p>{ticketDetails.price}</p>
          </div>
        </div>

        <div className="text-sm text-white">
          <div className="flex items-center mb-1">
            <img
              src={images.locationIcon}
              alt="Location Icon"
              className="mr-2 w-6 h-6"
            />
            <p>{ticketDetails.theater}</p>
          </div>
          <div className="flex items-center">
            <p>{ticketDetails.address}</p>
          </div>
        </div>
      </div>

      <div className="border-b border-gray-700 my-4"></div>
      <div className="text-center">
        <p>Ticket ID: {ticketDetails.barcode}</p>
      </div>
    </div>
  );
};

export { TicketCard };
