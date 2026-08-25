import React from "react";
import {
  FaCheck,
  FaTruck,
  FaShoppingBag,
  FaUndo,
  FaWhatsapp,
} from "react-icons/fa";

const features = [
  {
    icon: FaCheck,
    text: "100% Original Products",
  },
  {
    icon: FaTruck,
    text: "Fast Delivery",
  },
  {
    icon: FaShoppingBag,
    text: "Secure Payment Gateway",
  },
  {
    icon: FaUndo,
    text: "Easy Returns & Refunds",
  },
  {
    icon: FaWhatsapp,
    text: "24/7 WhatsApp Support",
  },
];

const FeatureBar = () => {
  return (
    <div className="w-full py-5">
      <div className="xl:container px-2 xl:px-0 mx-auto grid w-full grid-cols-2 sm:grid-cols-5 xl:gap-12  xl:grid-cols-5 items-center gap-2 ">
        {features.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="flex items-center gap-2 whitespace-nowrap"
            >
              <div className="flex h-5 w-5 lg:h-10 lg:w-10 shrink-0 items-center justify-center rounded-full bg-[#00bfae] text-white">
                <Icon className="text-[16px] lg:text-[18px]" />
              </div>

              <span className="text-[9px] font-normal text-[#777] lg:text-[18px]">
                {item.text}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FeatureBar;