import React from "react";
import {FaTruck,FaHeadset,FaShieldAlt,FaBoxOpen,} from "react-icons/fa";

const shippingData = [
  {
    icon: <FaTruck />,
    title: "Free Shipping",
    desc: "Free shipping on all your order",
  },
  {
    icon: <FaHeadset />,
    title: "Customer Support 24/7",
    desc: "Instant access to Support",
  },
  {
    icon: <FaShieldAlt />,
    title: "100% Secure Payment",
    desc: "We ensure your money is safe",
  },
  {
    icon: <FaBoxOpen />,
    title: "Money-Back Guarantee",
    desc: "30 Days Money-Back Guarantee",
  },
];

const Shipping = () => {
  return (
    <div className="w-full pt-6 pb-15 bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 ">
        {shippingData.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-2 p-3 ">
            <div className="text-4xl text-green-500">
              {item.icon}
            </div>

            <div>
              <h3 className="font-semibold text-[16px] text-[#1A1A1A]" >
                {item.title}
              </h3>
              <p className="text-[#9a9a9a] font-normal text-sm ">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shipping;