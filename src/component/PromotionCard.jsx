import React from "react";

const PromotionCard = ({promotion}) => {
    return (
        <div className="flex-shrink-0 w-full px-4 h-[150px]">
            <img
                src={promotion.image}
                alt={promotion.title}
                className="w-full h-full object-cover rounded-lg"
            />
        </div>
    );
};

export { PromotionCard};
